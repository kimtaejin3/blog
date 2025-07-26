"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  return (
    <button
      onClick={copy}
      className={cn(
        "absolute top-4 right-4 p-2 rounded-md bg-slate-400 text-white hover:scale-105 transition-all duration-300",
        className
      )}
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
