import {
  BookOpen,
  PlayCircle,
  Lock,
  CheckCircle,
} from "lucide-react";

export default function ModuleList({
  modules,
  isUnlocked,
  onSelect,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

      {/* HEADER */}
      <div className="p-4 border-b flex items-center gap-2">
        <BookOpen size={18} />
        <h2 className="font-semibold">Safety Modules</h2>
      </div>

      {/* LIST */}
      <div className="p-4 space-y-3">

        {modules.map((m, i) => {
          const locked = !isUnlocked(i);
          const done = m.progress >= 100;
          const inProgress = m.progress > 0 && !done;

          return (
            <div
              key={m.id}
              onClick={() => {
                if (locked) return;
                onSelect(m, i);
              }}
              className={`
                p-4 rounded-xl border transition cursor-pointer
                ${locked && "bg-gray-100 text-gray-400 cursor-not-allowed"}
                ${!locked && "hover:shadow-md hover:bg-blue-50"}
                ${done && "border-green-400 bg-green-50"}
                ${inProgress && "border-blue-400 bg-blue-50"}
              `}
            >
              {/* TOP */}
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-semibold">
                    {m.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {locked
                      ? "🔒 Complete previous module"
                      : done
                      ? "Completed ✔"
                      : inProgress
                      ? `In Progress • ${m.progress}%`
                      : `Ready • ${m.duration}`}
                  </p>
                </div>

                {/* ICON */}
                <div>
                  {locked && <Lock size={18} />}
                  {inProgress && (
                    <PlayCircle
                      size={18}
                      className="text-blue-600"
                    />
                  )}
                  {done && (
                    <CheckCircle
                      size={18}
                      className="text-green-600"
                    />
                  )}
                </div>
              </div>

              {/* PROGRESS BAR */}
              {!locked && (
                <div className="mt-3 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
              )}

              {/* ACTION BUTTON (BONUS UX) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 penting
                  if (locked) return;
                  onSelect(m, i);
                }}
                disabled={locked}
                className={`
                  mt-3 w-full py-2 rounded-lg text-sm font-medium transition
                  ${locked
                    ? "bg-gray-300"
                    : done
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white"}
                `}
              >
                {locked
                  ? "Locked"
                  : done
                  ? "Review"
                  : inProgress
                  ? "Continue"
                  : "Start Module"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}