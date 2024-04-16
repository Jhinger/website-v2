import { cn } from "@/utils/cn";
import { data } from "@/data";
import ControlGroup from "@/components/ControlCenter/ControlGroup";
import Image from "next/image";

type ExperienceProps = {
	className?: string;
};

const Experience = ({ className }: ExperienceProps) => {
	return (
		<div
			id="experience"
			className={cn(
				"w-max mb-52 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-12",
				className
			)}>
			{data.experience.map((experience, index) => (
				<ControlGroup className="w-[25rem] h-[12rem]" key={experience.name}>
					<h1>Testing</h1>
				</ControlGroup>
			))}
		</div>
	);
};

export default Experience;
