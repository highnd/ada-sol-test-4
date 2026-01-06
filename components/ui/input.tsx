import React, { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  const classes = [
    "w-full bg-transparent text-sm text-[#0A2745] placeholder:text-gray-400 focus:outline-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input ref={ref} className={classes} {...props} />;
});

export default Input;
