"use client";

import { Layers, Flame } from "lucide-react";

export default function FacilitySection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Facility Layout</h2>
          <p className="text-sm text-gray-500">
            Real-time personnel tracking
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
            <Layers size={16} />
            Zones
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
            <Flame size={16} />
            Heatmap: On
          </button>
        </div>
      </div>

      {/* Map Preview */}
      <div className="relative h-64 md:h-80 bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-400">[ Map Preview ]</span>

        {/* Legend */}
        <div className="absolute bottom-3 right-3 bg-white shadow rounded-xl p-3 text-sm space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Active Selection
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            Standard Personnel
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            Congestion Alert
          </div>
        </div>
      </div>
    </div>
  );
}