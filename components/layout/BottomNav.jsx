"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Cpu, Brain, FileText, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "/home", icon: Home, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Map", href: "/map", icon: Map, color: "text-green-600", bg: "bg-green-100" },
  { name: "Sensor", href: "/sensors", icon: Cpu, color: "text-orange-600", bg: "bg-orange-100" },
  { name: "AI", href: "/ai", icon: Brain, color: "text-pink-600", bg: "bg-pink-100" },
  { name: "Logs", href: "/logs", icon: FileText, color: "text-gray-600", bg: "bg-gray-100" },
  { name: "E-Learn", href: "/elearn", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100" },
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
                className={`flex flex-col items-center justify-center text-[9px] transition ${
                  isActive ? item.color : "text-gray-500"
                }`}
              >
                <div
                  className={`
                    p-1.5 rounded-lg transition
                    ${isActive ? item.bg : ""}
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