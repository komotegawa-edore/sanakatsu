"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/chat", label: "AIチャット" },
  { href: "/news", label: "ニュース" },
  { href: "/topics", label: "トピック" },
];

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

export function Navigation({ className, onClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-1", className)}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={cn(
            "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
