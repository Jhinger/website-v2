"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			enableSystem={false}
			storageKey="theme"
			defaultTheme="dark"
			themes={["light", "dark"]}>
			{children}
		</ThemeProvider>
	);
}
