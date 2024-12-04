import { actions } from "astro:actions";
import React, { useState } from "react";
import type { FormEvent } from "react";
import { FiUserPlus } from "react-icons/fi";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);

    const formDataObj = new FormData(e.currentTarget);

    const result = (await actions.newUser(formDataObj)) as unknown as {
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
      name: "",
      lastname: "",
      birthdate: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setSuccessMessage(result.data?.data ?? null);
  };

  return (
    <div className="min-h-[80vh] flex items-centr justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              sign in to your existing account
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.name && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name*
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                value={formData.lastname}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.lastname && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.lastname}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium text-gray-700"
              >
                Birthdate*
              </label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                required
                value={formData.birthdate}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.birthdate && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.birthdate}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.email && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.email}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.password && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.password}</span>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password*
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              />
              {errors.confirmPassword && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                  role="alert"
                >
                  <span className="block sm:inline">
                    {errors.confirmPassword}
                  </span>
                </div>
              )}
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
          {successMessage && (
            <div
              className={`text-sm p-2 rounded-md ${
                successMessage.startsWith("Ya existe")
                  ? "bg-red-100 text-red-500"
                  : "bg-green-100 text-green-500"
              }`}
            >
              <div className="space-y-2">
                <div>{successMessage}</div>
                {!successMessage.startsWith("Ya existe") && (
                  <a
                    href="/login"
                    className="font-medium text-white bg-green-500 hover:bg-green-600 mt-7 px-2 py-1 rounded-md block text-center"
                  >
                    Sign in to your new account
                  </a>
                )}
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FiUserPlus size={20} />
              </span>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
