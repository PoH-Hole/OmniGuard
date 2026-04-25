"use client";

import { AlertTriangle } from "lucide-react";

export default function AlertSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-3">
      <div className="flex items-center gap-2 font-semibold">
        <AlertTriangle className="text-red-500" size={18} />
        Zone Alerts
      </div>

      <div className="border border-red-200 bg-red-50 rounded-lg p-3 flex justify-between">
        <div>
          <p className="font-medium text-red-600">Sterilization A</p>
          <p className="text-sm text-gray-600">
            Congestion detected. Risk of contamination.
          </p>
        </div>

        <span className="text-red-600 font-semibold">8/5</span>
      </div>
    </div>
  );
}