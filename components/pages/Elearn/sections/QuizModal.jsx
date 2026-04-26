"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function QuizModal({ module, onClose, onPass }) {
  const [mounted, setMounted] = useState(false);
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const q = module.quiz?.[0];

  // 🔥 avoid hydration error (WAJIB buat portal di Next.js)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 reset state + lock scroll
  useEffect(() => {
    if (!module) return;

    setStarted(false);
    setSelected(null);
    setDone(false);

    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [module]);

  if (!mounted || !q) return null;

  const handleSubmit = () => {
    setDone(true);

    if (selected === q.answer) {
      setTimeout(() => {
        onPass();
        onClose();
      }, 800);
    }
  };

return createPortal(
  <div className="fixed inset-0 z-[9999] flex items-end justify-center">

    {/* BACKDROP */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* 🔥 SHEET */}
    <div className="
      relative w-full max-w-md bg-white rounded-t-2xl p-6 space-y-4
      max-h-[85vh] overflow-y-auto
      animate-slideUp
    ">

      {/* HANDLE */}
      <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-2" />

      <h2 className="font-semibold text-center text-lg">
        {module.title}
      </h2>

      {!started ? (
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">
            Pass this quiz to unlock next module
          </p>

          <button
            onClick={() => setStarted(true)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          <p>{q.question}</p>

          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full p-3 border rounded-lg ${
                selected === i ? "bg-blue-100 border-blue-500" : ""
              }`}
            >
              {opt}
            </button>
          ))}

          {!done ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:bg-gray-300"
            >
              Submit
            </button>
          ) : (
            <p className="text-center font-semibold">
              {selected === q.answer
                ? "✅ Passed"
                : "❌ Try Again"}
            </p>
          )}
        </>
      )}

      <button
        onClick={onClose}
        className="w-full text-sm text-gray-500"
      >
        Close
      </button>
    </div>

  </div>,
  document.body
);
}