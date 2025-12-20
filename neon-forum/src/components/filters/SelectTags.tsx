import { Tag } from "../../shared/types/tag";

interface Props {
  tags: Tag[];
  selected: number[];
  onChange: (v: number[]) => void;
}

export default function SelectTags({ tags, selected, onChange }: Props) {
  const toggle = (id: number) => {
    onChange(
      selected.includes(id)
        ? selected.filter(t => t !== id)
        : [...selected, id]
    );
  };

  return (
    <div>
      {tags.map(tag => (
        <button
          key={tag.id}
          onClick={() => toggle(tag.id)}
          className={selected.includes(tag.id) ? "active" : ""}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}

