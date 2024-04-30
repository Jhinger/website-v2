import { cn } from "@/utils/cn";
import { data } from "@/data";
import Link from "next/link";
import ControlGroup from "@/components/ControlCenter/ControlGroup";
import RepoIcon from "@/assets/RepoIcon";

type ExperienceProps = {
	className?: string;
};

const Experience = ({ className }: ExperienceProps) => {
	return (
		<div
			id="experience"
			className={cn(
				"w-max mb-52 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12",
				className
			)}>
			{data.experience.map((experience, index) => (
				<ControlGroup
					className="w-[20rem] md:w-[23rem] lg:w-[25rem] h-[10rem] relative overflow-hidden cursor-pointer first:ring-2 first:ring-primary first:ring-offset-2 ring-offset-colorBackground"
					key={experience.name}>
					<RepoIcon className="fill-white" />
				</ControlGroup>
			))}
		</div>
	);
};

export default Experience;
