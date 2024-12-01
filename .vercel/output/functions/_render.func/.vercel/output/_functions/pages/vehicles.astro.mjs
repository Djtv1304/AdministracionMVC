/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DRZ047Jk.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_C6kmevB6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
export { renderers } from '../renderers.mjs';

const DropDownButton = ({ titleDropDown, menuOptions }) => {
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(MenuButton, { className: "inline-flex w-full justify-center gap-x-1.5 rounded-md border-gray-300 shadow-sm px-4 py-2 bg-cyan-600 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none ring-1 ring-inset ring-gray-300", children: [
      titleDropDown,
      /* @__PURE__ */ jsx(RiArrowDropDownLine, { "aria-hidden": "true", className: "-mr-1 size-5 text-white" })
    ] }) }),
    /* @__PURE__ */ jsx(
      MenuItems,
      {
        transition: true,
        className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
        children: /* @__PURE__ */ jsx("div", { className: "py-1", children: menuOptions.map((option, index) => /* @__PURE__ */ jsx(MenuItem, { children: ({ focus }) => /* @__PURE__ */ jsx(
          "a",
          {
            href: option.url,
            className: `block px-4 py-2 text-sm text-gray-700 ${focus ? "bg-gray-100 text-gray-900 outline-none" : ""}`,
            children: option.name
          }
        ) }, index)) })
      }
    )
  ] });
};

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
  const dropDownButtonOptions = [
    {
      name: "New Vehicle",
      url: "/vehicles/register"
    },
    {
      name: "New Combustion Vehicle",
      url: "/vehicles/registerCombustion"
    }
  ];
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "My Vehicles - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="flex justify-between items-center"> <h1 class="text-2xl font-semibold text-gray-900">My Vehicles</h1> ${renderComponent($$result2, "DropdownButton", DropDownButton, { "titleDropDown": "Options", "menuOptions": dropDownButtonOptions, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Utils/Buttons/DropDownButton.tsx", "client:component-export": "default" })} </div> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${vehicles.map((vehicle) => renderTemplate`<div class="bg-white rounded-lg shadow-sm p-6"> <div class="flex justify-between items-start"> <div> <h3 class="text-lg font-medium text-gray-900"> ${vehicle.make} ${vehicle.model} </h3> <p class="text-sm text-gray-500">${vehicle.year}</p> </div> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${vehicle.batteryStatus > 80 ? "bg-green-100 text-green-800" : vehicle.batteryStatus > 20 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, "class")}> ${vehicle.batteryStatus}% Battery
</span> </div> <div class="mt-4 grid grid-cols-2 gap-4"> <div> <p class="text-sm text-gray-500">Mileage</p> <p class="mt-1 text-lg font-medium text-gray-900"> ${vehicle.mileage} km
</p> </div> <div> <p class="text-sm text-gray-500">Range</p> <p class="mt-1 text-lg font-medium text-gray-900"> ${vehicle.range} km
</p> </div> <div> <p class="text-sm text-gray-500">Last Charged</p> <p class="mt-1 text-lg font-medium text-gray-900"> ${vehicle.lastCharged} </p> </div> </div> <div class="mt-6 flex space-x-3"> <button class="flex-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
View Details
</button> <button class="flex-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
Schedule Service
</button> </div> </div>`)} </div> ` })}`;
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
