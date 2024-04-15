"use client";

import ControlButton from "@/components/ControlCenter/ControlButton";
import { DarkModeIcon } from "@/assets";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const DarkToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			className="w-max"
			onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
			<ControlButton
				aria-label="Theme Toggle"
				className={cn(
					theme === "dark" ? "bg-darkmode" : "bg-button",
					"hover:bg-themeOpposite duration-300 text-buttonIcon"
				)}>
				<DarkModeIcon className="w-6 h-6" />
			</ControlButton>
		</div>
	);
};

export default DarkToggle;
