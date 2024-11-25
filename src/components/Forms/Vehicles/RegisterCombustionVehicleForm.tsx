import { actions } from "astro:actions";
import React, { useState, type FormEvent } from "react";
import ErrorMessageForm from "../../ErrorMessageForm";
import SuccessMessageForm from "../../Utils/SuccessMessageForm";

const RegisterCombustionVehicleForm: React.FC = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    anio: "",
    clasificacion: "",
    color: "",
    consumoCombustible: 0,
    emisionesCO2: 0,
    costoCombustible: 0,
    capacidadTanque: 0,
    imageURL: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);

    const formDataObj = new FormData(e.currentTarget);

    const result = (await actions.newCombustionVehicle(formDataObj)) as unknown as {
      success: boolean;
      error?: { fields: any };
      data?: { data: string };
    };

    if (result.error) {
      console.error(result.error);

      const errorMessages: { [key: string]: string } = {};
      if (result.error && "fields" in result.error) {
        Object.entries(
          result.error.fields as { [key: string]: string[] }
        ).forEach(([key, value]) => {
          errorMessages[key] = value[0];
        });
      }
      setErrors(errorMessages);
      return;
    }

    // Manejar el éxito
    setFormData({
      marca: "",
      modelo: "",
      anio: "",
      clasificacion: "",
      color: "",
      consumoCombustible: 0,
      emisionesCO2: 0,
      costoCombustible: 0,
      capacidadTanque: 0,
      imageURL: "",
    });

    setSuccessMessage(result.data?.data ?? null);

    // Redirigir al usuario a la página de dashboard después de 3 segundos
    setTimeout(() => {
        window.location.href = "/vehicles";
    }, 3000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="marca"
            className="block text-sm font-medium text-gray-700"
          >
            Make
          </label>
          <input
            type="text"
            name="marca"
            id="marca"
            value={formData.marca}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.marca && <ErrorMessageForm errorMessage={errors.marca} />}
        </div>

        <div>
          <label
            htmlFor="modelo"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <input
            type="text"
            name="modelo"
            id="modelo"
            value={formData.modelo}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.modelo && <ErrorMessageForm errorMessage={errors.modelo} />}
        </div>

        <div>
          <label
            htmlFor="anio"
            className="block text-sm font-medium text-gray-700"
          >
            Model Year
          </label>
          <input
            type="text"
            name="anio"
            id="anio"
            value={formData.anio}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.anio && <ErrorMessageForm errorMessage={errors.anio} />}
        </div>

        <div>
          <label
            htmlFor="clasificacion"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle Classification
          </label>
          <select
            id="clasificacion"
            name="clasificacion"
            className="mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg"
            value={formData.clasificacion}
            onChange={handleChange}
          >
            <option value={``}>Please select a classification</option>
            <option value={`SUV`}>SUV</option>
            <option value={`Sedan`}>Sedan</option>
            <option value={`Truck`}>Truck</option>
            <option value={`Coupe`}>Coupe</option>
            <option value={`Convertible`}>Convertible</option>
          </select>
          {errors.clasificacion && (
            <ErrorMessageForm errorMessage={errors.clasificacion} />
          )}
        </div>

        <div>
          <label
            htmlFor="color"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle Color
          </label>
          <input
            type="text"
            name="color"
            id="color"
            value={formData.color}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.color && <ErrorMessageForm errorMessage={errors.color} />}
        </div>

        <div>
          <label
            htmlFor="consumoCombustible"
            className="block text-sm font-medium text-gray-700"
          >
            Fuel Consumption (L/km)
          </label>
          <input
            type="number"
            name="consumoCombustible"
            id="consumoCombustible"
            value={formData.consumoCombustible}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.consumoCombustible && (
            <ErrorMessageForm errorMessage={errors.consumoCombustible} />
          )}
        </div>

        <div>
          <label
            htmlFor="emisionesCO2"
            className="block text-sm font-medium text-gray-700"
          >
            CO2 Emissions (g/km)
          </label>
          <input
            type="number"
            name="emisionesCO2"
            id="emisionesCO2"
            value={formData.emisionesCO2}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.emisionesCO2 && (
            <ErrorMessageForm errorMessage={errors.emisionesCO2} />
          )}
        </div>

        <div>
          <label
            htmlFor="costoCombustible"
            className="block text-sm font-medium text-gray-700"
          >
            Fuel Cost ($/L)
          </label>
          <input
            type="number"
            name="costoCombustible"
            id="costoCombustible"
            value={formData.costoCombustible}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.costoCombustible && (
            <ErrorMessageForm errorMessage={errors.costoCombustible} />
          )}
        </div>

        <div>
          <label
            htmlFor="capacidadTanque"
            className="block text-sm font-medium text-gray-700"
          >
            Tank Capacity (L)
          </label>
          <input
            type="number"
            name="capacidadTanque"
            id="capacidadTanque"
            value={formData.capacidadTanque}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.capacidadTanque && (
            <ErrorMessageForm errorMessage={errors.capacidadTanque} />
          )}
        </div>

        <div>
          <label
            htmlFor="imageURL"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle Image URL
          </label>
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.imageURL && <ErrorMessageForm errorMessage={errors.imageURL} />}
        </div>
      </div>

      {errors.general && <ErrorMessageForm errorMessage={errors.general} />}

      {successMessage && <SuccessMessageForm successMessage={successMessage} />}

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Register Vehicle
        </button>
      </div>
    </form>
  );
};

export default RegisterCombustionVehicleForm;