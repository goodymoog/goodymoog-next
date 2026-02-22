import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Goodymoog"
            width={120}
            height={40}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-[14px] font-light tracking-[0.12em] uppercase">
          <Link
            href="/"
            className="text-black/70 hover:text-black/70 hover:opacity-50 transition duration-200"
          >
            Music
          </Link>
          <Link
            href="/art"
            className="text-black/70 hover:text-black/70 hover:opacity-50 transition duration-200"
          >
            Art
          </Link>
          <Link
            href="/merch"
            className="text-black/70 hover:text-black/70 hover:opacity-50 transition duration-200"
          >
            Merch
          </Link>
          <Link
            href="/contact"
            className="text-black/70 hover:text-black/70 hover:opacity-50 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}