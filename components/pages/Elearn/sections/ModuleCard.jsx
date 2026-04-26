export default function ModuleCard({ module, locked, onClick }) {
  const getStyle = () => {
    if (locked) return "bg-gray-200 text-gray-400";
    if (module.progress > 0)
      return "bg-blue-50 border-blue-500";
    return "bg-white";
  };

  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-xl border cursor-pointer transition
        ${getStyle()}
      `}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">
            {module.title}
          </h3>
          <p className="text-xs text-gray-500">
            {module.duration}
          </p>
        </div>

        {locked && <span>🔒</span>}
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-3 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${module.progress}%` }}
        />
      </div>

      {/* REQUIREMENT */}
      {module.required && (
        <p className="text-xs mt-2 text-red-500">
          Required Module
        </p>
      )}
    </div>
  );
}