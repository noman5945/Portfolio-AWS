import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  {
    title: "Myself",
    href: "/",
  },
  {
    title: "Skills",
    href: "/pages/skills",
  },
  {
    title: "Projects",
    href: "/pages/projects",
  },
  {
    title: "Experience",
    href: "/pages/experience",
  },
  {
    title: "Education",
    href: "/pages/education",
  },
  {
    title: "Contact",
    href: "/pages/contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-outline
        bg-background/80
        backdrop-blur-xl
      "
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary"
        >
          Noman<span className="text-secondary">.</span>
        </Link>

        {/* Navigation */}

        <div className="hidden gap-8 md:flex items-center">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="
                text-base
                font-medium
                text-on-surface-variant
                transition-colors
                hover:text-primary
              "
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right Side */}

        <div className=" hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>
        {/** Mobile  */}
        <MobileMenu links={links} />
      </nav>
    </header>
  );
}
