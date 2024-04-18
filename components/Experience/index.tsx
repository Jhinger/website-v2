import { cn } from "@/utils/cn";
import { data } from "@/data";
import Link from "next/link";
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
				<ControlGroup
					className="w-[25rem] h-[12rem] relative border-2 border-transparent overflow-hidden cursor-pointer"
					key={experience.name}>
					<Link href={experience.url} target="__blank">
						<Image
							src={experience.image}
							className="rounded-xl relative"
							fill={true}
							objectFit="cover"
							alt={experience.name}
							quality={100}
							priority={true}
						/>
						<div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-primary/70 via-primary/50 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-200"></div>
					</Link>
				</ControlGroup>
			))}
		</div>
	);
};

export default Experience;
