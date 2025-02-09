"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <button onClick={copy} className={cn("absolute top-2 right-2", className)}>
      Copy
    </button>
  );
};
