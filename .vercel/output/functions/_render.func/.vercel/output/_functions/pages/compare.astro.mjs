/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DDnACvc8.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_Brw1XkI_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const vehicles = [
    { value: "tesla-3", label: "Tesla Model 3" },
    { value: "tesla-y", label: "Tesla Model Y" },
    { value: "chevy-bolt", label: "Chevrolet Bolt EV" },
    { value: "ford-mach-e", label: "Ford Mustang Mach-E" }
  ];
  const comparisonMetrics = [
    { name: "Range", vehicle1: "358 km", vehicle2: "417 km" },
    { name: "Battery Capacity", vehicle1: "82 kWh", vehicle2: "88 kWh" },
    { name: "Charging Speed", vehicle1: "250 kW", vehicle2: "150 kW" },
    { name: "Price", vehicle1: "$40,240", vehicle2: "$45,990" },
    { name: "0-60 mph", vehicle1: "5.8s", vehicle2: "4.8s" },
    { name: "Top Speed", vehicle1: "225 km/h", vehicle2: "233 km/h" }
  ];
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Compare EVs - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Compare Electric Vehicles</h1> <div class="bg-white shadow-sm rounded-lg p-6"> <div class="grid grid-cols-2 gap-8"> <div> <label for="vehicle1" class="block text-sm font-medium text-gray-700">First Vehicle</label> <select id="vehicle1" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">Select a vehicle</option> ${vehicles.map((vehicle) => renderTemplate`<option${addAttribute(vehicle.value, "value")}>${vehicle.label}</option>`)} </select> </div> <div> <label for="vehicle2" class="block text-sm font-medium text-gray-700">Second Vehicle</label> <select id="vehicle2" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">Select a vehicle</option> ${vehicles.map((vehicle) => renderTemplate`<option${addAttribute(vehicle.value, "value")}>${vehicle.label}</option>`)} </select> </div> </div> <div class="mt-8"> <table class="min-w-full divide-y divide-gray-200"> <thead> <tr> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Feature
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Vehicle 1
</th> <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Vehicle 2
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${comparisonMetrics.map((metric) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> ${metric.name} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${metric.vehicle1} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${metric.vehicle2} </td> </tr>`)} </tbody> </table> </div> </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/compare/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/compare/index.astro";
const $$url = "/compare";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
