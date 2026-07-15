"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  speed = 100, // speed in ms per character
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-primary animate-pulse align-middle" />
    </span>
  );
}
