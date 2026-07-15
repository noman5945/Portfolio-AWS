import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
  onClickfunc?: () => void;
};

export default function CustomButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClickfunc,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-secondary-container text-on-secondary-container hover:-translate-y-0.5 hover:shadow-lg",

    outline:
      "border border-outline bg-transparent text-on-surface hover:border-secondary-container hover:text-secondary",

    secondary:
      "bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClickfunc}>
      {children}
    </button>
  );
}
