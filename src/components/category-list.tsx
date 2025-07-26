import { allPosts } from "contentlayer/generated";
import CategorySelectButton from "./category-select-button";

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const getCategories = () => {
  const categorySet = new Set(allPosts.map((post) => post.category));
  return ["All", ...Array.from(categorySet)];
};

export default function CategoryList({
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="flex gap-2 mb-8">
      {getCategories().map((category) => {
        return (
          <CategorySelectButton
            key={category}
            name={category}
            isSelected={selectedCategory === category}
            onSelectCategory={onSelectCategory}
          />
        );
      })}
    </div>
  );
}
