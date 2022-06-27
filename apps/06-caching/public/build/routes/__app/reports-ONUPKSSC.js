import {
  inputClasses,
  submitButtonClasses
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Form
} from "/build/_shared/chunk-EPAK3PKJ.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/reports.tsx?browser
init_react();

// app/routes/__app/reports.tsx
init_react();
var import_session = __toESM(require_session());
function ReportsRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full p-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-display text-d-h3 text-black"
  }, "Reports"), /* @__PURE__ */ React.createElement("div", {
    className: "h-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium"
  }, /* @__PURE__ */ React.createElement(Form, {
    className: "margin-auto flex justify-center gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "startDate"
  }, "Start Date"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "startDate",
    name: "startDate",
    className: inputClasses
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "endDate"
  }, "End Date"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "endDate",
    name: "endDate",
    className: inputClasses
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: submitButtonClasses
  }, "Submit")))));
}
export {
  ReportsRoute as default
};
//# sourceMappingURL=/build/routes/__app/reports-ONUPKSSC.js.map
