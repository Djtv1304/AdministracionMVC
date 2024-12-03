/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DorM3o25.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const BatteryCalculator = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [performanceRecords, setPerformanceRecords] = useState([]);
  const [formData, setFormData] = useState({
    kilometraje: 0,
    bateriaInicial: 0,
    bateriaFinal: 0
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = {
      idVehiculo: selectedOption,
      fecha: (/* @__PURE__ */ new Date()).toISOString(),
      kilometraje: formData.kilometraje,
      bateriaInicial: formData.bateriaInicial,
      bateriaFinal: formData.bateriaFinal,
      rendimiento: 0
    };
    try {
      const response = await fetch(
        "http://localhost:8080/registroRendimiento/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(newRecord)
        }
      );
      if (!response.ok) {
        console.error("Error saving new record:", response);
        throw new Error("Error saving new record");
      }
      fetchPerformanceRecords();
    } catch (error) {
      console.error("Error saving new record:", error);
    }
  };
  const fetchPerformanceRecords = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/registroRendimiento/todosRegistrosVehiculo/${selectedOption}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
      if (!response.ok) {
        console.error("Error fetching performance records:", response);
        throw new Error("Error fetching performance records");
      }
      const data = await response.json();
      setPerformanceRecords(data);
    } catch (error) {
      console.error("Error fetching performance records:", error);
    }
  };
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop()?.split(";").shift();
        };
        const token = getCookie("jwtToken");
        if (!token) {
          throw new Error("No token found in cookies");
        }
        const response = await fetch(
          "http://localhost:8080/vehiculo/obtenerVehiculosPorUsuario",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token.trim()}`
            }
          }
        );
        if (!response.ok) {
          console.error("Error fetching options:", response);
          throw new Error("Error fetching options");
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, []);
  useEffect(() => {
    if (selectedOption) {
      fetchPerformanceRecords();
    }
  }, [selectedOption]);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Select Option" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          title: "Select Option",
          value: selectedOption,
          onChange: (e) => setSelectedOption(e.target.value),
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select an option" }),
            options.map((option) => /* @__PURE__ */ jsx("option", { value: option.idVehiculo, children: option.marca + " " + option.modelo }, option.idVehiculo))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Distance Traveled (km)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              title: "Distance Traveled (km)",
              placeholder: "Insert distance traveled in kilometers",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
              name: "kilometraje",
              value: formData.kilometraje,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Starting Battery Level (%)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              title: "Starting Battery Level (%)",
              placeholder: "Insert starting battery level in percentage",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
              name: "bateriaInicial",
              value: formData.bateriaInicial,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Ending Battery Level (%)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              title: "Ending Battery Level (%)",
              placeholder: "Insert ending battery level in percentage",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
              name: "bateriaFinal",
              value: formData.bateriaFinal,
              onChange: handleChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: "Save New Efficency Record"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Performance Metrics" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Enter values above to calculate efficiency" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-64 bg-gray-50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full min-h-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-[#0891b2] hover:bg-cyan-500", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
            children: "Register Date"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
            children: "Kilometers Traveled (km)"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
            children: "Initial Battery Level (%)"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
            children: "Final Battery Level (%)"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
            children: "Performance (km/kWh)"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: performanceRecords.map((record, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: new Date(record.fecha).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: record.kilometraje }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: record.bateriaInicial }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: record.bateriaFinal }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: record.rendimiento })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#16a34a] p-4 rounded-lg text-white", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Average Vehicle Performance" }),
      /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
        performanceRecords.length > 0 ? (performanceRecords.reduce(
          (acc, record) => acc + record.rendimiento,
          0
        ) / performanceRecords.length).toFixed(2) : "0.00 ",
        "km/kWh"
      ] })
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Battery Calculator - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8"> <div class="bg-white shadow-sm rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Battery Performance Calculator</h1> ${renderComponent($$result2, "BatteryCalculator", BatteryCalculator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/BatteryCalculator", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/battery/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/battery/index.astro";
const $$url = "/battery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
