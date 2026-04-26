"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Cpu, Brain, FileText, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Map", href: "/map", icon: Map },
  { name: "Sensor", href: "/sensors", icon: Cpu },
  { name: "AI", href: "/ai", icon: Brain },
  { name: "Logs", href: "/logs", icon: FileText },
  { name: "E-Learn", href: "/elearn", icon: BookOpen },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <div className="flex justify-around items-center py-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href} className="flex-1">
              <div
                className={`flex flex-col items-center justify-center text-[9px] transition
                ${
                  isActive
                    ? item.name === "E-Learn"
                      ? "text-purple-600"
                      : "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                <div
                  className={`
                    p-1.5 rounded-lg transition
                    ${
                      isActive
                        ? item.name === "E-Learn"
                          ? "bg-purple-100"
                          : "bg-blue-100"
                        : ""
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <span className="mt-0.5 leading-none">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}