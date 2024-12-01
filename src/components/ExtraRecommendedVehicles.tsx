import React from "react";

interface ExtraRecommendedVehiclesProps {
  title: string;
  bestRecommendedVehicle: {
    idVehiculo: {
      timestamp: number;
      date: string;
    };
    marca: string;
    modelo: string;
    anio: number;
    capacidadBateria: number;
    idUsuario: {
      timestamp: number;
      date: string;
    };
    clasificacion: string;
    color: string;
    autonomia: string;
    consumoEnergetico: number;
    tiempoCarga: string;
    costoMantenimiento: number;
    imageURL: string;
    promedioRendimiento: number;
    precio: number;
  };
}

const ExtraRecommendedVehicles: React.FC<ExtraRecommendedVehiclesProps> = ({
  bestRecommendedVehicle,
  title,
}) => {
  const matchScore = Math.floor(Math.random() * 101);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Div de la imagen */}
          <img
            src={bestRecommendedVehicle.imageURL}
            alt={`${bestRecommendedVehicle.marca} ${bestRecommendedVehicle.modelo}`}
            className="h-56 w-full object-cover object-center"
          />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {bestRecommendedVehicle.marca} {bestRecommendedVehicle.modelo}
                </h3>
                <p className="text-sm text-gray-500">
                  {bestRecommendedVehicle.clasificacion}
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {matchScore}% Match
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {bestRecommendedVehicle.precio}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Autonomy</p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {bestRecommendedVehicle.autonomia} km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraRecommendedVehicles;
