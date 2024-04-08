import { cn } from "@/utils/cn";

type LinkedInIconProps = {
	className?: string;
};

const LinkedInIcon = ({ className }: LinkedInIconProps) => {
	return (
		<svg
			className={cn("w-6 h-6", className)}
			width="76"
			height="76"
			viewBox="0 0 76 76"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_72_57)">
				<path
					className="fill-buttonIcon"
					d="M15.77 11.0834C15.77 15.4565 12.255 19 7.91667 19C3.57833 19 0.0633333 15.4565 0.0633333 11.0834C0.0633333 6.71335 3.57833 3.16669 7.91667 3.16669C12.255 3.16669 15.77 6.71335 15.77 11.0834ZM15.8333 25.3334H0V76H15.8333V25.3334ZM41.1097 25.3334H25.3777V76H41.1128V49.4032C41.1128 34.6149 60.2047 33.4052 60.2047 49.4032V76H76V43.9185C76 18.9652 47.747 19.874 41.1097 32.1575V25.3334Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_72_57">
					<rect width="76" height="76" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default LinkedInIcon;
