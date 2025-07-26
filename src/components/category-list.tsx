import CategoryButton from "./category-button";

interface Props {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryList({
  categories,
  selectedCategory,
  onChange,
}: Props) {
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
