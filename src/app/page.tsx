"use client";

import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { DarkModeToggleButton } from "@/components/darkmode-toggle-button";
import { useState, useMemo } from "react";
import Category from "@/components/category";
import PostCard from "@/components/post-card";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 모든 카테고리 목록 생성
  const categories = useMemo(() => {
    const categorySet = new Set(allPosts.map((post) => post.category));
    return Array.from(categorySet);
  }, []);

  // 선택된 카테고리에 따라 포스트 필터링
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
      );
    }
    return allPosts
      .filter((post) => post.category === selectedCategory)
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  }, [selectedCategory]);

  return (
    <div className="">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black">PearlDev 🧋</h1>
        <DarkModeToggleButton />
      </header>
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
