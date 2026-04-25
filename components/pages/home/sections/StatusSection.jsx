"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function StatusSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(formatted);
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white border rounded-2xl p-4 flex justify-between items-center">
      
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <ShieldCheck size={20} className="text-white" />
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            All Zones Clear
          </h2>
          <p className="text-sm text-gray-500">
            System operating normally
          </p>
        </div>
      </div>

      {/* REALTIME CLOCK */}
      <div className="text-sm bg-gray-100 px-3 py-1 rounded-lg border font-mono">
        {time}
      </div>
    </section>
  );
}