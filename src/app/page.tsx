import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  const videos = [
    {
      id: 1,
      url: "/videos/kompletne-srat.mp4",
      label: "Kompletně srát",
    },
    {
      id: 2,
      url: "/videos/z-petikila-jednicku.mp4",
      label: "Z 500 udělám jedničku",
    },
  ];

  return (
    <main className="min-h-screen bg-[url('/images/jirka-bg.jpg')] bg-cover bg-no-repeat bg-top p-4 pt-10 bg-fixed overflow-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-outline-2 text-[#ffb404]">
          JIRKOSOVI SRANCE
        </h1>
      </div>
      <div className="flex justify-between items-top flex-wrap w-full min-h-screen mt-96 gap-4">
        {videos.map((video) => (
          <AudioPlayer key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
}
