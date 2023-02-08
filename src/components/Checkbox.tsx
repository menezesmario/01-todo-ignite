import { useState, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span style={{ color: "blue" }}>{label}</span>
        <p>{isChecked ? "concluída" : "a concluir"}</p>
      </label>
    </div>
  );
}
