"use client";

import { cn } from "@/utils/cn";

type AudioPlayerProps = {
	url: string;
	color: string;
	image: string;
	className?: string;
};

const AudioPlayer = ({ url, color, image, className }: AudioPlayerProps) => {
	return (
		<audio className={cn("", className)}>
      <h1>Testing</h1>
		</audio>
	);
};

export default AudioPlayer;
