/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { $ as $$ProtectedLayout } from '../chunks/ProtectedLayout_DorM3o25.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const UserRoutineAnalysis = () => {
  const [routines, setRoutines] = useState([]);
  const [filteredRoutines, setFilteredRoutines] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const fetchRoutines = async () => {
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
      const response = await fetch("https://coreweb-springboot-backend.onrender.com/rutinaUsuario/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.trim()}`
        }
      });
      if (!response.ok) {
        console.error("Error fetching routines:", response);
        throw new Error("Error fetching routines");
      }
      const data = await response.json();
      setRoutines(data);
      setFilteredRoutines(data);
    } catch (error) {
      console.error("Error fetching routines:", error);
    }
  };
  useEffect(() => {
    fetchRoutines();
  }, []);
  useEffect(() => {
    if (startDate && endDate) {
      const filtered = routines.filter((routine) => {
        const routineDate = new Date(routine.fechaRutina);
        return routineDate >= new Date(startDate) && routineDate <= new Date(endDate);
      });
      setFilteredRoutines(filtered);
    } else {
      setFilteredRoutines(routines);
    }
  }, [startDate, endDate, routines]);
  const calculateAverageKilometraje = () => {
    if (filteredRoutines.length === 0) return 0;
    const totalKilometraje = filteredRoutines.reduce(
      (acc, routine) => acc + parseFloat(routine.kilometrajeRecorrido),
      0
    );
    return (totalKilometraje / filteredRoutines.length).toFixed(2);
  };
  const calculateAverageKilometrajeByDay = () => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    const averages = {};
    daysOfWeek.forEach((day) => {
      const routinesForDay = filteredRoutines.filter(
        (routine) => routine.diaSemana === day
      );
      if (routinesForDay.length > 0) {
        const totalKilometraje = routinesForDay.reduce(
          (acc, routine) => acc + parseFloat(routine.kilometrajeRecorrido),
          0
        );
        averages[day] = parseFloat(
          (totalKilometraje / routinesForDay.length).toFixed(2)
        );
      } else {
        averages[day] = 0;
      }
    });
    return averages;
  };
  const averageKilometrajeByDay = calculateAverageKilometrajeByDay();
  const sortedFilteredRoutines = [...filteredRoutines].sort(
    (a, b) => parseFloat(b.kilometrajeRecorrido) - parseFloat(a.kilometrajeRecorrido)
  );
  const sortedAverageKilometrajeByDay = Object.entries(averageKilometrajeByDay).sort(
    ([, averageA], [, averageB]) => averageB - averageA
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Start Date" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            title: "Start Date",
            type: "date",
            value: startDate,
            onChange: (e) => setStartDate(e.target.value),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "End Date" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            title: "End Date",
            type: "date",
            value: endDate,
            onChange: (e) => setEndDate(e.target.value),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsxs("table", { className: "min-w-full min-h-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#0891b2] hover:bg-cyan-500", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
              children: "Date"
            }
          ),
          /* @__PURE__ */ jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
              children: "Day of the Week"
            }
          ),
          /* @__PURE__ */ jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
              children: "Activity"
            }
          ),
          /* @__PURE__ */ jsx(
            "th",
            {
              scope: "col",
              className: "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
              children: "Kilometraje Recorrido (km)"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "bg-white divide-y divide-gray-200", children: [
          sortedFilteredRoutines.map((routine, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: new Date(routine.fechaRutina).toLocaleDateString() }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: routine.diaSemana }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: routine.actividad }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: routine.kilometrajeRecorrido })
          ] }, index)),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx(
              "td",
              {
                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                colSpan: 3,
                children: "Average Kilometraje per Day"
              }
            ),
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: [
              calculateAverageKilometraje(),
              " km"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 bg-white shadow-sm rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4 border-b-2 border-gray-300 pb-2", children: "Average Kilometraje by Day of the Week" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: sortedAverageKilometrajeByDay.map(([day, average], index) => {
          const minKilometraje = Math.min(
            ...Object.values(averageKilometrajeByDay)
          );
          const isMinKilometraje = average === minKilometraje;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `p-4 rounded-md shadow-sm transition-colors ${isMinKilometraje ? "bg-[#16a34a] text-white hover:bg-green-500" : "bg-[#0891b2] hover:bg-cyan-500"}`,
              children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: day }),
                /* @__PURE__ */ jsxs("p", { className: "text-white", children: [
                  average,
                  " km"
                ] })
              ]
            },
            index
          );
        }) })
      ] })
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "User Routine Analysis - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8"> <div class="bg-white shadow-sm rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">User Routine Analysis</h1> ${renderComponent($$result2, "UserRoutineAnalysis", UserRoutineAnalysis, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/AnalisisRutina/UserRoutineAnalysis", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/routine-analysis/index.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/routine-analysis/index.astro";
const $$url = "/routine-analysis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
