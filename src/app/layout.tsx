import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jirkosovi srance",
  description: "Prásk a jde to kompletně srát",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#19A05F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <div className="m-auto grid h-[100svh] w-full max-w-screen-md grid-rows-[1fr_auto]">
          {children}
        </div>
      </body>
    </html>
  );
}
