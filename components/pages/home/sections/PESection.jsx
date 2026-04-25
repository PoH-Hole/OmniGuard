"use client";

import { motion } from "framer-motion";
import Card from "../../../ui/Card";

export default function PPESection() {
  const compliance = 98;

  return (
    <Card>
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">
          PPE Status Summary
        </h3>
        <span className="material-symbols-outlined text-gray-400">
          visibility
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-end gap-2">
          
          {/* ANGKA ANIMASI */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700"
          >
            {compliance}%
          </motion.span>

          <span className="text-sm">Compliance</span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          YOLO Vision Node 4 Analysis
        </p>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${compliance}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-blue-700"
        />
      </div>
    </Card>
  );
}