"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pros", href: "/pros" },
  { label: "Cons", href: "/cons" },
];

const saveContactLink = {
  label: "Save Contact",
  href: "/contact.vcf",
  download: "jung-tech-contact.vcf",
};

export default function FloatingNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-[10px] pb-[calc(28px+10px)] pt-[30px]">
      <div className="w-full max-w-md flex flex-col gap-3 rounded-[14px] border border-white/15 bg-[#20262b]/95 px-4 py-3 text-sm text-white shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur">
        <a
          href={saveContactLink.href}
          download={saveContactLink.download}
          className="inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-gradient-to-br from-[#4f7eff] via-[#2d5bd7] to-[#001f54] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(79,126,255,0.4)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
        >
          {saveContactLink.label}
        </a>
        <ul className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label} className="flex-1">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-[10px] px-3 py-2 text-center transition ${
                    isActive
                      ? "bg-white text-[#111]"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
