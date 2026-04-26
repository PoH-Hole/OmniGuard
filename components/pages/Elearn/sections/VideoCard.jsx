"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    moduleId: 1,
    title: "Proper Gowning Procedure",
    module: "Module 1",
    duration: "12:45",
    query: "proper gowning procedure cleanroom training safety",
  },
  {
    id: 2,
    moduleId: 2,
    title: "Handling Chemical Spills",
    module: "Module 2",
    duration: "10:20",
    query: "chemical spill response procedure safety training",
  },
  {
    id: 3,
    moduleId: 3,
    title: "HVAC Contamination Response",
    module: "Module 3",
    duration: "08:10",
    query: "HVAC contamination cleanroom response training",
  },
];

export default function VideoCard({ modules, onSelectModule }) {
  return (
    <div className="grid gap-4">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
        >
          {/* THUMBNAIL */}
          <div className="relative h-44 bg-black group overflow-hidden">

            {/* fallback thumbnail (aman, tidak pakai videoId) */}
            <img
              src={`https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg`}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* overlay button ke YouTube search */}
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                video.query
              )}`}
              target="_blank"
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <div className="bg-blue-600 p-4 rounded-xl hover:scale-110 transition">
                <Play className="text-white" />
              </div>
            </a>

            <span className="absolute bottom-2 left-3 text-xs text-white flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              LIVE PREVIEW
            </span>
          </div>

          {/* INFO */}
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-xs text-gray-500">
                {video.module} • {video.duration}
              </p>
            </div>

            {/* 🔥 CONNECT KE QUIZ MODULE */}
            <button
              onClick={() => {
                const module = modules.find(
                  (m) => m.id === video.moduleId
                );
                if (module) onSelectModule(module);
              }}
              className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition"
            >
              Test Your Knowledge
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}