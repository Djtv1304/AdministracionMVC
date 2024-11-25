/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DDnACvc8.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../../chunks/ProtectedLayout_Brw1XkI_.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../../renderers.mjs';

const BatteryCalculator = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Distance Traveled (km)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            title: "Distance Traveled (km)",
            placeholder: "Insert distance traveled in kilometers",
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
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
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
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
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Performance Metrics" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Enter values above to calculate efficiency" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-64 bg-gray-50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Battery level visualization will appear here" }) })
  ] });
};

const $$Calculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Battery Calculator - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8"> <div class="bg-white shadow-sm rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Battery Performance Calculator</h1> ${renderComponent($$result2, "BatteryCalculator", BatteryCalculator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/BatteryCalculator", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/battery/calculator.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/battery/calculator.astro";
const $$url = "/battery/calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
