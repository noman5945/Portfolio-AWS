import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FooterSection() {
  return (
    <footer className="mt-24 border-t border-outline">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12">
        {/* Name */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-primary">
            Md Abdullah Al Noman
          </h3>

          <p className="mt-2 text-sm text-on-surface-variant">
            Building scalable backend systems and cloud-native applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/noman5945"
            target="_blank"
            aria-label="GitHub"
            className="text-on-surface-variant transition-colors hover:text-secondary"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/noman5945/?isSelfProfile=false"
            target="_blank"
            aria-label="LinkedIn"
            className="text-on-surface-variant transition-colors hover:text-secondary"
          >
            <FaLinkedin size={22} />
          </Link>

          <Link
            href="mailto:abdullahnoman.5945@gmail.com"
            aria-label="Email"
            className="text-on-surface-variant transition-colors hover:text-secondary"
          >
            <MdEmail size={24} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-on-surface-variant">
          © {new Date().getFullYear()} Md Abdullah Al Noman. Built with Next.js
          & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
