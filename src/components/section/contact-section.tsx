import Link from "next/link";
import { Mail } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="w-full border border-border/80 bg-card/60 backdrop-blur-xl rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4 shadow-xs relative overflow-hidden">
      <div className="p-3 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400">
        <Mail className="size-6" />
      </div>
      
      <div className="flex flex-col gap-1 items-center">
        <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
          Direct Contact
        </span>
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="text-lg sm:text-2xl font-bold text-foreground hover:text-rose-400 transition-colors font-mono underline underline-offset-4"
        >
          {DATA.contact.email}
        </Link>
      </div>
    </div>
  );
}
