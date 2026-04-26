"use client";

import { useState, useRef } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

import AlertCard from "./sections/AlertCard";
import VideoCard from "./sections/VideoCard";
import ModuleList from "./sections/ModuleList";
import QuizModal from "./sections/QuizModal";

const initialModules = [
  {
    id: 1,
    title: "Proper Gowning Procedure",
    duration: "12:45",
    progress: 0,
    required: true,
    quiz: [
      {
        question: "Apa fungsi gowning?",
        options: ["Dekorasi", "Mencegah kontaminasi", "Pemanasan mesin"],
        answer: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Handling Chemical Spills",
    duration: "15m",
    progress: 0,
    required: true,
    quiz: [
      {
        question: "Langkah pertama saat spill?",
        options: ["Lari", "Laporkan", "Diam"],
        answer: 1,
      },
    ],
  },
  {
    id: 3,
    title: "HVAC Contamination Response",
    duration: "10m",
    progress: 0,
    required: false,
    quiz: [],
  },
];

export default function ElearnPage() {
  const [modules, setModules] = useState(initialModules);
  const [activeModule, setActiveModule] = useState(null);

  // 🔥 REF UNTUK SCROLL KE MODULE SECTION
  const moduleRef = useRef(null);

  // 🔓 unlock logic
  const isUnlocked = (index) => {
    if (index === 0) return true;
    return modules[index - 1].progress >= 80;
  };

  // 📊 update progress
  const updateProgress = (id, value) => {
    setModules((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, progress: value } : m
      )
    );
  };

  return (
    <main className="bg-gray-100 min-h-screen pb-24">
      <TopBar />

      <div className="pt-20 px-4 space-y-4 max-w-6xl mx-auto">

        <div className="space-y-1">
          <h1 className="text-xl font-semibold">
            Mitigation & E-Learning
          </h1>
          <p className="text-sm text-gray-500">
            Review required safety protocols and recent AI-suggested training modules.
          </p>
        </div>

        <AlertCard />

        {/* 🔥 VIDEO SECTION */}
        <VideoCard
          modules={modules}
          onSelectModule={(module) => {
            const index = modules.findIndex((m) => m.id === module.id);

            if (!isUnlocked(index)) return;

            setActiveModule(module);

            // 🔥 SCROLL KE MODULE SECTION
            setTimeout(() => {
              moduleRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 200);
          }}
        />

        {/* 🔥 MODULE SECTION */}
        <div ref={moduleRef}>
          <ModuleList
            modules={modules}
            isUnlocked={isUnlocked}
            onSelect={(module, index) => {
              if (!isUnlocked(index)) return;
              setActiveModule(module);
            }}
          />
        </div>

      </div>

      <BottomNav />

      {/* 🔥 QUIZ MODAL */}
      {activeModule && (
        <QuizModal
          module={activeModule}
          onClose={() => setActiveModule(null)}
          onPass={() =>
            updateProgress(activeModule.id, 100)
          }
        />
      )}
    </main>
  );
}