import { jsx } from 'react/jsx-runtime';
import 'react';

const ErrorMessageForm = ({ errorMessage }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",
      role: "alert",
      children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: errorMessage })
    }
  );
};

export { ErrorMessageForm as E };
