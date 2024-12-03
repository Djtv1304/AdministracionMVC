/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DorM3o25.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "Dashboard - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Vehicle Summary Card --> <div class="bg-white p-6 rounded-lg shadow-sm"> <h3 class="text-lg font-medium text-gray-900">Your Vehicles</h3> <p class="mt-2 text-3xl font-semibold text-primary-600">2</p> <p class="mt-1 text-sm text-gray-500">Active vehicles in your fleet</p> </div> <!-- Battery Health Card --> <div class="bg-white p-6 rounded-lg shadow-sm"> <h3 class="text-lg font-medium text-gray-900">Average Battery Health</h3> <p class="mt-2 text-3xl font-semibold text-green-600">92%</p> <p class="mt-1 text-sm text-gray-500">Across all vehicles</p> </div> <!-- Next Service Card --> <div class="bg-white p-6 rounded-lg shadow-sm"> <h3 class="text-lg font-medium text-gray-900">Next Service</h3> <p class="mt-2 text-3xl font-semibold text-primary-600">15</p> <p class="mt-1 text-sm text-gray-500">Days until next scheduled service</p> </div> </div> <!-- Recent Activity --> <div class="bg-white p-6 rounded-lg shadow-sm"> <h3 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3> <div class="space-y-4"> <div class="flex items-center justify-between"> <div> <p class="text-sm font-medium text-gray-900">Battery Check Completed</p> <p class="text-sm text-gray-500">Tesla Model 3</p> </div> <p class="text-sm text-gray-500">2 hours ago</p> </div> <div class="flex items-center justify-between"> <div> <p class="text-sm font-medium text-gray-900">Charging Session</p> <p class="text-sm text-gray-500">Chevrolet Bolt</p> </div> <p class="text-sm text-gray-500">5 hours ago</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
