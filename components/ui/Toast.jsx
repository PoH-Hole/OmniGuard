"use client";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Siren } from "lucide-react";

const typeStyles = {
  success: "bg-green-600",
  warning: "bg-yellow-500",
  danger: "bg-red-600",
};

const icons = {
  success: <CheckCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  danger: <Siren size={20} />,
};

export default function Toast({ message, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className={`flex items-center gap-3 text-white px-4 py-3 rounded-xl shadow-lg ${typeStyles[type]}`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
    </motion.div>
  );
}