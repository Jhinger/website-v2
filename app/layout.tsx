import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gurshan Jhinger",
	description: "Personal website of Gurshan Jhinger",
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
