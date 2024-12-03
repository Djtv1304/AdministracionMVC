/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DorM3o25.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { E as ErrorMessageForm } from '../chunks/ErrorMessageForm_ZrxVsV2Y.mjs';
export { renderers } from '../renderers.mjs';

const ExtraRecommendedVehicles = ({
  bestRecommendedVehicle,
  title
}) => {
  const matchScore = Math.floor(Math.random() * 101);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: bestRecommendedVehicle.imageURL,
          alt: `${bestRecommendedVehicle.marca} ${bestRecommendedVehicle.modelo}`,
          className: "h-56 w-full object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-medium text-gray-900", children: [
              bestRecommendedVehicle.marca,
              " ",
              bestRecommendedVehicle.modelo
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: bestRecommendedVehicle.clasificacion })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: [
            matchScore,
            "% Match"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Price" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-lg font-medium text-gray-900", children: bestRecommendedVehicle.precio })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Autonomy" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-lg font-medium text-gray-900", children: [
              bestRecommendedVehicle.autonomia,
              " km"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};

const VehicleRecommendation = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    budget: ""
  });
  const [errors, setErrors] = useState({});
  const [bestRecommendedVehicle, setBestRecommendedVehicle] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const getCookie = (name) => {
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
      presupuesto: formData.budget
    };
    try {
      const saveResponse = await fetch(
        "http://localhost:8080/preferenciaUsuario/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.trim()}`
          },
          body: JSON.stringify(recommendationPayload)
        }
      );
      if (!saveResponse.ok) {
        console.error("Error saving data:", saveResponse);
        throw new Error("Error saving data");
      }
      const recommendationResponse = await fetch(
        "http://localhost:8080/preferenciaUsuario/recomendarVehiculo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.trim()}`
          }
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
      console.log("Recommendations: ", data);
      setBestRecommendedVehicle(data);
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "Failed to fetch recommendations" });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "vehicleType",
              className: "block text-sm font-medium text-gray-700",
              children: "Preferred Vehicle Type"
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "vehicleType",
              name: "vehicleType",
              value: formData.vehicleType,
              onChange: handleChange,
              className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select type" }),
                /* @__PURE__ */ jsx("option", { value: "SEDAN", children: "Sedan" }),
                /* @__PURE__ */ jsx("option", { value: "SUV", children: "SUV" }),
                /* @__PURE__ */ jsx("option", { value: "both", children: "No Preference" })
              ]
            }
          ),
          errors.vehicleType && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.vehicleType })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "budget",
              className: "block text-sm font-medium text-gray-700",
              children: "Budget"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              title: "budget",
              type: "number",
              id: "budget",
              name: "budget",
              value: formData.budget,
              onChange: handleChange,
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            }
          ),
          errors.budget && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.budget })
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
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: "Get Recommendations"
        }
      ) })
    ] }),
    bestRecommendedVehicle && /* @__PURE__ */ jsx(
      ExtraRecommendedVehicles,
      {
        title: "Recommended Vehicle",
        bestRecommendedVehicle
      }
    )
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Get Recommendations - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Find Your Perfect EV Match</h1> <div class="bg-white shadow-sm rounded-lg p-6 mb-8"> <h2 class="text-lg font-medium text-gray-900 mb-4">Your Preferences</h2> ${renderComponent($$result2, "VehicleRecommendation", VehicleRecommendation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/VehicleRecommendation.tsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/recommendations/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/recommendations/index.astro";
const $$url = "/recommendations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
