/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../../chunks/ProtectedLayout_DorM3o25.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { a as actions } from '../../chunks/_astro_actions_BaADGzdK.mjs';
import { useState } from 'react';
import { E as ErrorMessageForm } from '../../chunks/ErrorMessageForm_ZrxVsV2Y.mjs';
import { S as SuccessMessageForm } from '../../chunks/SuccessMessageForm_4aExIZ3R.mjs';
export { renderers } from '../../renderers.mjs';

const RegisterVehicleForm = () => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
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
    precio: 0
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const formDataObj = new FormData(e.currentTarget);
    const result = await actions.newVehicle(formDataObj);
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
      precio: 0
    });
    setSuccessMessage(result.data?.data ?? null);
    setTimeout(() => {
      window.location.href = "/vehicles";
    }, 3e3);
  };
  return /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "make",
            className: "block text-sm font-medium text-gray-700",
            children: "Make"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "make",
            name: "make",
            className: "mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg",
            value: formData.make,
            onChange: handleChange,
            children: [
              /* @__PURE__ */ jsx("option", { value: `Tesla`, children: "Tesla" }),
              /* @__PURE__ */ jsx("option", { value: `Ford`, children: "Ford" }),
              /* @__PURE__ */ jsx("option", { value: `Mercedes Benz`, children: "Mercedes Benz" }),
              /* @__PURE__ */ jsx("option", { value: `BMW`, children: "BMW" })
            ]
          }
        ),
        errors.make && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.make })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "model",
            className: "block text-sm font-medium text-gray-700",
            children: "Model"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "model",
            id: "model",
            value: formData.model,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.model && /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
            role: "alert",
            children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errors.model })
          }
        ),
        errors.model && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.model })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "year",
            className: "block text-sm font-medium text-gray-700",
            children: "Model Year"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "year",
            id: "year",
            min: "2000",
            max: "2030",
            value: formData.year,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.year && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.year })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "batteryCapacity",
            className: "block text-sm font-medium text-gray-700",
            children: "Battery Capacity (kWh)"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "batteryCapacity",
            id: "batteryCapacity",
            value: formData.batteryCapacity,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.batteryCapacity && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.batteryCapacity })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "energyConsumption",
          className: "block text-sm font-medium text-gray-700",
          children: "Energy Consumption (kWh per kilometer)"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "energyConsumption",
          id: "energyConsumption",
          value: formData.energyConsumption,
          onChange: handleChange,
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.energyConsumption && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.energyConsumption })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "classification",
          className: "block text-sm font-medium text-gray-700",
          children: "Vehicle Classification"
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "classification",
          name: "classification",
          className: "mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg",
          value: formData.classification,
          onChange: handleChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: ``, children: "Please select a classification" }),
            /* @__PURE__ */ jsx("option", { value: `SUV`, children: "SUV" }),
            /* @__PURE__ */ jsx("option", { value: `Sedan`, children: "Sedan" })
          ]
        }
      ),
      errors.classification && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.classification })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "color",
          className: "block text-sm font-medium text-gray-700",
          children: "Vehicle Color"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "color",
          id: "color",
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md",
          value: formData.color,
          onChange: handleChange
        }
      ),
      errors.color && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.color })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "autonomy",
          className: "block text-sm font-medium text-gray-700",
          children: "Pure Electric Autonomy (km)"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "autonomy",
          id: "autonomy",
          value: formData.autonomy,
          onChange: handleChange,
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.autonomy && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.autonomy })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "chargeTime",
          className: "block text-sm font-medium text-gray-700",
          children: "Charge Time (hours)"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "chargeTime",
          id: "chargeTime",
          value: formData.chargeTime,
          onChange: handleChange,
          placeholder: "e.g. 8:30 (8 hours and 30 minutes)",
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.chargeTime && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.chargeTime })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "maintenanceCost",
          className: "block text-sm font-medium text-gray-700",
          children: "Average Maintenance Cost ($)"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "maintenanceCost",
          id: "maintenanceCost",
          value: formData.maintenanceCost,
          onChange: handleChange,
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.maintenanceCost && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.maintenanceCost })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "imageURL",
          className: "block text-sm font-medium text-gray-700",
          children: "Vehicle Image URL"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "imageURL",
          id: "imageURL",
          value: formData.imageURL,
          onChange: handleChange,
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.imageURL && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.imageURL })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "precio",
          className: "block text-sm font-medium text-gray-700",
          children: "Price ($)"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "precio",
          id: "precio",
          value: formData.precio,
          onChange: handleChange,
          className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
        }
      ),
      errors.precio && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.precio })
    ] }),
    errors.general && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.general }),
    successMessage && /* @__PURE__ */ jsx(SuccessMessageForm, { successMessage }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ",
        children: "Register Vehicle"
      }
    ) })
  ] });
};

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Register Vehicle - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto py-8"> <div class="bg-white shadow-lg rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Register New Vehicle</h1> ${renderComponent($$result2, "RegisterVehicleForm", RegisterVehicleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/Vehicles/RegisterVehicleForm.tsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/register.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/register.astro";
const $$url = "/vehicles/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
