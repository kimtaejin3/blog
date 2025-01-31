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
      <CategoryButton
        category="All"
        selectedCategory={selectedCategory}
        onChange={onChange}
      />
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          selectedCategory={selectedCategory}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

interface CategoryButtonProps {
  category: string;
  selectedCategory: string;
  onChange: (category: string) => void;
}

function CategoryButton({
  category,
  selectedCategory,
  onChange,
}: CategoryButtonProps) {
  return (
    <button
      onClick={() => onChange(category)}
      className={`px-3 py-1 rounded-full text-md ${
        selectedCategory === category
          ? "bg-[#228be6] text-primary-foreground"
          : "bg-secondary"
      }`}
    >
      {category}
    </button>
  );
}
