"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Shield,
  Hand,
  Eye,
  Footprints,
} from "lucide-react";

export default function SOPLoginPage() {
  const router = useRouter();

  const [workerId, setWorkerId] = useState("");
  const [shift, setShift] = useState("morning");
  const [zone, setZone] = useState("clean_room_a");
  const [pin, setPin] = useState("");

  const [ppe, setPpe] = useState({
    coverall: false,
    mask: false,
    gloves: false,
    goggles: false,
    boots: false,
  });

  const togglePPE = (key) => {
    setPpe((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(ppe).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!workerId) return alert("Worker ID required");
    if (!allChecked) return alert("Complete all PPE checks");
    if (pin !== "1234") return alert("Invalid PIN");

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", workerId);

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 pt-20 pb-10">

      {/* HEADER */}
      <div className="mb-8 space-y-1">
        <h1 className="text-2xl font-bold">
          Pre-Shift SOP Verification
        </h1>
        <p className="text-gray-500 text-sm">
          Complete required checks before authorizing area access.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* 🔥 DETAILS */}
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4">

          <div className="space-y-1">
            <label className="text-xs text-gray-500">Worker ID</label>
            <input
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              placeholder="OPR-10492"
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">Shift</label>
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full border p-2 rounded-lg"
            >
              <option value="morning">Morning (06:00 - 14:00)</option>
              <option value="afternoon">Afternoon (14:00 - 22:00)</option>
              <option value="night">Night (22:00 - 06:00)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-500">Zone</label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full border p-2 rounded-lg"
            >
              <option value="clean_room_a">Clean Room A</option>
              <option value="clean_room_b">Clean Room B</option>
              <option value="packaging">Packaging</option>
            </select>
          </div>

        </div>

        {/* 🔥 PPE */}
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4 mr-20">

          <div className="bg-gray-100 px-5 py-3 font-semibold">
            PPE Requirements
          </div>

          <div className="p-4 space-y-2">

            {[
  ["coverall", "Sterile Coveralls Intact", ShieldCheck],
  ["mask", "N95 / PAPR Respirator Checked", Shield],
  ["gloves", "Double Nitrile Gloves Secured", Hand],
  ["goggles", "Safety Goggles / Face Shield On", Eye],
  ["boots", "Boot Covers Applied", Footprints],
].map(([key, label, Icon]) => (
              <label
                key={key}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition"
              >
                <input
                  type="checkbox"
                  checked={ppe[key]}
                  onChange={() => togglePPE(key)}
                  className="w-4 h-4"
                />

                <span className="flex-1">{label}</span>

                <Icon size={18} className="text-gray-500" />
              </label>
            ))}

          </div>
        </div>

        {/* 🔥 PIN */}
    <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-4">
          <h3 className="font-semibold">
            Safety Officer Authorization
          </h3>

          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="••••"
            className="border p-2 rounded-lg w-32 text-center tracking-widest"
          />

          <p className="text-xs text-gray-500">
            Enter 4-digit auth pin
          </p>
        </div>

        {/* 🔥 ACTION BUTTONS */}
        <div className="flex justify-between items-center pt-2">

          <button
            type="button"
            className="
              px-5 py-2 border rounded-lg
              hover:bg-gray-100 transition
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              px-6 py-2 bg-blue-600 text-white rounded-lg
              hover:bg-blue-700 transition
              flex items-center gap-2
            "
          >
            ✔ Submit & Authorize
          </button>

        </div>

      </form>
    </main>
  );
}