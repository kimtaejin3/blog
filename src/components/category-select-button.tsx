interface Props {
  name: string;
  isSelected: boolean;
  onSelectCategory: (name: string) => void;
}

export default function CategorySelectButton({
  name,
  isSelected,
  onSelectCategory,
}: Props) {
  return (
    <button
      onClick={() => onSelectCategory(name)}
      className={`px-3 py-1 rounded-full text-md ${
        isSelected ? "bg-[#228be6] text-primary-foreground" : "bg-secondary"
      }`}
    >
      {name}
    </button>
  );
}
