import React, { useState } from "react";
import ErrorMessageForm from "../ErrorMessageForm";
import ExtraRecommendedVehicles from "../ExtraRecommendedVehicles";

const VehicleRecommendation: React.FC = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    budget: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [bestRecommendedVehicle, setBestRecommendedVehicle] = useState<
    any | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const token = getCookie("jwtToken");

    if (!token) {
      setErrors({ general: "No token found in cookies" });
      return;
    }

    const recommendationPayload = {
      clasificacionVehiculo: formData.vehicleType,
      presupuesto: formData.budget,
    };

    try {
      // Realizar el POST al endpoint /save
      const saveResponse = await fetch(
        "https://coreweb-springboot-backend.onrender.com/preferenciaUsuario/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.trim()}`,
          },
          body: JSON.stringify(recommendationPayload),
        }
      );

      if (!saveResponse.ok) {
        console.error("Error saving data:", saveResponse);
        throw new Error("Error saving data");
      }

      // Realizar el GET al endpoint /preferenciaUsuario/recomendarVehiculo
      const recommendationResponse = await fetch(
        "https://coreweb-springboot-backend.onrender.com/preferenciaUsuario/recomendarVehiculo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.trim()}`,
          },
        }
      );

      if (!recommendationResponse.ok) {
        console.error(
          "Error fetching recommendations:",
          recommendationResponse
        );
        throw new Error("Error fetching recommendations");
      }

      const data = await recommendationResponse.json();
      setBestRecommendedVehicle(data);
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "Failed to fetch recommendations" });
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="vehicleType"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option value="">Select type</option>
              <option value="SEDAN">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="both">No Preference</option>
            </select>
            {errors.vehicleType && (
              <ErrorMessageForm errorMessage={errors.vehicleType} />
            )}
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget
            </label>
            <input
              title="budget"
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
            {errors.budget && <ErrorMessageForm errorMessage={errors.budget} />}
          </div>
        </div>

        {errors.general && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5"
            role="alert"
          >
            <span className="block sm:inline">{errors.general}</span>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Get Recommendations
          </button>
        </div>
      </form>

      {bestRecommendedVehicle && (
        <ExtraRecommendedVehicles
          title="Recommended Vehicle"
          bestRecommendedVehicle={bestRecommendedVehicle}
        />
      )}
    </>
  );
};

export default VehicleRecommendation;
