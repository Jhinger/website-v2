import { isDevelopment, isProduction } from "@/utils/environment";
import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: NextRequest) {
  if (isDevelopment() || isProduction()) return NextResponse.redirect(process.env.BASE_URL);

  const code = request.nextUrl.searchParams.get("code") ?? null;
  const error = request.nextUrl.searchParams.get("error") ?? null;

  if (error) return NextResponse.json({ error: error }, { status: 400 });
  if (!code) return NextResponse.json({ error: "No code returned" }, { status: 400 });

  try {
    const response = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT, {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
      }
    })

    if (!response.ok) return NextResponse.json({ error: "Failed to get token", err: await response.json() }, { status: 400 });

    const data = await response.json();

    await kv.set("spotify_access_token", data.access_token, { ex: data.expires_in });
    await kv.set("spotify_refresh_token", data.refresh_token);

    return NextResponse.redirect("/");

  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}
