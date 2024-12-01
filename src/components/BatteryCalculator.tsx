import React, { useEffect, useState } from "react";

const BatteryCalculator: React.FC = () => {
  const [options, setOptions] = useState<
    { idVehiculo: string; marca: string; modelo: string }[]
  >([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [performanceRecords, setPerformanceRecords] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    kilometraje: 0,
    bateriaInicial: 0,
    bateriaFinal: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRecord = {
      idVehiculo: selectedOption,
      fecha: new Date().toISOString(),
      kilometraje: formData.kilometraje,
      bateriaInicial: formData.bateriaInicial,
      bateriaFinal: formData.bateriaFinal,
      rendimiento: 0,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/registroRendimiento/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(newRecord),
        }
      );

      if (!response.ok) {
        console.error("Error saving new record:", response);
        throw new Error("Error saving new record");
      }

      fetchPerformanceRecords();
    } catch (error) {
      console.error("Error saving new record:", error);
    }
  };

  const fetchPerformanceRecords = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/registroRendimiento/todosRegistrosVehiculo/${selectedOption}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (!response.ok) {
        console.error("Error fetching performance records:", response);
        throw new Error("Error fetching performance records");
      }

      const data = await response.json();
      setPerformanceRecords(data);
    } catch (error) {
      console.error("Error fetching performance records:", error);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
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

        const response = await fetch(
          "http://localhost:8080/vehiculo/obtenerVehiculosPorUsuario",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token.trim()}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Error fetching options:", response);
          throw new Error("Error fetching options");
        }

        const data = await response.json();

        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchPerformanceRecords();
    }
  }, [selectedOption]);

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Option
          </label>
          <select
            title="Select Option"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.idVehiculo} value={option.idVehiculo}>
                {option.marca + " " + option.modelo}
              </option>
            ))}
          </select>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Distance Traveled (km)
            </label>
            <input
              type="number"
              title="Distance Traveled (km)"
              placeholder="Insert distance traveled in kilometers"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              name="kilometraje"
              value={formData.kilometraje}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Starting Battery Level (%)
            </label>
            <input
              type="number"
              title="Starting Battery Level (%)"
              placeholder="Insert starting battery level in percentage"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              name="bateriaInicial"
              value={formData.bateriaInicial}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ending Battery Level (%)
            </label>
            <input
              type="number"
              title="Ending Battery Level (%)"
              placeholder="Insert ending battery level in percentage"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              name="bateriaFinal"
              value={formData.bateriaFinal}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Save New Efficency Record
          </button>
        </div>
      </form>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Performance Metrics
        </h3>
        <p className="text-sm text-gray-600">
          Enter values above to calculate efficiency
        </p>
      </div>

      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <table className="min-w-full min-h-full divide-y divide-gray-200">
          <thead className="bg-[#0891b2] hover:bg-cyan-500">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Register Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Kilometers Traveled (km)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Initial Battery Level (%)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Final Battery Level (%)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Performance (km/kWh)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {performanceRecords.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(record.fecha).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.kilometraje}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.bateriaInicial}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.bateriaFinal}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.rendimiento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#16a34a] p-4 rounded-lg text-white">
        <h3 className="text-lg font-medium mb-2">
          Average Vehicle Performance
        </h3>
        <p className="text-2xl font-bold">
          {performanceRecords.length > 0
            ? (
                performanceRecords.reduce(
                  (acc, record) => acc + record.rendimiento,
                  0
                ) / performanceRecords.length
              ).toFixed(2)
            : "0.00 "}
          km/kWh
        </p>
      </div>
    </div>
  );
};

export default BatteryCalculator;
