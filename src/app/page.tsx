"use client";

import { allPosts } from "contentlayer/generated";
import { DarkModeToggleButton } from "@/components/darkmode-toggle-button";
import { useState } from "react";
import CategoryList from "@/components/category-list";
import PostList from "@/components/post-list";

const getCategories = () => {
  const categorySet = new Set(allPosts.map((post) => post.category));
  return Array.from(categorySet);
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black">PearlDev 🧋</h1>
        <DarkModeToggleButton />
      </header>
      <CategoryList
        categories={getCategories()}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="grid gap-4">
        <PostList selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
