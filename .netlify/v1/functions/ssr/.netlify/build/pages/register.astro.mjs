/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$PublicLayout } from '../chunks/PublicLayout_D8BrMvXa.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { a as actions } from '../chunks/_astro_actions_Dmk27Yyj.mjs';
import { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
export { renderers } from '../renderers.mjs';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);
    const formDataObj = new FormData(e.currentTarget);
    const result = await actions.newUser(formDataObj);
    console.log(result);
    if (result.error) {
      console.error(result.error);
      const errorMessages = {};
      if (result.error && "fields" in result.error) {
        Object.entries(
          result.error.fields
        ).forEach(([key, value]) => {
          errorMessages[key] = value[0];
        });
      }
      setErrors(errorMessages);
      return;
    }
    setFormData({
      name: "",
      lastname: "",
      birthdate: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setSuccessMessage(result.data?.data ?? null);
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-[80vh] flex items-centr justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Create your account" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/login",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: "sign in to your existing account"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-md shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "name",
              className: "block text-sm font-medium text-gray-700",
              children: "First Name*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              name: "name",
              type: "text",
              required: true,
              value: formData.name,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.name && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.name })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "lastname",
              className: "block text-sm font-medium text-gray-700",
              children: "Last Name*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "lastname",
              name: "lastname",
              type: "text",
              required: true,
              value: formData.lastname,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.lastname && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.lastname })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "birthdate",
              className: "block text-sm font-medium text-gray-700",
              children: "Birthdate*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "birthdate",
              name: "birthdate",
              type: "date",
              required: true,
              value: formData.birthdate,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.birthdate && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.birthdate })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700",
              children: "Email address*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.email && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.email })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700",
              children: "Password*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              required: true,
              value: formData.password,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.password && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.password })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "confirm-password",
              className: "block text-sm font-medium text-gray-700",
              children: "Confirm Password*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "confirm-password",
              name: "confirmPassword",
              type: "password",
              required: true,
              value: formData.confirmPassword,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
            }
          ),
          errors.confirmPassword && /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
              role: "alert",
              children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.confirmPassword })
            }
          )
        ] })
      ] }),
      errors.general && /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5",
          role: "alert",
          children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.general })
        }
      ),
      successMessage && /* @__PURE__ */ jsx(
        "div",
        {
          className: `text-sm p-2 rounded-md ${successMessage.startsWith("Ya existe") ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("div", { children: successMessage }),
            !successMessage.startsWith("Ya existe") && /* @__PURE__ */ jsx(
              "a",
              {
                href: "/login",
                className: "font-medium text-white bg-green-500 hover:bg-green-600 mt-7 px-2 py-1 rounded-md block text-center",
                children: "Sign in to your new account"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsx(FiUserPlus, { size: 20 }) }),
            "Create Account"
          ]
        }
      ) })
    ] })
  ] }) });
};

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": "Register - EV Manager" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignupForm", SignUpForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/SignupForm.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/register.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
