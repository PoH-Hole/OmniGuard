"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Cpu, Brain, FileText } from "lucide-react";

const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Map", href: "/map", icon: Map },
  { name: "Sensor", href: "/sensors", icon: Cpu },
  { name: "AI", href: "/ai", icon: Brain },
  { name: "Logs", href: "/logs", icon: FileText },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex flex-col items-center text-xs transition-all duration-200
                ${isActive ? "text-blue-600" : "text-gray-500"}
                hover:text-blue-500`}
              >
                <div
                  className={`
                    p-2 rounded-xl transition-all duration-200
                    ${isActive ? "bg-blue-100 scale-110" : ""}
                    active:scale-95 hover:scale-110
                  `}
                >
                  <Icon size={22} />
                </div>

                <span className="mt-1">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}