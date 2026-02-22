"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/sanae.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-rose-600">サナ活</span>
          <span className="hidden text-xs text-gray-400 sm:inline">
            非公式ニュースQ&A
          </span>
        </Link>
        <Navigation className="hidden md:flex" />
        <MobileNav />
      </div>
    </header>
  );
}
