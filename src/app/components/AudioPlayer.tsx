"use client";

import { FC, useState } from "react";

interface AudioPlayerProps {
  video: {
    id: number;
    url: string;
    label: string;
  };
}

const AudioPlayer: FC<AudioPlayerProps> = ({ video }) => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  const playAudio = (url: string) => {
    if (currentAudio) {
      currentAudio?.pause();
    }
    const audio = new Audio(url);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div
      key={video.id}
      className="w-[45%] p-2 h-[180px] bg-opacity-50 rounded-lg flex items-center justify-center border-4 border-black  bg-[#ffb404]"
      onClick={() => playAudio(video.url)}
    >
      <p className="text-3xl text-center font-bold font-outline-2 text-[#ffb404]">
        {video.label}
      </p>
    </div>
  );
};

export default AudioPlayer;
