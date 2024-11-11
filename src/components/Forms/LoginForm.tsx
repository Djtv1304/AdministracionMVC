import { actions } from 'astro:actions';
import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { AiOutlineLock } from 'react-icons/ai';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formDataObj = new FormData(e.currentTarget);

    const result = await actions.loginUser(formDataObj);

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

    if (!result.data.success) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: result.data.error?.fields.general ?? '',
        }));
      return;
    }

    // Redirigir al usuario a la página de dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            {errors.email && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                <span className="block sm:inline">{errors.email}</span>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                <span className="block sm:inline">{errors.password}</span>
              </div>
            )}
          </div>
        </div>

        {errors.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5" role="alert">
            <span className="block sm:inline">{errors.general}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <AiOutlineLock size={25} />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;