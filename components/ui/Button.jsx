"use client";

import { useState } from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}) {
  const [pressed, setPressed] = useState(false);

  const base =
    "px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-150 active:scale-95";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`${base} ${variants[variant]} ${
        pressed ? "scale-95 opacity-80" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}