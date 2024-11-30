import { actions } from "astro:actions";
import React, { useState } from "react";
import type { FormEvent } from "react";
import ErrorMessageForm from "../../ErrorMessageForm";

const UserRoutineForm: React.FC = () => {
  const [formData, setFormData] = useState({
    diaSemana: "",
    actividad: "",
    kilometrajeRecorrido: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formDataObj = new FormData(e.currentTarget);

    const result = (await actions.userRoutine(formDataObj)) as unknown as {
      success: boolean;
      error?: { fields: any };
      data?: { data: string };
    };

    console.log(result.error);

    if ((result.success !== undefined && !result.success) || result.error) {
      console.error(result.error);

      const errorMessages: { [key: string]: string } = {};
      if (result.error && "fields" in result.error) {
        Object.entries(
          result.error.fields as { [key: string]: string[] }
        ).forEach(([key, value]) => {
          errorMessages[key] = value[0];
        });
      }

      if (
        result.data &&  
        typeof result.data === "object" &&
        "error" in result.data &&
        result.data.error &&
        typeof result.data.error === "object" &&
        "fields" in result.data.error
      ) {
        Object.entries(
          result.data.error.fields as { [key: string]: string[] }
        ).forEach(([key, value]) => {
          errorMessages[key] = value as unknown as string;
        });
      }

      console.error(errorMessages);
      setErrors(errorMessages);
      return;
    }

    // Redirigir al usuario a la página de dashboard
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <form className="space-y-6 w-3/5" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label
              htmlFor="diaSemana"
              className="block text-sm font-medium text-gray-700"
            >
              Day of the Week
            </label>
            <select
              id="diaSemana"
              name="diaSemana"
              required
              value={formData.diaSemana}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            >
              <option value="">Select a day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            {errors.diaSemana && (
              <ErrorMessageForm errorMessage={errors.diaSemana} />
            )}
          </div>
          <div>
            <label
              htmlFor="actividad"
              className="block text-sm font-medium text-gray-700"
            >
              Activity
            </label>
            <input
              id="actividad"
              name="actividad"
              type="text"
              required
              value={formData.actividad}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Activity"
            />
            {errors.actividad && (
              <ErrorMessageForm errorMessage={errors.actividad} />
            )}
          </div>
          <div>
            <label
              htmlFor="kilometrajeRecorrido"
              className="block text-sm font-medium text-gray-700"
            >
              Traveled Kilometers
            </label>
            <input
              id="kilometrajeRecorrido"
              name="kilometrajeRecorrido"
              type="text"
              required
              value={formData.kilometrajeRecorrido}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Traveled Kilometers"
            />
            {errors.kilometrajeRecorrido && (
              <ErrorMessageForm errorMessage={errors.kilometrajeRecorrido} />
            )}
          </div>
        </div>

        {errors.general && <ErrorMessageForm errorMessage={errors.general} />}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Register Routine
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRoutineForm;
