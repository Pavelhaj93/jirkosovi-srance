"use client";

import { useRef } from "react";

export default function Home() {
  const currentAudio = useRef<HTMLAudioElement>(null);
  const videos = [
    {
      url: "/videos/kompletne-srat.mp4",
      label: "Kompletně srát",
    },
    {
      url: "/videos/z-petikila-jednicku.mp4",
      label: "Z 500 udělám jedničku",
    },
  ];

  const playAudio = (url: string) => {
    if (currentAudio) {
      currentAudio?.current?.pause();
    }
    const audio = new Audio(url);
    currentAudio.current = audio;
    audio.play();
  };
  return (
    <main className="min-h-screen bg-[url('/images/jirka-bg.jpg')] bg-cover bg-no-repeat bg-top p-4 pt-10 bg-fixed overflow-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-outline-2 text-[#ffb404]">
          JIRKOSOVI SRANCE
        </h1>
      </div>
      <div className="flex justify-between items-top flex-wrap w-full min-h-screen mt-96 gap-4">
        {videos.map((video, i) => (
          <div
            key={i}
            className="w-[45%] p-2 h-[180px] bg-opacity-50 rounded-lg flex items-center justify-center border-4 border-black  bg-[#ffb404]"
            onClick={() => playAudio(video.url)}
          >
            <p className="text-3xl text-center font-bold font-outline-2 text-[#ffb404]">
              {video.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
