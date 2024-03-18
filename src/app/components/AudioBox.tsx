import { FC } from "react";
import { Video } from "../page";

interface AudioBoxProps {
  video: Video;
  playAudio: (url: string) => void;
  progress: number; // Progress percentage (0 to 100)
}

const AudioBox: FC<AudioBoxProps> = ({ video, playAudio, progress }) => {
  const boxColor = `rgba(255, 180, 4, ${progress / 100})`; // Adjust color based on progress

  return (
    <div
      key={video.id}
      className="z-10 p-2 h-[180px] rounded-2xl flex items-center justify-center border-4 border-black bg-[#ffb404]"
      style={{ backgroundColor: boxColor }}
      onClick={() => playAudio(video.url)}
    >
      <p className="text-3xl text-center font-bold font-outline-2 text-black">
        {video.label}
      </p>
    </div>
  );
};

export default AudioBox;
