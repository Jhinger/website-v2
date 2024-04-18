import ControlButton from "@/components/ControlCenter/ControlButton";
import ControlGroup from "@/components/ControlCenter/ControlGroup";
import DarkToggle from "@/components/DarkToggle";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import fetchSpotifyData from "@/spotify";
import { data } from "@/data";
import { cn } from "@/utils/cn";
import { ContactIcon, GitHubIcon, LinkedInIcon } from "@/assets";

type ControlCenterProps = {
	className?: string;
};

const ControlCenter = async ({ className }: ControlCenterProps) => {
	const spotifyData = await fetchSpotifyData();

	return (
		<div
			className={cn(
				"w-full flex flex-row mt-16 mb-40 flex-wrap gap-4 justify-center items-center",
				className
			)}>
			<ControlGroup className="grid grid-cols-2 gap-3 justify-center items-center">
				<ControlButton
					href={data.current_link}
					className="hover:bg-primary duration-300 col-span-2 text-buttonText hover:text-buttonTextHover">
					<div className="flex flex-col align-left justify-end">
						<span className="text-xxs">Currently</span>
						<span className="text-xxs font-semibold">
							{data.role_short} at {data.current}
						</span>
					</div>
				</ControlButton>

				<ControlButton
					href={`mailto:${data.email}`}
					className="hover:bg-contact duration-300"
					aria-label="Contact">
					<ContactIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>

				<DarkToggle />
			</ControlGroup>

			<AudioPlayer {...spotifyData} />

			<ControlGroup className="relative aspect-square w-[10rem] p-0 hover:cursor-pointer">
				<Image
					src="/map.png"
					className="rounded-xl"
					width={1870}
					height={1870}
					alt="Map of Vancouver"
					quality={100}
					priority={true}
				/>
				<span className="w-2 h-2 rounded-full absolute left-1/2 top-1/2 bg-primary ring-1 ring-white"></span>
				<div className="w-full h-3/4 flex flex-col justify-end items-start absolute bottom-0 left-0 rounded-b-xl p-4 bg-gradient-to-t from-black">
					<h1 className="font-bold text-xxsPlus text-white">Based in</h1>
					<h2 className="font-light text-xxsPlus text-white">
						Vancouver, B.C.
					</h2>
				</div>
			</ControlGroup>

			<ControlGroup className="grid grid-cols-2 grid-rows-2 justify-center items-center">
				<ControlButton
					aria-label="LinkedIn"
					href={data.linkedin}
					className="hover:bg-linkedin duration-300">
					<LinkedInIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>

				<ControlButton
					aria-label="GitHub"
					href={data.github}
					className="hover:bg-github duration-300">
					<GitHubIcon className="w-6 h-6 fill-buttonIcon" />
				</ControlButton>
			</ControlGroup>
		</div>
	);
};

export default ControlCenter;
