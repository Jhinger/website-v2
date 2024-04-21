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
				"w-max mb-52 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12",
				className
			)}>
			{data.experience.map((experience, index) => (
				<ControlGroup
					className="w-[20rem] md:w-[23rem] lg:w-[25rem] h-[12rem] relative overflow-hidden cursor-pointer first:ring-2 first:ring-primary first:ring-offset-2 ring-offset-colorBackground"
					key={experience.name}>
					<Image
						src={experience.image}
						fill={true}
						sizes={experience.sizes}
						className="relative"
						style={{ objectFit: "cover" }}
						alt={experience.name}
						quality={100}
						priority={true}
					/>
					<Link href={experience.url} target="__blank">
						<div
							className={cn(
								"absolute left-0 top-0 w-full h-full bg-gradient-to-r opacity-100 md:opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-200 from-black via-black/70"
							)}>
							<div className="flex flex-col justify-center items-start w-max h-max gap-2 relative left-8 top-6 text-xxsPlus text-white tracking-tighter">
								<span className="font font-semibold text-sm">
									{experience.name}
								</span>
								<div className="flex flex-col justify-center items-start tracking-normal">
									<span className="text-xxsPlus font-medium">
										{experience.position}
									</span>
									<span className="text-xxs font-light">
										{experience.duration}
									</span>
								</div>
							</div>
						</div>
					</Link>
				</ControlGroup>
			))}
		</div>
	);
};

export default Experience;
