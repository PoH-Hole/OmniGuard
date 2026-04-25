import Card from "../../../ui/Card";
import Button from "../../../ui/Button";

export default function AlertSection() {
  return (
    <Card className="p-0">
      {/* Header */}
      <div className="p-3 border-b flex justify-between">
        <h3 className="font-semibold">Live Alerts</h3>
        <span className="text-blue-600 text-sm">Logs</span>
      </div>

      {/* Alerts */}
      <div className="p-3 space-y-3">
        {/* Critical */}
        <div className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
          <p className="text-sm font-medium">
            PPE Violation: No Mask
          </p>
          <p className="text-xs text-gray-500">
            Operator detected without mask
          </p>

          <div className="flex gap-2 mt-2">
            <Button variant="danger">Ack</Button>
            <Button variant="outline">Call</Button>
          </div>
        </div>

        {/* Warning */}
        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded">
          <p className="text-sm font-medium">
            Bad Posture Detected
          </p>
          <p className="text-xs text-gray-500">
            Risk of injury
          </p>
        </div>

        {/* Info */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded">
          <p className="text-sm font-medium">
            Shift Changed
          </p>
          <p className="text-xs text-gray-500">
            New workers assigned
          </p>
        </div>
      </div>
    </Card>
  );
}