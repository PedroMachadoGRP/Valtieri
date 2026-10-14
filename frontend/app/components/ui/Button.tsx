import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function Button({
  loading = false,
  disabled,
  type = "button",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`inline-flex h-11 cursor-pointer items-center justify-center rounded-(--radius) bg-(--color-primary) px-(--space-3) text-white disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...rest}
    >
      {loading ? "Salvando..." : children}
    </button>
  );
}
