import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Providers from "@/app/providers";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gurshan Jhinger",
	description:
		"Gurshan Jhinger is a Software Developer passionate about developing clean, functional, and satisfying web experiences.",
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: "primary",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>{children}</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_URL: string;
			SPOTIFY_CLIENT_ID: string;
			SPOTIFY_CLIENT_SECRET: string;
			SPOTIFY_TOKEN_ENDPOINT: string;
			SPOTIFY_AUTHORIZE_ENDPOINT: string;
			SPOTIFY_RECENTLY_PLAYED_ENDPOINT: string;
			SPOTIFY_REDIRECT_URI: string;
			KV_URL: string;
			KV_REST_API_URL: string;
			KV_REST_API_TOKEN: string;
			KV_REST_API_READ_ONLY_TOKEN: string;
		}
	}
}
