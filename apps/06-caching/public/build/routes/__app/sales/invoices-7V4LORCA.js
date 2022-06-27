import {
  require_invoice
} from "/build/_shared/chunk-RQ5RL6DI.js";
import {
  currencyFormatter
} from "/build/_shared/chunk-KXSTZPLY.js";
import {
  FilePlusIcon,
  LabelText
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

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/invoices.tsx?browser
init_react();

// app/routes/__app/sales/invoices.tsx
init_react();
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
function InvoicesRoute() {
  const data = useLoaderData();
  const hundo = data.dueSoonAmount + data.overdueAmount;
  const dueSoonPercent = Math.floor(data.dueSoonAmount / hundo * 100);
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between gap-4"
  }, /* @__PURE__ */ React.createElement(InvoicesInfo, {
    label: "Overdue",
    amount: data.overdueAmount
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-4 flex-1 overflow-hidden rounded-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 bg-yellow-brand"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-green-brand",
    style: { width: `${dueSoonPercent}%` }
  })), /* @__PURE__ */ React.createElement(InvoicesInfo, {
    label: "Due Soon",
    amount: data.dueSoonAmount,
    right: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement(LabelText, null, "Invoice List"), /* @__PURE__ */ React.createElement("div", {
    className: "h-2"
  }), /* @__PURE__ */ React.createElement(InvoiceList, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function InvoicesInfo({
  label,
  amount,
  right
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: right ? "text-right" : ""
  }, /* @__PURE__ */ React.createElement(LabelText, null, label), /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:18px] text-black"
  }, currencyFormatter.format(amount)));
}
function InvoiceList({ children }) {
  const { invoiceListItems } = useLoaderData();
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
  }, /* @__PURE__ */ React.createElement(FilePlusIcon, null), " ", /* @__PURE__ */ React.createElement("span", null, "Create new invoice"))), /* @__PURE__ */ React.createElement("div", {
    className: "max-h-96 overflow-y-scroll"
  }, invoiceListItems.map((invoice) => /* @__PURE__ */ React.createElement(NavLink, {
    key: invoice.id,
    to: invoice.id,
    prefetch: "intent",
    className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:14px] font-bold leading-6"
  }, /* @__PURE__ */ React.createElement("div", null, invoice.name), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(invoice.totalAmount))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400"
  }, /* @__PURE__ */ React.createElement("div", null, invoice.number), /* @__PURE__ */ React.createElement("div", {
    className: "uppercase " + (invoice.dueStatus === "paid" ? "text-green-brand" : invoice.dueStatus === "overdue" ? "text-red-brand" : "")
  }, invoice.dueStatusDisplay)))))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2"
  }, children));
}
export {
  InvoicesRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/invoices-7V4LORCA.js.map
