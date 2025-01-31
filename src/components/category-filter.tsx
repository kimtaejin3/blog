import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 mb-8">
      <button
        onClick={() => onChange("all")}
        className={`px-4 py-2 rounded-md ${
          selectedCategory === "all"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary"
        }`}
      >
        전체
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
