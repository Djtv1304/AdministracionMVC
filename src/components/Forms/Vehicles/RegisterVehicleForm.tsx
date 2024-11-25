import mod from "astro/zod";
import { actions } from "astro:actions";
import React, { useState, type FormEvent } from "react";
import ErrorMessageForm from "../../ErrorMessageForm";
import SuccessMessageForm from "../../Utils/SuccessMessageForm";

const RegisterVehicleForm: React.FC = () => {
  // Definir el esquema de validacion
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // Definir el mensaje de exito
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Definir el estado del formulario con los valores iniciales
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: 0,
    batteryCapacity: 0,
    energyConsumption: 0,
    classification: "",
    color: "",
    autonomy: 0,
    chargeTime: "",
    maintenanceCost: 0,
    imageURL: "",
  });

  // Funcion para manejar el cambio de los inputs dinamicamente
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funcion para manejar el envio del formulario utilizando acciones de Astro
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formDataObj = new FormData(e.currentTarget);

    const result = (await actions.newVehicle(formDataObj)) as unknown as {
      success: boolean;
      error?: { fields: any };
      data?: { data: string };
    };

    console.log(result);

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
      make: "",
      model: "",
      year: 0,
      batteryCapacity: 0,
      energyConsumption: 0,
      classification: "",
      color: "",
      autonomy: 0,
      chargeTime: "",
      maintenanceCost: 0,
      imageURL: "",
    });

    setSuccessMessage(result.data?.data ?? null);

    // Redirigir al usuario a la página de dashboard
    window.location.href = "/vehicles";
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="make"
            className="block text-sm font-medium text-gray-700"
          >
            Make
          </label>
          <select
            id="make"
            name="make"
            className="mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg"
            value={formData.make}
            onChange={handleChange}
          >
            <option value={`Tesla`}>Tesla</option>
            <option value={`Chevrolet`}>Chevrolet</option>
            <option value={`Ford`}>Ford</option>
            <option value={`Nissan`}>Nissan</option>
            <option value={`BMW`}>BMW</option>
          </select>
          {errors.make && <ErrorMessageForm errorMessage={errors.make} />}
        </div>

        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <input
            type="text"
            name="model"
            id="model"
            value={formData.model}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.model && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
              role="alert"
            >
              <span className="block sm:inline">{errors.model}</span>
            </div>
          )}
          {errors.model && <ErrorMessageForm errorMessage={errors.model} />}
        </div>

        <div>
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            min="2000"
            max="2024"
            value={formData.year}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.year && <ErrorMessageForm errorMessage={errors.year} />}
        </div>

        <div>
          <label
            htmlFor="batteryCapacity"
            className="block text-sm font-medium text-gray-700"
          >
            Battery Capacity (kWh)
          </label>
          <input
            type="number"
            name="batteryCapacity"
            id="batteryCapacity"
            value={formData.batteryCapacity}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
          {errors.batteryCapacity && (
            <ErrorMessageForm errorMessage={errors.batteryCapacity} />
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="energyConsumption"
          className="block text-sm font-medium text-gray-700"
        >
          Energy Consumption (kWh per kilometer)
        </label>
        <input
          type="number"
          name="energyConsumption"
          id="energyConsumption"
          value={formData.energyConsumption}
          onChange={handleChange}
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
        {errors.energyConsumption && (
          <ErrorMessageForm errorMessage={errors.energyConsumption} />
        )}
      </div>

      <div>
        <label
          htmlFor="classification"
          className="block text-sm font-medium text-gray-700"
        >
          Vehicle Classification
        </label>
        <select
          id="classification"
          name="classification"
          className="mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg"
          value={formData.classification}
          onChange={handleChange}
        >
          <option value={``}>Please select a classification</option>
          <option value={`SUV`}>SUV</option>
          <option value={`Sedan`}>Sedan</option>
        </select>
        {errors.classification && (
          <ErrorMessageForm errorMessage={errors.classification} />
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
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          value={formData.color}
          onChange={handleChange}
        />
        {errors.color && <ErrorMessageForm errorMessage={errors.color} />}
      </div>

      <div>
        <label
          htmlFor="autonomy"
          className="block text-sm font-medium text-gray-700"
        >
          Pure Electric Autonomy (km)
        </label>
        <input
          type="number"
          name="autonomy"
          id="autonomy"
          value={formData.autonomy}
          onChange={handleChange}
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
        {errors.autonomy && <ErrorMessageForm errorMessage={errors.autonomy} />}
      </div>

      <div>
        <label
          htmlFor="chargeTime"
          className="block text-sm font-medium text-gray-700"
        >
          Charge Time (hours)
        </label>
        <input
          type="text"
          name="chargeTime"
          id="chargeTime"
          value={formData.chargeTime}
          onChange={handleChange}
          placeholder="e.g. 8:30 (8 hours and 30 minutes)"
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
        {errors.chargeTime && (
          <ErrorMessageForm errorMessage={errors.chargeTime} />
        )}
      </div>

      <div>
        <label
          htmlFor="maintenanceCost"
          className="block text-sm font-medium text-gray-700"
        >
          Average Maintenance Cost ($)
        </label>
        <input
          type="number"
          name="maintenanceCost"
          id="maintenanceCost"
          value={formData.maintenanceCost}
          onChange={handleChange}
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
        {errors.maintenanceCost && (
          <ErrorMessageForm errorMessage={errors.maintenanceCost} />
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

export default RegisterVehicleForm;
