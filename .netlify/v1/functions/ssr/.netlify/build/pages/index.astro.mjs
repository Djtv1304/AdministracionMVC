/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$PublicLayout } from '../chunks/PublicLayout_D8BrMvXa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": "EV Manager - Smart Electric Vehicle Management" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <!-- Hero Section --> <div class="relative isolate overflow-hidden"> <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40"> <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"> <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
Manage Your EV Fleet Smarter
</h1> <p class="mt-6 text-lg leading-8 text-gray-600">
Transform your electric vehicle experience with our comprehensive management system.
            Monitor performance, optimize charging, and make informed decisions about your EV fleet.
</p> <div class="mt-10 flex items-center gap-x-6"> <a href="/register" class="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
Get started
</a> <a href="#features" class="text-sm font-semibold leading-6 text-gray-900">
Learn more <span aria-hidden="true">→</span> </a> </div> </div> </div> </div> <!-- Features Section --> <div id="features" class="py-24 sm:py-32"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:text-center"> <h2 class="text-base font-semibold leading-7 text-primary-600">
Comprehensive Management
</h2> <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
Everything you need to manage your EVs
</p> </div> <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"> <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"> <div class="flex flex-col"> <dt class="font-semibold leading-7 text-gray-900">
Vehicle Registration & Management
</dt> <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"> <p class="flex-auto">
Easily register and manage your entire EV fleet in one place. Track maintenance,
                  charging schedules, and performance metrics.
</p> </dd> </div> <div class="flex flex-col"> <dt class="font-semibold leading-7 text-gray-900">
Battery Performance Analytics
</dt> <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"> <p class="flex-auto">
Monitor battery health, predict range, and optimize charging patterns based on your
                  usage data.
</p> </dd> </div> <div class="flex flex-col"> <dt class="font-semibold leading-7 text-gray-900">
Smart Recommendations
</dt> <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"> <p class="flex-auto">
Get personalized EV recommendations based on your driving patterns, preferences,
                  and budget.
</p> </dd> </div> </dl> </div> </div> </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
