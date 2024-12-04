/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CSWU1b9h.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { a as actions } from '../../chunks/_astro_actions_Dmk27Yyj.mjs';
import { useState, useEffect } from 'react';
import { E as ErrorMessageForm } from '../../chunks/ErrorMessageForm_ZrxVsV2Y.mjs';
import { $ as $$ProtectedLayout } from '../../chunks/ProtectedLayout_DorM3o25.mjs';
export { renderers } from '../../renderers.mjs';

const UserRoutineForm = () => {
  const [routines, setRoutines] = useState([]);
  const [completionMessage, setCompletionMessage] = useState(
    null
  );
  const [formData, setFormData] = useState({
    fechaRutina: "",
    diaSemana: "",
    actividad: "",
    kilometrajeRecorrido: ""
  });
  const [errors, setErrors] = useState({});
  const fetchRoutines = async () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };
    const token = getCookie("jwtToken");
    console.log("El token es ", token);
    try {
      const response = await fetch("https://coreweb-springboot-backend.onrender.com/rutinaUsuario/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.trim()}`
        }
      });
      if (!response.ok) {
        console.error("Error fetching all routines:", response);
        throw new Error("Error fetching all routines");
      }
      const data = await response.json();
      setRoutines(data);
    } catch (error) {
      console.error("Error fetching all routines:", error);
    }
  };
  useEffect(() => {
    fetchRoutines();
  }, []);
  useEffect(() => {
    if (routines.length === 6) {
      alert(
        "The routine of the week is complete, this model will be used to make calculations and recommendations for electric vehicles."
      );
    }
  }, [routines]);
  useEffect(() => {
    if (routines.length === 7) {
      setCompletionMessage(
        "The routine of the week is complete, this model will be used to make calculations and recommendations for electric vehicles."
      );
    } else {
      setCompletionMessage(null);
    }
  }, [routines]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const formDataObj = new FormData(e.currentTarget);
    let result = await actions.userRoutine(formDataObj);
    if (result.data && typeof result.data === "object" && "success" in result.data) {
      result = result.data;
    }
    if (result.success !== void 0 && !result.success || result.error) {
      console.error(result.error);
      const errorMessages = {};
      if (result.error && "fields" in result.error) {
        if (result.error.fields.general) {
          errorMessages.general = result.error.fields.general;
        }
        Object.entries(result.error.fields).forEach(([key, value]) => {
          if (key !== "general") {
            errorMessages[key] = value;
          }
        });
      }
      if (result.error?.fields?.general) {
        errorMessages.general = result.error.fields.general;
      } else if (typeof result.error === "object") {
        const generalError = await result.error.fields.general;
        if (generalError) {
          errorMessages.general = generalError;
        }
      }
      if (result.data && typeof result.data === "object" && "error" in result.data && result.data.error && typeof result.data.error === "object" && "fields" in result.data.error) {
        Object.entries(
          result.data.error.fields
        ).forEach(([key, value]) => {
          errorMessages[key] = value;
        });
      }
      console.error(errorMessages);
      setErrors(errorMessages);
      return;
    }
    setFormData({
      fechaRutina: "",
      diaSemana: "",
      actividad: "",
      kilometrajeRecorrido: ""
    });
    fetchRoutines();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-full space-y-8 gap-6", children: [
    completionMessage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",
        role: "alert",
        children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: completionMessage })
      }
    ),
    /* @__PURE__ */ jsxs("form", { className: "space-y-6 w-3/5", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-md shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "fechaRutina",
              className: "block text-sm font-medium text-gray-700",
              children: "Routine Date"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "fechaRutina",
              name: "fechaRutina",
              type: "date",
              required: true,
              value: formData.fechaRutina,
              onChange: (e) => {
                handleChange(e);
                const date = new Date(e.target.value);
                const days = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ];
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  fechaRutina: e.target.value,
                  diaSemana: days[date.getUTCDay()]
                }));
              },
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            }
          ),
          errors.fechaRutina && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.fechaRutina })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "diaSemana",
              className: "block text-sm font-medium text-gray-700",
              children: "Day of the Week"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "diaSemana",
              name: "diaSemana",
              type: "text",
              readOnly: true,
              value: formData.diaSemana,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            }
          ),
          errors.diaSemana && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.diaSemana })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "actividad",
              className: "block text-sm font-medium text-gray-700",
              children: "Activity"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "actividad",
              name: "actividad",
              type: "text",
              required: true,
              value: formData.actividad,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm",
              placeholder: "Activity"
            }
          ),
          errors.actividad && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.actividad })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "kilometrajeRecorrido",
              className: "block text-sm font-medium text-gray-700",
              children: "Traveled Kilometers"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "kilometrajeRecorrido",
              name: "kilometrajeRecorrido",
              type: "text",
              required: true,
              value: formData.kilometrajeRecorrido,
              onChange: handleChange,
              className: "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm",
              placeholder: "Traveled Kilometers"
            }
          ),
          errors.kilometrajeRecorrido && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.kilometrajeRecorrido })
        ] })
      ] }),
      errors.general && /* @__PURE__ */ jsx(ErrorMessageForm, { errorMessage: errors.general }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: "Register Routine"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-lg overflow-auto", children: routines.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-500 px-60", children: "No routines registered." }) : /* @__PURE__ */ jsxs("table", { className: "min-w-full min-h-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-[#0891b2] hover:bg-cyan-500", children: /* @__PURE__ */ jsxs("tr", { children: [
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
            children: "Traveled Kilometers"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: routines.map((routine, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: routine.diaSemana }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: routine.actividad }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center", children: routine.kilometrajeRecorrido })
      ] }, index)) })
    ] }) })
  ] });
};

const $$RegisterRoutine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProtectedLayout", $$ProtectedLayout, { "title": "User Routine - EV Manager" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8"> <div class="bg-white shadow-sm rounded-lg p-6"> <h1 class="text-2xl font-semibold text-gray-900 mb-6">Register Your Routine</h1> <p class="text-gray-600 mb-6"> Please register your weekly routine to get the best month recommendations for your EV.</p> ${renderComponent($$result2, "UserRoutineForm", UserRoutineForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/RutinaUsuario/UserRoutineForm", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/recommendations/registerRoutine.astro", void 0);

const $$file = "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/recommendations/registerRoutine.astro";
const $$url = "/recommendations/registerRoutine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegisterRoutine,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
