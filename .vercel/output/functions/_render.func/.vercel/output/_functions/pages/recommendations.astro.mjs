/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CdaQEI4y.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DPIWGXic.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const recommendedVehicles = [
    {
      make: "Tesla",
      model: "Model 3",
      type: "Sedan",
      price: "$40,240",
      range: "358",
      image: "/tesla-model-3.jpg",
      matchScore: 95
    },
    {
      make: "Ford",
      model: "Mustang Mach-E",
      type: "SUV",
      price: "$45,990",
      range: "417",
      image: "/mach-e.jpg",
      matchScore: 88
    }
  ];
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Get Recommendations - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Find Your Perfect EV Match</h1> <div class="bg-white shadow-sm rounded-lg p-6 mb-8"> <h2 class="text-lg font-medium text-gray-900 mb-4">Your Preferences</h2> <form class="space-y-6"> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"> <div> <label for="weekly-mileage" class="block text-sm font-medium text-gray-700">
Weekly Mileage (km)
</label> <input type="number" id="weekly-mileage" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"> </div> <div> <label for="vehicle-type" class="block text-sm font-medium text-gray-700">
Preferred Vehicle Type
</label> <select id="vehicle-type" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">Select type</option> <option value="sedan">Sedan</option> <option value="suv">SUV</option> <option value="both">No Preference</option> </select> </div> <div> <label for="min-budget" class="block text-sm font-medium text-gray-700">
Minimum Budget
</label> <input type="number" id="min-budget" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"> </div> <div> <label for="max-budget" class="block text-sm font-medium text-gray-700">
Maximum Budget
</label> <input type="number" id="max-budget" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"> </div> </div> <div> <label class="block text-sm font-medium text-gray-700">Charging Availability</label> <div class="mt-2 space-y-2"> <div class="flex items-center"> <input id="home-charging" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"> <label for="home-charging" class="ml-2 text-sm text-gray-700">
Home Charging Available
</label> </div> <div class="flex items-center"> <input id="work-charging" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"> <label for="work-charging" class="ml-2 text-sm text-gray-700">
Workplace Charging Available
</label> </div> </div> </div> <div class="flex justify-end"> <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Get Recommendations
</button> </div> </form> </div> <div class="space-y-6"> <h2 class="text-lg font-medium text-gray-900">Recommended Vehicles</h2> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${recommendedVehicles.map((vehicle) => renderTemplate`<div class="bg-white rounded-lg shadow-sm overflow-hidden"> <div class="h-48 bg-gray-200"></div> <div class="p-6"> <div class="flex justify-between items-start"> <div> <h3 class="text-lg font-medium text-gray-900"> ${vehicle.make} ${vehicle.model} </h3> <p class="text-sm text-gray-500">${vehicle.type}</p> </div> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"> ${vehicle.matchScore}% Match
</span> </div> <div class="mt-4 grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500">Price</p> <p class="mt-1 text-lg font-medium text-gray-900">${vehicle.price}</p> </div> <div> <p class="text-sm text-gray-500">Range</p> <p class="mt-1 text-lg font-medium text-gray-900">${vehicle.range} km</p> </div> </div> <div class="mt-6"> <button class="w-full flex justify-center items-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md text-primary-600 hover:bg-cyan-100">
View Details
</button> </div> </div> </div>`)} </div> </div> </div> ` })}`;
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
