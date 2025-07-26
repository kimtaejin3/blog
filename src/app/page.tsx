"use client";

import { DarkModeToggleButton } from "@/components/darkmode-toggle-button";
import { useState } from "react";
import CategoryList from "@/components/category-list";
import PostList from "@/components/post-list";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black">PearlDev 🧋</h1>
        <DarkModeToggleButton />
      </header>

      <div className="grid gap-4">
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
        <PostList selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
