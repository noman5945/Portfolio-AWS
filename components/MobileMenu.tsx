"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type LinkItem = {
  title: string;
  href: string;
};

type Props = {
  links: LinkItem[];
};

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 hover:bg-surface-container"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute left-0 top-16 w-full border-t border-outline bg-background shadow-lg md:hidden">
          <div className="flex flex-col gap-6 p-6">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-on-surface-variant hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
