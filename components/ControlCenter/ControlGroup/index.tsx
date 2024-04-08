import { cn } from "@/utils/cn";

type ControlGroupProps = {
	children: React.ReactNode;
	className?: string;
};

const ControlGroup = ({ children, className }: ControlGroupProps) => {
	return (
		<div className={cn("w-max gap-3 p-5 bg-group rounded-xl", className)}>
			{children}
		</div>
	);
};

export default ControlGroup;
