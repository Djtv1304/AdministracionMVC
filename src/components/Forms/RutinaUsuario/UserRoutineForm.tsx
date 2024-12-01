import { actions } from "astro:actions";
import React, { useState, useEffect } from "react";
import type { FormEvent } from "react";
import ErrorMessageForm from "../../ErrorMessageForm";

const UserRoutineForm: React.FC = () => {
  const [routines, setRoutines] = useState<any[]>([]);
  const [completionMessage, setCompletionMessage] = useState<string | null>(
    null
  );

  const [formData, setFormData] = useState({
    fechaRutina: "",
    diaSemana: "",
    actividad: "",
    kilometrajeRecorrido: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fetchRoutines = async () => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const token = getCookie("jwtToken");

    console.log("El token es ", token);

    try {
      const response = await fetch("http://localhost:8080/rutinaUsuario/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.trim()}`,
        },
      });

      if (!response.ok) {
        console.error("Error fetching all routines:", response);
        throw new Error("Error fetching all routines");
      }

      const data = await response.json();
      setRoutines(data);
    } catch (error) {
      console.error("Error fetching all routines:", error);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  useEffect(() => {
    if (routines.length === 6) {
      alert(
        "The routine of the week is complete, this model will be used to make calculations and recommendations for electric vehicles."
      );
    }
  }, [routines]);

  useEffect(() => {
    if (routines.length === 7) {
      setCompletionMessage(
        "The routine of the week is complete, this model will be used to make calculations and recommendations for electric vehicles."
      );
    } else {
      setCompletionMessage(null);
    }
  }, [routines]);

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

    let result = (await actions.userRoutine(formDataObj)) as unknown as {
      success: boolean;
      error?: { fields: any };
      data?: { data: string };
    };

    // Verifica si el error está en result.data y ajusta el objeto para que encaje con tu lógica actual
    if (
      result.data &&
      typeof result.data === "object" &&
      "success" in result.data
    ) {
      result = result.data as unknown as {
        success: boolean;
        error?: { fields: any };
        data?: { data: string };
      };
    }

    if ((result.success !== undefined && !result.success) || result.error) {
      console.error(result.error);

      const errorMessages: { [key: string]: string } = {};

      if (result.error && "fields" in result.error) {
        // Accede directamente al campo general del error
        if (result.error.fields.general) {
          errorMessages.general = result.error.fields.general as string;
        }

        // Maneja otros campos de error si es necesario
        Object.entries(result.error.fields).forEach(([key, value]) => {
          if (key !== "general") {
            errorMessages[key] = value as string;
          }
        });
      }

      // Si hay un mensaje general en el texto del backend, asignarlo a "general"
      if (result.error?.fields?.general) {
        errorMessages.general = result.error.fields.general;
      } else if (typeof result.error === "object") {
        const generalError = await result.error.fields.general; // Captura el mensaje del backend
        if (generalError) {
          errorMessages.general = generalError;
        }
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

    // Reset the form data
    setFormData({
      fechaRutina: "",
      diaSemana: "",
      actividad: "",
      kilometrajeRecorrido: "",
    });

    fetchRoutines();
  };

  return (
    <div className="flex flex-col items-center w-full space-y-8 gap-6">
      {completionMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{completionMessage}</span>
        </div>
      )}
      <form className="space-y-6 w-3/5" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
            <div>
            <label
              htmlFor="fechaRutina"
              className="block text-sm font-medium text-gray-700"
            >
              Routine Date
            </label>
            <input
              id="fechaRutina"
              name="fechaRutina"
              type="date"
              required
              value={formData.fechaRutina}
              onChange={(e) => {
              handleChange(e);
              const date = new Date(e.target.value);
              const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ];
              setFormData((prevFormData) => ({
                ...prevFormData,
                fechaRutina: e.target.value,
                diaSemana: days[date.getUTCDay()],
              }));
              }}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            />
            {errors.fechaRutina && (
              <ErrorMessageForm errorMessage={errors.fechaRutina} />
            )}
            </div>
          <div>
            <label
              htmlFor="diaSemana"
              className="block text-sm font-medium text-gray-700"
            >
              Day of the Week
            </label>
            <input
              id="diaSemana"
              name="diaSemana"
              type="text"
              readOnly
              value={formData.diaSemana}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            />
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

      <div className="bg-gray-50 rounded-lg overflow-auto">
        {routines.length === 0 ? (
          <p className="text-gray-500 px-60">No routines registered.</p>
        ) : (
          <table className="min-w-full min-h-full divide-y divide-gray-200">
            <thead className="bg-[#0891b2] hover:bg-cyan-500">
              <tr>
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
                  Traveled Kilometers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {routines.map((routine, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {routine.diaSemana}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {routine.actividad}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    {routine.kilometrajeRecorrido}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserRoutineForm;
