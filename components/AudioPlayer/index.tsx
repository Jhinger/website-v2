import ControlGroup from "@/components/ControlCenter/ControlButton";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { hoursAgo, minutesAgo } from "@/utils/time";
import truncate from "@/utils/truncate";
import type { RelevantSpotifyData } from "@/spotify";

type AudioPlayerProps = RelevantSpotifyData & {
  className?: string;
};

const AudioPlayer = ({
  url,
  image,
  name,
  artist,
  played_at,
  preview_url,
  className,
}: AudioPlayerProps) => {
  const hrs = hoursAgo(played_at);
  const min = minutesAgo(played_at);

  const timeSince = () => {
    if (hrs >= 24) {
      return `${Math.round(hrs / 24)} day(s) ago`;
    }
    if (hrs > 0) {
      return hrs === 1 ? `${hrs} hour ago` : `${hrs} hours ago`;
    } else {
      return min === 1 ? `${min} minute ago` : `${min} minutes ago`;
    }
  };

  return (
    <div title={name}>
      <ControlGroup
        className={cn(
          "relative w-[21rem] bg-group h-max p-0 overflow-hidden border-2 border-transparent",
          className,
        )}
      >
        <div className="w-full flex justify-end">
          <div className="relative w-[10rem]">
            <Image
              src={image}
              className="flex-1 p-0 rounded-r-xl"
              width={640}
              height={640}
              alt="Album Cover"
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-r from-black via-black via-51"></div>
        <div className="p-6 absolute w-2/3 h-full flex flex-col justify-between items-start left-0 top-0 right-0 text-xxsPlus text-gray-300">
          <div className="flex flex-col gap-1 items-start">
            <span className="font-semibold">Last Listened to</span>
            <span className="font-light">{timeSince()}</span>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <span className="font-semibold">{truncate(name, 20)}</span>
            <span className="font-light">{truncate(artist, 20)}</span>
          </div>
        </div>
      </ControlGroup>
    </div>
  );
};

export default AudioPlayer;
