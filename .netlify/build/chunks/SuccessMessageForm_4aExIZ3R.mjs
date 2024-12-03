import { jsx } from 'react/jsx-runtime';
import 'react';

const SuccessMessageForm = ({ successMessage }) => {
  return /* @__PURE__ */ jsx("div", { className: "text-sm p-2 rounded-md bg-green-100 text-green-500", role: "alert", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: successMessage }) });
};

export { SuccessMessageForm as S };
