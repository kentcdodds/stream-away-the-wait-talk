import {
  currencyFormatter
} from "/build/_shared/chunk-KXSTZPLY.js";
import {
  require_customer
} from "/build/_shared/chunk-PKB56IJA.js";
import {
  ErrorFallback
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Link,
  useCatch,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-7G3E77BD.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/customers/$customerId.tsx?browser
init_react();

// app/routes/__app/sales/customers/$customerId.tsx
init_react();
var import_customer = __toESM(require_customer());
var import_session = __toESM(require_session());
var lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";
function CustomerRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:14px] font-bold leading-6"
  }, data.customerInfo.email), /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:32px] font-bold leading-[40px]"
  }, data.customerInfo.name), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-m-h3 font-bold leading-8"
  }, "Invoices"), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement("table", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("tbody", null, data.invoiceDetails.map((details) => /* @__PURE__ */ React.createElement("tr", {
    key: details.id,
    className: lineItemClassName
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    className: "text-blue-600 underline",
    to: `../../invoices/${details.id}`
  }, details.number)), /* @__PURE__ */ React.createElement("td", {
    className: "text-center uppercase " + (details.dueStatus === "paid" ? "text-green-brand" : details.dueStatus === "overdue" ? "text-red-brand" : "")
  }, details.dueStatusDisplay), /* @__PURE__ */ React.createElement("td", {
    className: "text-right"
  }, currencyFormatter.format(details.totalAmount)))))));
}
function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "relative h-full"
    }, /* @__PURE__ */ React.createElement(ErrorFallback, {
      message: `No customer found with the ID of "${params.customerId}"`
    }));
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
export {
  CatchBoundary,
  CustomerRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/customers/$customerId-GRGJW5K6.js.map
