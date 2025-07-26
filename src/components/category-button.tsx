interface Props {
  category: string;
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryButton({
  category,
  selectedCategory,
  onChange,
}: Props) {
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
