import Card from "../../../ui/Card";

export default function MapSection() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm text-gray-500">
          Worker Map Preview
        </h3>
        <button className="text-blue-600 text-sm font-medium">
          VIEW FULL MAP
        </button>
      </div>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200">
        <img
          src="https://via.placeholder.com/800"
          className="w-full h-full object-cover opacity-60"
        />

        {/* worker dots */}
        <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
        <div className="absolute top-[60%] left-[45%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />

        {/* overlay */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 text-white p-3 rounded-lg flex justify-between text-sm">
          <div>
            <p className="text-xs opacity-70">ACTIVE</p>
            <p className="font-bold">03</p>
          </div>
          <div>
            <p className="text-xs opacity-70">ZONES</p>
            <p className="font-bold">SECURE</p>
          </div>
        </div>
      </div>
    </Card>
  );
}