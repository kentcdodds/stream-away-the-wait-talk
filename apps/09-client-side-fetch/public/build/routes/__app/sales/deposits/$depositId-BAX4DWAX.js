import {
  require_deposit
} from "/build/_shared/chunk-ZLJLGACM.js";
import {
  TrashIcon
} from "/build/_shared/chunk-HLO6UIGL.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-Z5ZUHZN2.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/09-client-side-fetch/app/routes/__app/sales/deposits/$depositId.tsx?browser
init_react();

// app/routes/__app/sales/deposits/$depositId.tsx
init_react();
var import_deposit = __toESM(require_deposit());
var import_session = __toESM(require_session());
function DepositRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, data.depositNote ? /* @__PURE__ */ React.createElement("span", null, "Note:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "pl-1"
  }, data.depositNote)) : /* @__PURE__ */ React.createElement("span", {
    className: "text-m-p-sm uppercase text-gray-500 md:text-d-p-sm"
  }, "No note"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    title: "Delete deposit",
    name: "intent",
    value: "delete"
  }, /* @__PURE__ */ React.createElement(TrashIcon, null))))));
}
function CatchBoundary() {
  return null;
}
export {
  CatchBoundary,
  DepositRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/deposits/$depositId-BAX4DWAX.js.map
