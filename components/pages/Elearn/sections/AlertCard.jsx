import { AlertTriangle, PlayCircle } from "lucide-react";

export default function AlertCard() {
  return (
    <div className="bg-white border-l-4 border-red-500 rounded-2xl p-4 shadow-sm space-y-4">

      <div className="flex items-start gap-3">
        <div className="bg-red-100 p-2 rounded-lg">
          <AlertTriangle className="text-red-600" size={18} />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">
              Priority Mitigation Required
            </h3>

            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              Violation Detected
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Recent anomalies in Line 4 indicate improper gowning sequencing.
            The AI recommends immediate review of the "Sterile Gowning Protocol v2.1".
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
          <PlayCircle size={16} />
          Start Suggested Module
        </button>

        <button className="px-4 border rounded-lg hover:bg-gray-100 transition">
          Dismiss
        </button>
      </div>

    </div>
  );
}