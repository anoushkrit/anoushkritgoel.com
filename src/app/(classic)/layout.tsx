import { SiteHeader } from "@/components/site-header";

export default function ClassicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <div className="relative max-w-6xl mx-auto py-8 pb-24 sm:py-16 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
}
