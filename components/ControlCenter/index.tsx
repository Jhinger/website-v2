import { ContactIcon, GitHubIcon, LinkedInIcon } from "@/assets";
import ControlButton from "@/components/ControlCenter/ControlButton";
import ControlGroup from "@/components/ControlCenter/ControlGroup";
import { data } from "@/data";
import { cn } from "@/utils/cn";
import DarkToggle from "@/components/DarkToggle";

type ControlCenterProps = {
	className?: string;
};

const ControlCenter = ({ className }: ControlCenterProps) => {
	return (
		<div
			className={cn(
				"w-full mt-24 flex flex-row gap-4 justify-center items-center",
				className
			)}>
			<ControlGroup className="grid grid-cols-2 gap-3 justify-center items-center">
				<ControlButton
					href={data.current_link}
					className="hover:bg-primary duration-300 col-span-2">
					<div className="flex flex-col align-left justify-end text-buttonText">
						<span className="text-xxs">Currently</span>
						<span className="text-xxs font-semibold">
							{data.role_short} at {data.current}
						</span>
					</div>
				</ControlButton>

				<ControlButton href="#" className="hover:bg-contact duration-300">
					<ContactIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>

				<DarkToggle />
			</ControlGroup>

			<ControlGroup className="grid grid-cols-2 grid-rows-2 justify-center items-center">
				<ControlButton
					href={data.linkedin}
					className="hover:bg-linkedin duration-300">
					<LinkedInIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>

				<ControlButton
					href={data.github}
					className="hover:bg-github duration-300">
					<GitHubIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>
			</ControlGroup>
		</div>
	);
};

export default ControlCenter;
