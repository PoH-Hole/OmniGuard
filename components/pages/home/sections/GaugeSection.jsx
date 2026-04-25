"use client";

import { motion } from "framer-motion";
import Card from "../../../ui/Card";

const getTempColor = (temp) => {
  if (temp < 20) return "#3b82f6"; // blue
  if (temp < 30) return "#10b981"; // green
  return "#ef4444"; // red
};

function Gauge({ value, label, unit = "", color }) {
  const size = 96;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center"
    >
      {/* OUTER RING */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        
        {/* rotating subtle glow ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute w-24 h-24 rounded-full border-[6px] border-dashed border-gray-200"
        />

        {/* progress ring */}
        <svg className="absolute w-24 h-24 -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="36"
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={226}
            initial={{ strokeDashoffset: 226 }}
            animate={{
              strokeDashoffset: 226 - (226 * value) / 100,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>

        {/* CENTER */}
        <div className="z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-semibold text-sm"
          >
            {value}{unit}
          </motion.p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GaugeSection({ o2, temp, rh }) {
  return (
    <Card>
      <div className="flex justify-between mb-4">
        <h3 className="text-sm text-gray-500">
          Critical Instrumentation
        </h3>
        <span className="material-symbols-outlined text-gray-400">
          speed
        </span>
      </div>

      {/* ⚠️ INI JANGAN DIGANTI (layout tetap aman) */}
      <div className="flex justify-between md:justify-around">
        
        <Gauge
          value={o2}
          unit="%"
          label="O2"
          color="#2563eb"
        />

        <Gauge
          value={temp}
          unit="°C"
          label="Temp"
          color={getTempColor(temp)}
        />

        <Gauge
          value={rh}
          unit="%"
          label="RH"
          color="#06b6d4"
        />

      </div>
    </Card>
  );
}