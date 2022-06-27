import {
  require_customer
} from "/build/_shared/chunk-PKB56IJA.js";
import {
  FilePlusIcon
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-M2LPTM5C.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/customers.tsx?browser
init_react();

// app/routes/__app/sales/customers.tsx
init_react();
var import_session = __toESM(require_session());
var import_customer = __toESM(require_customer());
function Customers() {
  const { customers } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 border-r border-gray-100"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "new",
    prefetch: "intent",
    className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex gap-1"
  }, /* @__PURE__ */ React.createElement(FilePlusIcon, null), " ", /* @__PURE__ */ React.createElement("span", null, "Create new customer"))), /* @__PURE__ */ React.createElement("div", {
    className: "max-h-96 overflow-y-scroll"
  }, customers.map((customer) => /* @__PURE__ */ React.createElement(NavLink, {
    key: customer.id,
    to: customer.id,
    prefetch: "intent",
    className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:14px] font-bold leading-6"
  }, /* @__PURE__ */ React.createElement("div", null, customer.name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400"
  }, /* @__PURE__ */ React.createElement("div", null, customer.email)))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-1/2 flex-col justify-between"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement("small", {
    className: "p-2 text-center"
  }, "Note: this is arbitrarily slow to demonstrate pending UI.")));
}
export {
  Customers as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers-IWPKND4N.js.map
