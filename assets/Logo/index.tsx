import { cn } from "@/utils/cn";

type LogoProps = {
	className?: string;
};

const Logo = ({ className }: LogoProps) => {
	return (
		<svg
			className={cn("", className)}
			width="75"
			height="75"
			viewBox="0 0 75 75"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_51_11)">
				<path
					d="M15.412 0.00109863H29.0459V59.1641H15.412V0.00109863Z"
					fill="#11E2FF"
				/>
				<path
					d="M15.412 0.00109863H74.6894V11.7221H15.412V0.00109863Z"
					fill="#11E2FF"
				/>
				<path
					d="M15.412 48.0009H74.6894V59.7219H15.412V48.0009Z"
					fill="#11E2FF"
				/>
				<path
					d="M8.89163 63.0708H74.6894V74.7917H8.89163V63.0708Z"
					fill="#11E2FF"
				/>
				<path
					d="M62.2732 59.3352L62.3651 31.8149L74.8134 31.8518L74.7215 59.3722L62.2732 59.3352Z"
					fill="#11E2FF"
				/>
				<path
					d="M0 74.9632L0.25055 0L12.6987 0.0368861L12.4482 75L0 74.9632Z"
					fill="#11E2FF"
				/>
				<path
					d="M35.6056 18.4194L75 18.5361L74.9609 30.2571L35.5665 30.1404L35.6056 18.4194Z"
					fill="#11E2FF"
				/>
				<path
					d="M62.2412 58.6057H74.6895V66.9778H62.2412V58.6057Z"
					fill="#11E2FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_51_11">
					<rect width="75" height="75" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Logo;
