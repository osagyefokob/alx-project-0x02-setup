import { type ButtonProps } from "@/interfaces";

export default function Button({ size, shape, label }: ButtonProps) {
  const sizeStyles = {
    small: { padding: "4px 8px", fontSize: "12px" },
    medium: { padding: "6px 12px", fontSize: "14px" },
    large: { padding: "10px 16px", fontSize: "16px" }
  };

  const shapeStyles = {
    "rounded-sm": { borderRadius: "4px" },
    "rounded-md": { borderRadius: "8px" },
    "rounded-full": { borderRadius: "9999px" }
  };

  return (
    <button
      style={{
        ...sizeStyles[size],
        ...shapeStyles[shape],
        background: "#eee",
        border: "1px solid #ccc",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}
