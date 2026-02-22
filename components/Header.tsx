import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Goodymoog"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm tracking-wide">
          <Link
            href="/"
            className="text-black/80 hover:opacity-60 transition-opacity duration-200"
          >
            Music
          </Link>
          <Link
            href="/art"
            className="text-black/80 hover:opacity-60 transition-opacity duration-200"
          >
            Art
          </Link>
          <Link
            href="/merch"
            className="text-black/80 hover:opacity-60 transition-opacity duration-200"
          >
            Merch
          </Link>
          <Link
            href="/contact"
            className="text-black/80 hover:opacity-60 transition-opacity duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}