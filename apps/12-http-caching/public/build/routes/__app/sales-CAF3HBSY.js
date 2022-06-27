import {
  require_invoice
} from "/build/_shared/chunk-RQ5RL6DI.js";
import {
  require_customer
} from "/build/_shared/chunk-PKB56IJA.js";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-ZAQHV6OK.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/12-http-caching/app/routes/__app/sales.tsx?browser
init_react();

// app/routes/__app/sales.tsx
init_react();
var import_customer = __toESM(require_customer());
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
var linkClassName = ({ isActive }) => isActive ? "font-bold text-black" : "";
function SalesRoute() {
  const data = useLoaderData();
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === "routes/__app/sales/index");
  const invoiceMatches = matches.some((m) => m.id === "routes/__app/sales/invoices");
  const customerMatches = matches.some((m) => m.id === "routes/__app/sales/customers");
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full p-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-display text-d-h3 text-black"
  }, "Sales"), /* @__PURE__ */ React.createElement("div", {
    className: "h-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium text-gray-400"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: ".",
    className: linkClassName({ isActive: indexMatches })
  }, "Overview"), /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "subscriptions",
    className: linkClassName
  }, "Subscriptions"), /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: data.firstInvoiceId ? `invoices/${data.firstInvoiceId}` : "invoices",
    className: linkClassName({ isActive: invoiceMatches })
  }, "Invoices"), /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: data.firstCustomerId ? `customers/${data.firstCustomerId}` : "Customers",
    className: linkClassName({ isActive: customerMatches })
  }, "Customers"), /* @__PURE__ */ React.createElement(NavLink, {
    prefetch: "intent",
    to: "deposits",
    className: linkClassName
  }, "Deposits")), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  SalesRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales-CAF3HBSY.js.map
