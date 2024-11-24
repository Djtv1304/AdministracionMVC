import mod from "astro/zod";
import { actions } from "astro:actions";
import React, { useState, type FormEvent } from "react";

const RegisterVehicleForm: React.FC = () => {
  // Definir el esquema de validacion
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Definir el estado del formulario con los valores iniciales
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: 0,
    batteryCapacity: 0,
    mileage: 0,
    condition: "new",
    imageURL: "",
  });

  // Funcion para manejar el cambio de los inputs dinamicamente
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funcion para manejar el envio del formulario utilizando acciones de Astro
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formDataObj = new FormData(e.currentTarget);
    
    const result = await actions.newVehicle(formDataObj) as unknown as { success: boolean; error?: { fields: any }; data?: { data: string } };

    console.log(result);

    if (result.error) {
      
      console.error(result.error);

      const errorMessages: { [key: string]: string } = {};
      if (result.error && 'fields' in result.error) {
        Object.entries(result.error.fields as { [key: string]: string[] }).forEach(([key, value]) => {
          errorMessages[key] = value[0];
        });
      }
      setErrors(errorMessages);
      return;
    }

    // Manejar el éxito
    setFormData({
      name: '',
      lastname: '',
      birthdate: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    
    setSuccessMessage(result.data?.data ?? null);
  };

  return (
    <form className="space-y-6">
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
          >
            <option>Tesla</option>
            <option>Chevrolet</option>
            <option>Ford</option>
            <option>Nissan</option>
            <option>BMW</option>
          </select>
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
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
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
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
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
            className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          />
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
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
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
        >
          <option>SUV</option>
          <option>Sedan</option>
          <option>Truck</option>
          <option>Coupe</option>
          <option>Convertible</option>
        </select>
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
        />
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
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
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
          placeholder="e.g. 8:30 (8 hours and 30 minutes)"
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
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
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label
          htmlFor="imageURL"
          className="block text-sm font-medium text-gray-700"
        >
          Vehicle Images
        </label>
        <input
          type="url"
          name="imageURL"
          id="imageURL"
          className="mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        />
      </div>

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
