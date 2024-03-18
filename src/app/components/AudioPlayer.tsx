"use client";

import { FC, useEffect, useState } from "react";
import { Video } from "../page";
import AudioBox from "./AudioBox";

interface AudioPlayerProps {
  videos: Video[];
}

const AudioPlayer: FC<AudioPlayerProps> = ({ videos }) => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [progress, setProgress] = useState(0); // Progress state

  const playAudio = (url: string) => {
    if (currentAudio) {
      currentAudio?.pause();
    }
    const audio = new Audio(url);
    setCurrentAudio(audio);
    audio.play();
  };

  useEffect(() => {
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", () => {
        const percentage =
          (currentAudio.currentTime / currentAudio.duration) * 100;
        setProgress(percentage);
      });
    }
  }, [currentAudio]);

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 mt-[400px]">
      {videos.map((video) => (
        <AudioBox
          key={video.id}
          video={video}
          playAudio={playAudio}
          progress={progress}
        />
      ))}
    </div>
  );
};

export default AudioPlayer;
