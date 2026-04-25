"use client";

import { Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full h-16 px-4 flex items-center justify-between bg-white border-b z-50">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <span className="text-blue-600">🧪</span>
        <h1 className="font-bold text-lg">
          OmniGuard
        </h1>
      </div>

      {/* NOTIFICATION */}
      <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">

        <Bell size={20} className="text-gray-700" />

      </button>

    </header>
  );
}