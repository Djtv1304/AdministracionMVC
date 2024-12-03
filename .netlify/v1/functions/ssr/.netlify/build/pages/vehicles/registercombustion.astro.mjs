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

const RegisterCombustionVehicleForm = () => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    anio: "",
    clasificacion: "",
    color: "",
    consumoCombustible: 0,
    emisionesCO2: 0,
    costoCombustible: 0,
    capacidadTanque: 0,
    imageURL: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(null);
    const formDataObj = new FormData(e.currentTarget);
    const result = await actions.newCombustionVehicle(formDataObj);
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
      marca: "",
      modelo: "",
      anio: "",
      clasificacion: "",
      color: "",
      consumoCombustible: 0,
      emisionesCO2: 0,
      costoCombustible: 0,
      capacidadTanque: 0,
      imageURL: ""
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
            htmlFor: "marca",
            className: "block text-sm font-medium text-gray-700",
            children: "Make"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "marca",
            id: "marca",
            value: formData.marca,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.marca && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.marca })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "modelo",
            className: "block text-sm font-medium text-gray-700",
            children: "Model"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "modelo",
            id: "modelo",
            value: formData.modelo,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.modelo && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.modelo })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "anio",
            className: "block text-sm font-medium text-gray-700",
            children: "Model Year"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "anio",
            id: "anio",
            value: formData.anio,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.anio && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.anio })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "clasificacion",
            className: "block text-sm font-medium text-gray-700",
            children: "Vehicle Classification"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "clasificacion",
            name: "clasificacion",
            className: "mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg",
            value: formData.clasificacion,
            onChange: handleChange,
            children: [
              /* @__PURE__ */ jsx("option", { value: ``, children: "Please select a classification" }),
              /* @__PURE__ */ jsx("option", { value: `SUV`, children: "SUV" }),
              /* @__PURE__ */ jsx("option", { value: `Sedan`, children: "Sedan" }),
              /* @__PURE__ */ jsx("option", { value: `Truck`, children: "Truck" }),
              /* @__PURE__ */ jsx("option", { value: `Coupe`, children: "Coupe" }),
              /* @__PURE__ */ jsx("option", { value: `Convertible`, children: "Convertible" })
            ]
          }
        ),
        errors.clasificacion && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.clasificacion })
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
            value: formData.color,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.color && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.color })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "consumoCombustible",
            className: "block text-sm font-medium text-gray-700",
            children: "Fuel Consumption (L/km)"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "consumoCombustible",
            id: "consumoCombustible",
            value: formData.consumoCombustible,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.consumoCombustible && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.consumoCombustible })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "emisionesCO2",
            className: "block text-sm font-medium text-gray-700",
            children: "CO2 Emissions (g/km)"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "emisionesCO2",
            id: "emisionesCO2",
            value: formData.emisionesCO2,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.emisionesCO2 && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.emisionesCO2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "costoCombustible",
            className: "block text-sm font-medium text-gray-700",
            children: "Fuel Cost ($/L)"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "costoCombustible",
            id: "costoCombustible",
            value: formData.costoCombustible,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.costoCombustible && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.costoCombustible })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "capacidadTanque",
            className: "block text-sm font-medium text-gray-700",
            children: "Tank Capacity (L)"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "capacidadTanque",
            id: "capacidadTanque",
            value: formData.capacidadTanque,
            onChange: handleChange,
            className: "mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
          }
        ),
        errors.capacidadTanque && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.capacidadTanque })
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
      ] })
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

const $$RegisterCombustion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Register Combustion Vehicle - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto py-8"> <div class="bg-white shadow-lg rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Register New Combustion Vehicle</h1> ${renderComponent($$result2, "RegisterCombustionVehicleForm", RegisterCombustionVehicleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/Vehicles/RegisterCombustionVehicleForm.tsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/registerCombustion.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/registerCombustion.astro";
const $$url = "/vehicles/registerCombustion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegisterCombustion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
