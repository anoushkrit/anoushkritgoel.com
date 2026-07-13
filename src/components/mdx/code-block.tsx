"use client";

import dynamic from "next/dynamic";

export const CodeBlock = dynamic(() => import("./code-block-client"), {
  ssr: false,
});
