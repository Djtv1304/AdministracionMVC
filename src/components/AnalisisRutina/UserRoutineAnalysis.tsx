import React, { useState, useEffect } from "react";

const UserRoutineAnalysis: React.FC = () => {
  const [routines, setRoutines] = useState<any[]>([]);
  const [filteredRoutines, setFilteredRoutines] = useState<any[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const fetchRoutines = async () => {
    try {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const token = getCookie("jwtToken");

      if (!token) {
        throw new Error("No token found in cookies");
      }

      const response = await fetch("https://coreweb-springboot-backend.onrender.com/rutinaUsuario/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.trim()}`,
        },
      });

      if (!response.ok) {
        console.error("Error fetching routines:", response);
        throw new Error("Error fetching routines");
      }

      const data = await response.json();
      setRoutines(data);
      setFilteredRoutines(data);
    } catch (error) {
      console.error("Error fetching routines:", error);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = routines.filter((routine) => {
        const routineDate = new Date(routine.fechaRutina);
        return (
          routineDate >= new Date(startDate) && routineDate <= new Date(endDate)
        );
      });
      setFilteredRoutines(filtered);
    } else {
      setFilteredRoutines(routines);
    }
  }, [startDate, endDate, routines]);

  const calculateAverageKilometraje = () => {
    if (filteredRoutines.length === 0) return 0;
    const totalKilometraje = filteredRoutines.reduce(
      (acc, routine) => acc + parseFloat(routine.kilometrajeRecorrido),
      0
    );
    return (totalKilometraje / filteredRoutines.length).toFixed(2);
  };

  const calculateAverageKilometrajeByDay = () => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const averages: { [key: string]: number } = {};

    daysOfWeek.forEach((day) => {
      const routinesForDay = filteredRoutines.filter(
        (routine) => routine.diaSemana === day
      );
      if (routinesForDay.length > 0) {
        const totalKilometraje = routinesForDay.reduce(
          (acc, routine) => acc + parseFloat(routine.kilometrajeRecorrido),
          0
        );
        averages[day] = parseFloat(
          (totalKilometraje / routinesForDay.length).toFixed(2)
        );
      } else {
        averages[day] = 0;
      }
    });

    return averages;
  };

  const averageKilometrajeByDay = calculateAverageKilometrajeByDay();

  // Ordenar las rutinas filtradas de mayor a menor kilometraje
  const sortedFilteredRoutines = [...filteredRoutines].sort(
    (a, b) => parseFloat(b.kilometrajeRecorrido) - parseFloat(a.kilometrajeRecorrido)
  );

  // Ordenar los días de la semana por promedio de kilometraje de mayor a menor
const sortedAverageKilometrajeByDay = Object.entries(averageKilometrajeByDay).sort(
    ([, averageA], [, averageB]) => averageB - averageA
);

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            title="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            title="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg">
        <table className="min-w-full min-h-full divide-y divide-gray-200">
          <thead className="bg-[#0891b2] hover:bg-cyan-500">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Day of the Week
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Activity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Kilometraje Recorrido (km)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedFilteredRoutines.map((routine, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(routine.fechaRutina).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {routine.diaSemana}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {routine.actividad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {routine.kilometrajeRecorrido}
                </td>
              </tr>
            ))}
            <tr>
              <td
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                colSpan={3}
              >
                Average Kilometraje per Day
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {calculateAverageKilometraje()} km
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
            Average Kilometraje by Day of the Week
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedAverageKilometrajeByDay.map(([day, average], index) => {
              const minKilometraje = Math.min(
                ...Object.values(averageKilometrajeByDay)
              );
              const isMinKilometraje = average === minKilometraje;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-md shadow-sm transition-colors ${
                    isMinKilometraje
                      ? "bg-[#16a34a] text-white hover:bg-green-500"
                      : "bg-[#0891b2] hover:bg-cyan-500"
                  }`}
                >
                  <h4 className="font-semibold text-white">{day}</h4>
                  <p className="text-white">{average} km</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoutineAnalysis;