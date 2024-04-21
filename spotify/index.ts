import { isProduction } from "@/utils/environment";
import { unstable_noStore as noStore } from "next/cache";
import { kv } from "@vercel/kv";
import { data } from "@/data";
import type { ObjectFromUnion } from "@/types";

export type RelevantSpotifyData = ObjectFromUnion<keyof typeof data.spotify>;

async function getSpotifyAccessToken(): Promise<string | null> {
  noStore(); 
  return await kv.get("spotify_access_token");
}

async function getSpotifyRefreshToken(): Promise<string | null> {
  noStore(); 
  return await kv.get("spotify_refresh_token");
}

function parseSpotifyResponse(res: SpotifyApi.UsersRecentlyPlayedTracksResponse): RelevantSpotifyData {
  return {
    url: res.items[0].track.external_urls.spotify, 
    preview_url: res.items[0].track.preview_url ?? "",
    image: res.items[0].track.album.images[0].url,
    name: res.items[0].track.name,
    artist: res.items[0].track.artists[0].name,
    played_at: res.items[0].played_at,
  }
}

async function refreshTokens(): Promise<string | Error> {
  const refresh_token = await getSpotifyRefreshToken() as string;
  
  try {
    const response = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT, {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
      },
      cache: "no-store"
    })

    if (response.ok) {
      const body = await response.json();

      await kv.set("spotify_access_token", body.access_token, { ex: body.expires_in });
      body.refresh_token
        ? await kv.set("spotify_refresh_token", body.refresh_token)
        : null

      return body.access_token;
    }

    return new Error("bad response");
  } catch (err) {
    return new Error("failed fetch");
  }
}

async function getRecentlyPlayed(access_token: string | null | Error): Promise<RelevantSpotifyData> {
  if (
    access_token === null || 
    access_token instanceof Error
  ) return data.spotify;

  const targetURL = new URL(process.env.SPOTIFY_RECENTLY_PLAYED_ENDPOINT);
  targetURL.searchParams.set("limit", "1");

  try {
    const response = await fetch(targetURL, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`
      },
      next: {
        revalidate: 300
      }
    })

    if (!response.ok) {
      return data.spotify;
    }
    
    return parseSpotifyResponse(await response.json());
  } catch (error) {
    return data.spotify;
  }
}

export default async function fetchSpotifyData(): Promise<RelevantSpotifyData> {
  if (!isProduction()) return data.spotify;

  const access_token = await getSpotifyAccessToken() || await refreshTokens();

  return await getRecentlyPlayed(access_token)
}
