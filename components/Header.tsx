import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between py-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Goodymoog"
              width={110}
              height={40}
              priority
              className="h-6 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-[13px] font-light tracking-[0.18em] uppercase">
            <Link
              href="/"
              className="text-black/70 hover:opacity-50 transition duration-200"
            >
              Music
            </Link>
            <Link
              href="/art"
              className="text-black/70 hover:opacity-50 transition duration-200"
            >
              Art
            </Link>
            <Link
              href="/merch"
              className="text-black/70 hover:opacity-50 transition duration-200"
            >
              Merch
            </Link>
            <Link
              href="/contact"
              className="text-black/70 hover:opacity-50 transition duration-200"
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}