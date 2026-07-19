"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Navbar() {
  const desktopNavItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Experience" },
    { href: "#achievements", label: "Publications" },
    { href: "#software-tools", label: "Software & Tools" },
    { href: "#awards", label: "Awards" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Glassmorphic Header Navbar */}
      <header className="fixed top-4 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none px-6">
        <nav className="pointer-events-auto flex items-center justify-between gap-6 px-6 py-2.5 rounded-full border border-border/80 bg-card/80 backdrop-blur-xl shadow-lg shadow-black/5 ring-1 ring-border/20 transition-all">
          <div className="flex items-center gap-1">
            {desktopNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-border/60">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social], index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={`desktop-social-${name}-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={name}
                  >
                    <IconComponent className="size-4" />
                  </a>
                );
              })}
            <ModeToggle className="size-8 rounded-full" />
          </div>
        </nav>
      </header>

      {/* Mobile Floating Dock */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 md:hidden flex justify-center px-4">
        <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border border-border/80 bg-card/90 backdrop-blur-xl shadow-xl">
          {DATA.navbar.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className="rounded-2xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/60 transition-colors">
                      <item.icon className="size-full p-1" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-3 py-1 text-xs"
                >
                  <p>{item.label}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social], index) => {
              const IconComponent = social.icon;
              return (
                <Tooltip key={`mobile-social-${name}-${index}`}>
                  <TooltipTrigger asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <DockIcon className="rounded-2xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/60 transition-colors">
                        <IconComponent className="size-full p-1" />
                      </DockIcon>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="rounded-xl bg-primary text-primary-foreground px-3 py-1 text-xs"
                  >
                    <p>{name}</p>
                    <TooltipArrow className="fill-primary" />
                  </TooltipContent>
                </Tooltip>
              );
            })}
          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
          <ModeToggle className="size-full rounded-2xl" />
        </Dock>
      </div>
    </>
  );
}
