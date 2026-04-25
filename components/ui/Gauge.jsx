export default function Gauge({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center">
        <span className="font-bold">{value}</span>
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}