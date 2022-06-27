import {
  require_deposit
} from "/build/_shared/chunk-ZLJLGACM.js";
import {
  currencyFormatter
} from "/build/_shared/chunk-KXSTZPLY.js";
import {
  CevronDownIcon,
  clsx_m_default
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Link,
  useLoaderData,
  useOutlet,
  useParams
} from "/build/_shared/chunk-4XMSUDTI.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/deposits.tsx?browser
init_react();

// app/routes/__app/sales/deposits.tsx
init_react();
var React = __toESM(require_react());
var import_deposit = __toESM(require_deposit());
var import_session = __toESM(require_session());
function Deposits() {
  const data = useLoaderData();
  const outlet = useOutlet();
  const { depositId } = useParams();
  const depositNotFound = depositId && data.deposits.every((d) => d.id !== depositId);
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden rounded-lg border border-gray-200"
  }, depositNotFound ? /* @__PURE__ */ React.createElement("div", {
    className: "p-12 text-red-500"
  }, 'No deposit found with the ID of "', depositId, '"') : null, /* @__PURE__ */ React.createElement("table", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "border-b-2 border-gray-200"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }), /* @__PURE__ */ React.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Date"), /* @__PURE__ */ React.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Invoice"), /* @__PURE__ */ React.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Customer"), /* @__PURE__ */ React.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", {
    className: "max-h-[100px]"
  }, data.deposits.map((d) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: d.id
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: d.id === depositId ? "." : d.id,
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement(CevronDownIcon, {
    className: clsx_m_default({
      "-rotate-90": d.id === depositId
    })
  }))), /* @__PURE__ */ React.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, d.depositDateFormatted), /* @__PURE__ */ React.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "text-blue-600 underline",
    to: `../invoices/${d.invoice.id}`
  }, d.invoice.number)), /* @__PURE__ */ React.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "text-blue-600 underline",
    to: `../customers/${d.invoice.customer.id}`
  }, d.invoice.customer.name)), /* @__PURE__ */ React.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, currencyFormatter.format(d.amount))), d.id === depositId ? /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 5
  }, outlet)) : null)))));
}
export {
  Deposits as default
};
//# sourceMappingURL=/build/routes/__app/sales/deposits-CM6WUO6H.js.map
