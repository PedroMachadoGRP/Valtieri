import { useId, type InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Field({
  label,
  error,
  className = "",
  ...rest
}: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-(--space-1)">
      <label htmlFor={id} className="text-(--color-text)">
        {label}
      </label>

      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`h-11 rounded-(--radius) border bg-(--color-surface) px-(--space-2) text-(--color-text) placeholder:text-(--color-text-secondary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-light) ${
          error ? "border-(--color-alert)" : "border-(--color-border)"
        } ${className}`}
        {...rest}
      />

      {error && (
        <p id={errorId} className="text-sm text-(--color-alert)">
          {error}
        </p>
      )}
    </div>
  );
}