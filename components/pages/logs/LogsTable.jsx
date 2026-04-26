export default function LogsTable({ data }) {
  const getColor = (type) => {
    switch (type) {
      case "CRITICAL":
        return "border-red-500 text-red-600 bg-red-50";
      case "WARNING":
        return "border-orange-400 text-orange-600 bg-orange-50";
      default:
        return "border-blue-400 text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="space-y-3">
      {data.map((log) => (
        <div
          key={log.id}
          className={`border-l-4 p-4 rounded-xl shadow-sm ${getColor(log.type)}`}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">{log.id}</span>
            <span className="text-xs px-2 py-1 rounded bg-white border">
              {log.type}
            </span>
          </div>

          <h3 className="font-semibold mt-2">{log.title}</h3>
          <p className="text-sm opacity-80">{log.desc}</p>

          <p className="text-xs mt-2 text-right opacity-70">
            {new Date(log.timestamp).toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
}