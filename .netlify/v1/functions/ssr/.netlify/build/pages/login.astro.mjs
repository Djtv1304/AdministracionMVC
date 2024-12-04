/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$PublicLayout } from '../chunks/PublicLayout_D8BrMvXa.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { a as actions } from '../chunks/_astro_actions_Dmk27Yyj.mjs';
import { useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
export { renderers } from '../renderers.mjs';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const formDataObj = new FormData(e.currentTarget);
    const result = await actions.loginUser(formDataObj);
    if (result.error) {
      console.error(result.error);
      const errorMessages = {};
      if (result.error && "fields" in result.error) {
        Object.entries(result.error.fields).forEach(([key, value]) => {
          errorMessages[key] = value[0];
        });
      }
      setErrors(errorMessages);
      return;
    }
    if (!result.data.success) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: result.data.error?.fields.general ?? ""
      }));
      return;
    }
    window.location.href = "/dashboard";
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Sign in to your account" }) }),
    /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-md shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "sr-only", children: "Email address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              name: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm",
              placeholder: "Email address"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.email }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "sr-only", children: "Password" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              required: true,
              value: formData.password,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm",
              placeholder: "Password"
            }
          ),
          errors.password && /* @__PURE__ */ jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.password }) })
        ] })
      ] }),
      errors.general && /* @__PURE__ */ jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.general }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "remember-me",
              className: "ml-2 block text-sm text-gray-900",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: "Forgot your password?"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsx(AiOutlineLock, { size: 25 }) }),
            "Sign in"
          ]
        }
      ) })
    ] })
  ] });
};

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": "Login - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/LoginForm.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/login.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
