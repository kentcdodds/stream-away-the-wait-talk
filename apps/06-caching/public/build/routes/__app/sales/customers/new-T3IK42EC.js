import {
  require_customer
} from "/build/_shared/chunk-PKB56IJA.js";
import {
  LabelText,
  inputClasses,
  submitButtonClasses
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Form
} from "/build/_shared/chunk-M2LPTM5C.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/customers/new.tsx?browser
init_react();

// app/routes/__app/sales/customers/new.tsx
init_react();
var import_customer = __toESM(require_customer());
var import_session = __toESM(require_session());
function NewCustomer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 font-display"
  }, "New Customer"), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, /* @__PURE__ */ React.createElement(LabelText, null, "Name")), /* @__PURE__ */ React.createElement("input", {
    id: "name",
    name: "name",
    className: inputClasses,
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, /* @__PURE__ */ React.createElement(LabelText, null, "Email")), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    name: "email",
    className: inputClasses,
    type: "email"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "create",
    className: submitButtonClasses
  }, "Create Customer"))));
}
export {
  NewCustomer as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers/new-T3IK42EC.js.map
