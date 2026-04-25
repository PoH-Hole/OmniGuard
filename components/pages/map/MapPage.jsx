"use client";

import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

import FacilitySection from "./sections/FacilitySection";
import WorkerCard from "./sections/WorkerCard";
import AlertSection from "./sections/AlertSection";

export default function MapPage() {
  return (
    <main className="bg-gray-100 min-h-screen pb-24">
      <TopBar />

      <div className="pt-20 px-4 space-y-4 max-w-6xl mx-auto">
        <FacilitySection />
        <WorkerCard />
        <AlertSection />
      </div>

      <BottomNav active="map" />
    </main>
  );
}