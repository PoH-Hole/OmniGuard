"use client";

import { useState } from "react";

const sensorData = {
  tablet1: [
    ["2026-04-25 14:05", "Main Bearing Vib.", 2.4, "mm/s"],
    ["2026-04-25 14:00", "Motor Temp", 45.8, "°C"],
    ["2026-04-25 13:55", "Hydraulic Press", 115.2, "bar"],
    ["2026-04-25 13:50", "Rotor RPM", 1450, "rpm"],
    ["2026-04-25 13:45", "Oil Pressure", 5.6, "bar"],
    ["2026-04-25 13:40", "Cooling Temp", 32.1, "°C"],
    ["2026-04-25 13:35", "Vibration Axial", 1.8, "mm/s"],
    ["2026-04-25 13:30", "Humidity", 48, "%"],
    ["2026-04-25 13:25", "Voltage", 220, "V"],
    ["2026-04-25 13:20", "Current", 12.5, "A"],
  ],

  tablet2: [
    ["2026-04-25 14:05", "Motor Temp", 52.1, "°C"],
    ["2026-04-25 14:00", "Vibration", 3.1, "mm/s"],
    ["2026-04-25 13:55", "Pressure", 120.5, "bar"],
    ["2026-04-25 13:50", "RPM", 1400, "rpm"],
    ["2026-04-25 13:45", "Oil Temp", 60.2, "°C"],
    ["2026-04-25 13:40", "Humidity", 55, "%"],
    ["2026-04-25 13:35", "Voltage", 215, "V"],
    ["2026-04-25 13:30", "Current", 11.8, "A"],
    ["2026-04-25 13:25", "Bearing Vib", 2.9, "mm/s"],
    ["2026-04-25 13:20", "Cooling Flow", 18.2, "L/min"],
  ],

  tablet3: [
    ["2026-04-25 14:05", "Motor Temp", 48.3, "°C"],
    ["2026-04-25 14:00", "Vibration", 4.2, "mm/s"],
    ["2026-04-25 13:55", "Pressure", 110.1, "bar"],
    ["2026-04-25 13:50", "RPM", 1350, "rpm"],
    ["2026-04-25 13:45", "Oil Pressure", 5.1, "bar"],
    ["2026-04-25 13:40", "Humidity", 60, "%"],
    ["2026-04-25 13:35", "Voltage", 210, "V"],
    ["2026-04-25 13:30", "Current", 13.2, "A"],
    ["2026-04-25 13:25", "Cooling Temp", 34.8, "°C"],
    ["2026-04-25 13:20", "Bearing Vib", 3.5, "mm/s"],
  ],
};

export default function SensorTable({ asset }) {
  const [expanded, setExpanded] = useState(false);

  const data = sensorData[asset];

  const visibleRows = expanded ? 10 : 5;
  const displayedData = data.slice(0, visibleRows);

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="font-semibold">
          Historical Sensor Logs
        </h2>

        <button
          onClick={() => setExpanded(!expanded)}
          className="
            text-blue-600 text-sm
            hover:text-blue-800 transition
            active:scale-95
          "
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-5 py-3">Timestamp</th>
              <th className="text-left px-5 py-3">Sensor</th>
              <th className="text-left px-5 py-3">Value</th>
              <th className="text-left px-5 py-3">Unit</th>
            </tr>
          </thead>

          <tbody>
            {displayedData.map((row, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-5 py-3">{row[0]}</td>
                <td className="px-5 py-3">{row[1]}</td>
                <td className="px-5 py-3">{row[2]}</td>
                <td className="px-5 py-3 text-gray-500">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}