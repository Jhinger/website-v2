import { cn } from "@/utils/cn";

const PlayButton = ({ className }: { className?: string }) => {
	return (
		<svg
			className={cn("absolute m-auto w-full h-full fill-text", className)}
			width="121"
			height="130"
			viewBox="0 0 121 130"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M115.098 56.2408C121.998 60.0417 121.998 69.9583 115.098 73.7592L15.3246 128.715C8.65993 132.386 0.5 127.564 0.5 119.955L0.5 10.0445C0.5 2.43578 8.65995 -2.38557 15.3246 1.28536L115.098 56.2408Z" />
		</svg>
	);
};

export default PlayButton;
