import Link from "next/link";
import { cn } from "@/utils/cn";

type ControlButtonProps = {
	children: React.ReactNode;
	href?: string;
	className?: string;
	[key: string]: any;
};

const ControlButton = ({
	children,
	href,
	className,
	...props
}: ControlButtonProps) => {
	return (
		<>
			{href ? (
				<Link
					{...props}
					href={href ?? ""}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"relative w-max flex justify-center items-center p-4 bg-button rounded-2xl",
						className
					)}>
					{children}
				</Link>
			) : (
				<button
					{...props}
					className={cn(
						"relative w-max flex justify-center items-center p-4 bg-button rounded-2xl",
						className
					)}>
					{children}
				</button>
			)}
		</>
	);
};

export default ControlButton;
