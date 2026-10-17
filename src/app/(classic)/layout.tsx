import Navbar from "@/components/navbar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ClassicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Ambient Background Grid & Radial Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] opacity-40 dark:opacity-30 bg-radial from-rose-900/20 via-red-950/10 to-transparent blur-3xl" />
        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] opacity-20 dark:opacity-20 bg-radial from-rose-950/20 via-red-950/10 to-transparent blur-3xl" />
        <FlickeringGrid
          className="h-[180px] w-full opacity-30"
          squareSize={2}
          gridGap={3}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      {/* Layout Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-8 pb-32 sm:py-16 px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      <Navbar />
    </>
  );
}
