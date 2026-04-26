import { useState } from "react";
import Card from "../../../ui/Card";

export default function MapSection() {
  // State untuk mengontrol apakah modal terbuka
  const [isZoomed, setIsZoomed] = useState(false);

  const mapUrl = "/Homepage-map.webp"; // Path ke folder public

  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm text-gray-500">Worker Map Preview</h3>
          <button 
            onClick={() => setIsZoomed(true)}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            VIEW FULL MAP
          </button>
        </div>

        {/* Preview Container */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200">
          <img
            src={mapUrl}
            alt="Worker Map"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Worker dots (tetap tampil di preview) */}
          <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
          <div className="absolute top-[60%] left-[45%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
          <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-blue-600 rounded-full animate-pulse" />

          {/* Overlay info */}
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

      {/* --- MODAL ZOOM --- */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Blur Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsZoomed(false)} 
          />
          
          {/* Modal Content */}
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Tombol Close (X) */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Gambar Full Size */}
            <img 
              src={mapUrl} 
              alt="Full Worker Map" 
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}