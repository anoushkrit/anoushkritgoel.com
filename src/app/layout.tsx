import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA, ALL_PROJECTS_DETAILS } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Applied Scientist & 3D Spatial AI Researcher`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name} | Portfolio & 3D Spatial AI Research`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    jobTitle: "Research Engineer 2 & AI Researcher",
    description: DATA.description,
    knowsAbout: [
      "3D Spatial AI",
      "Point Clouds",
      "Brain MRI Tractography",
      "Transformers",
      "Reinforcement Learning",
      "Vector AI & Blueprint Layout OCR",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Attentive.AI",
      url: "https://attentive.ai/",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Technology Mandi",
        url: "https://www.iitmandi.ac.in/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Shiv Nadar University",
        url: "https://snu.edu.in/",
      },
    ],
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.Scholar.url,
      DATA.contact.social.X.url,
    ],
    publication: ALL_PROJECTS_DETAILS.filter((p) => p.category === "Paper").map((paper) => ({
      "@type": "ScholarlyArticle",
      headline: paper.title,
      name: paper.subtitle,
      url: `${DATA.url}/projects/${paper.slug}`,
      sameAs: paper.arxivUrl || paper.paperUrl || paper.githubUrl,
    })),
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative overflow-x-hidden"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
