import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: string;
  colorFont?: string;
  type?: "button" | "reset" | "submit";
  title?: string;
  id?: string;
}

export function Button({
  children,
  className = "",
  type = "button",
  color = "",
  colorFont = "",
  title,
  id,
  ...rest
}: Props) {
  return (
    <button
      id={id}
      title={title}
      className={`ativa-button ${className}`}
      type={type}
      color={color}
      {...rest}
    >
      {children}
    </button>
  );
}
