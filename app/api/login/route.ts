import { isDevelopment } from "@/utils/environment";
import { NextRequest, NextResponse } from "next/server";
import { RedirectType, redirect } from "next/navigation";

export async function GET(request: NextRequest) { 
  if (!isDevelopment()) return redirect(process.env.BASE_URL, RedirectType.push);

  const redirectURL = new URL(process.env.SPOTIFY_AUTHORIZE_ENDPOINT);
  redirectURL.searchParams.set("client_id", process.env.SPOTIFY_CLIENT_ID);
  redirectURL.searchParams.set("response_type", "code");
  redirectURL.searchParams.set("redirect_uri", process.env.SPOTIFY_REDIRECT_URI);
  redirectURL.searchParams.set("scope", "user-read-recently-played");

  return NextResponse.redirect(redirectURL);
}