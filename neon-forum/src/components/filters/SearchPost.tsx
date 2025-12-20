interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchPost({ value, onChange }: Props) {
  return (
    <input
      placeholder="Пошук..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
