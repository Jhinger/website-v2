import { cn } from "@/utils/cn";

type LogoProps = {
	className?: string;
};

const Logo = async ({ className }: LogoProps) => {
	return (
		<svg
			className={cn("", className)}
			width="75"
			height="75"
			viewBox="0 0 75 75"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_205_20)">
				<path
					d="M15.4121 0.0012207H29.0459V59.1642H15.4121V0.0012207Z"
					fill="#11E2FF"
				/>
				<path
					d="M15.4121 0.0012207H74.6895V11.7222H15.4121V0.0012207Z"
					fill="#11E2FF"
				/>
				<path d="M15.4126 48H74.7001V59.7375H15.4126V48Z" fill="#11E2FF" />
				<path
					d="M0.0375977 63.075H74.7001V75H0.0375977V63.075Z"
					fill="#11E2FF"
				/>
				<path d="M0 75L0 -2.07216e-07H11.925L11.925 75H0Z" fill="#11E2FF" />
				<path
					d="M62.3625 74.9421L62.4535 31.8L74.775 31.8578L74.6841 75.0001L62.3625 74.9421Z"
					fill="#11E2FF"
				/>
				<path
					d="M35.6055 18.4194L74.9999 18.5361L74.9608 30.2571L35.5664 30.1404L35.6055 18.4194Z"
					fill="#11E2FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_205_20">
					<rect width="75" height="75" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Logo;
