"use client";

import { MapPin, CheckCircle } from "lucide-react";

export default function WorkerCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>

          <div>
            <h3 className="font-semibold">Dr. Sarah Jenkins</h3>
            <p className="text-sm text-gray-500">ID: 8472-A</p>
          </div>
        </div>

        <span className="px-3 py-1 text-xs bg-blue-600 text-white rounded-lg">
          ACTIVE
        </span>
      </div>

      {/* Assignment */}
      <div>
        <p className="text-sm text-gray-500">Current Assignment</p>
        <div className="border rounded-lg p-3 flex justify-between">
          <span>Capsule Filling Monitor</span>
          <span className="text-gray-500 text-sm">45m</span>
        </div>
      </div>

      {/* Zone */}
      <div>
        <p className="text-sm text-gray-500">Zone Status</p>
        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} />
          Zone B - Aseptic Core
        </div>
      </div>

      {/* PPE */}
      <div>
        <p className="text-sm text-gray-500">PPE Verification</p>
        <div className="space-y-2 mt-2">
          {["Respirator", "Gown", "Gloves"].map((item) => (
            <div key={item} className="flex justify-between text-sm">
              <span>{item}</span>
              <CheckCircle className="text-green-600" size={16} />
            </div>
          ))}
        </div>
      </div>

      <button className="w-full border rounded-lg py-2 hover:bg-gray-100 transition">
        View Full Log
      </button>
    </div>
  );
}
