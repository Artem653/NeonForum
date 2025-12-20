interface Props {
  value: number;
  onChange: (v: number) => void;
}

export default function SelectMinimumLikes({ value, onChange }: Props) {
  return (
    <div>
      {[0, 10, 50].map(v => (
        <label key={v}>
          <input
            type="radio"
            checked={value === v}
            onChange={() => onChange(v)}
          />
          {v === 0 ? "Будь-які" : `Від ${v} лайків`}
        </label>
      ))}
    </div>
  );
}

