"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Copy } from "lucide-react";

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
    <button
      onClick={copy}
      className={cn(
        "absolute top-4 right-4 p-2 rounded-md bg-slate-400 text-white",
        className
      )}
    >
      <Copy className="w-4 h-4" />
    </button>
  );
};
