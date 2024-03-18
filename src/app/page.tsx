import AudioPlayer from "./components/AudioPlayer";

export type Video = {
  id: number;
  url: string;
  label: string;
};

export default function Home() {
  const videos: Video[] = [
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
    {
      id: 3,
      url: "",
      label: "",
    },
    {
      id: 4,
      url: "",
      label: "",
    },
  ];

  return (
    <main className="min-h-screen overflow-auto relative bg-black">
      <div className="bg-[url('/images/jirka-final-bg.png')] bg-contain bg-no-repeat bg-top p-4 pt-10 bg-fixed">
        <div className="text-center">
          {/* <h1 className="text-4xl font-bold text-black">JIRKOSOVI SRANCE</h1> */}
        </div>
        <AudioPlayer videos={videos} />
        <div className="fixed top-[400px] left-0 w-full h-[200px] bg-gradient-to-t from-black via-black to-transparent" />
      </div>
    </main>
  );
}
