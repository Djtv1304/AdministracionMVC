/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CdaQEI4y.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DPIWGXic.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const vehicles = [
    {
      id: 1,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      batteryStatus: 85,
      mileage: 15e3,
      lastCharged: "2h ago",
      range: 320
    },
    {
      id: 2,
      make: "Chevrolet",
      model: "Bolt EV",
      year: 2022,
      batteryStatus: 62,
      mileage: 28500,
      lastCharged: "5h ago",
      range: 240
    }
  ];
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "My Vehicles - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <div class="flex justify-between items-center"> <h1 class="text-2xl font-semibold text-gray-900">My Vehicles</h1> <a href="/vehicles/register" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus", "class": "h-5 w-5 mr-2" })}
Add Vehicle
</a> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${vehicles.map((vehicle) => renderTemplate`<div class="bg-white rounded-lg shadow-sm p-6"> <div class="flex justify-between items-start"> <div> <h3 class="text-lg font-medium text-gray-900"> ${vehicle.make} ${vehicle.model} </h3> <p class="text-sm text-gray-500">${vehicle.year}</p> </div> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${vehicle.batteryStatus > 80 ? "bg-green-100 text-green-800" : vehicle.batteryStatus > 20 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, "class")}> ${vehicle.batteryStatus}% Battery
</span> </div> <div class="mt-4 grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500">Mileage</p> <p class="mt-1 text-lg font-medium text-gray-900">${vehicle.mileage} km</p> </div> <div> <p class="text-sm text-gray-500">Range</p> <p class="mt-1 text-lg font-medium text-gray-900">${vehicle.range} km</p> </div> <div> <p class="text-sm text-gray-500">Last Charged</p> <p class="mt-1 text-lg font-medium text-gray-900">${vehicle.lastCharged}</p> </div> </div> <div class="mt-6 flex space-x-3"> <button class="flex-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
View Details
</button> <button class="flex-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
Schedule Service
</button> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/index.astro";
const $$url = "/vehicles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };