import Link from "next/link";
import { cn } from "@/utils/cn";

type ControlButtonProps = {
	children: React.ReactNode;
	href?: string;
	className?: string;
};

const ControlButton = ({ children, href, className }: ControlButtonProps) => {
	return (
		<>
			{href 
				? (
					<Link
						href={href ?? ""}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"relative w-max flex justify-center items-center p-4 bg-button rounded-2xl",
							className
						)}>
						{children}
					</Link>
				)
				: (
					<button
						className={cn(
							"relative w-max flex justify-center items-center p-4 bg-button rounded-2xl",
							className
						)}>
						{children}
					</button>
				)
			}
		</>
	)
};

export default ControlButton;




