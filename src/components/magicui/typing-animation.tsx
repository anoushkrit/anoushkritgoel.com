"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  highlightWord?: string;
  highlightClassName?: string;
}

export default function TypingAnimation({
  text,
  speed = 100, // speed in ms per character
  className,
  highlightWord,
  highlightClassName = "bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent font-extrabold drop-shadow-xs",
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

  const renderContent = () => {
    if (!highlightWord || !text.includes(highlightWord)) {
      return displayedText;
    }

    const highlightIndex = text.indexOf(highlightWord);

    if (displayedText.length <= highlightIndex) {
      return displayedText;
    }

    const mainPart = displayedText.slice(0, highlightIndex);
    const highlightedPart = displayedText.slice(highlightIndex);

    return (
      <>
        {mainPart}
        <span className={highlightClassName}>{highlightedPart}</span>
      </>
    );
  };

  return (
    <span className={cn("inline-block", className)}>
      {renderContent()}
      <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-rose-500 animate-pulse align-middle" />
    </span>
  );
}
