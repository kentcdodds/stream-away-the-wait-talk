import {
  require_deposit
} from "/build/_shared/chunk-ZLJLGACM.js";
import {
  require_invoice
} from "/build/_shared/chunk-RQ5RL6DI.js";
import {
  currencyFormatter,
  parseDate
} from "/build/_shared/chunk-KXSTZPLY.js";
import {
  ErrorFallback,
  LabelText,
  inputClasses,
  submitButtonClasses
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Link,
  useCatch,
  useFetcher,
  useLoaderData,
  useLocation,
  useParams
} from "/build/_shared/chunk-2S5TFWLC.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app/sales/invoices/$invoiceId.tsx?browser
init_react();

// app/routes/__app/sales/invoices/$invoiceId.tsx
init_react();
var import_invoice = __toESM(require_invoice());
var import_session = __toESM(require_session());
var import_deposit = __toESM(require_deposit());
var import_react2 = __toESM(require_react());
function validateAmount(amount) {
  if (amount <= 0)
    return "Must be greater than 0";
  if (Number(amount.toFixed(2)) !== amount) {
    return "Must only have two decimal places";
  }
  return null;
}
function validateDepositDate(date) {
  if (Number.isNaN(date.getTime())) {
    return "Please enter a valid date";
  }
  return null;
}
var lineItemClassName = "flex justify-between border-t border-gray-100 py-4 text-[14px] leading-[24px]";
function InvoiceRoute() {
  const data = useLoaderData();
  const location = useLocation();
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10",
    key: location.key
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `../../customers/${data.customerId}`,
    className: "text-[length:14px] font-bold leading-6 text-blue-600 underline"
  }, data.customerName), /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:32px] font-bold leading-[40px]"
  }, currencyFormatter.format(data.totalAmount)), /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("span", {
    className: data.dueStatus === "paid" ? "text-green-brand" : data.dueStatus === "overdue" ? "text-red-brand" : ""
  }, data.dueDisplay), ` \u2022 Invoiced ${data.invoiceDateDisplay}`), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), data.lineItems.map((item) => /* @__PURE__ */ React.createElement(LineItemDisplay, {
    key: item.id,
    description: item.description,
    unitPrice: item.unitPrice,
    quantity: item.quantity
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${lineItemClassName} font-bold`
  }, /* @__PURE__ */ React.createElement("div", null, "Net Total"), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(data.totalAmount))), /* @__PURE__ */ React.createElement("div", {
    className: "h-8"
  }), /* @__PURE__ */ React.createElement(Deposits, null));
}
function Deposits() {
  var _a;
  const data = useLoaderData();
  const newDepositFetcher = useFetcher();
  const formRef = (0, import_react2.useRef)(null);
  const deposits = [...data.deposits];
  if (newDepositFetcher.submission) {
    const amount = Number(newDepositFetcher.submission.formData.get("amount"));
    const depositDateVal = newDepositFetcher.submission.formData.get("depositDate");
    const depositDate = typeof depositDateVal === "string" ? parseDate(depositDateVal) : null;
    if (!validateAmount(amount) && depositDate && !validateDepositDate(depositDate)) {
      deposits.push({
        id: "new",
        amount,
        depositDateFormatted: depositDate.toLocaleDateString()
      });
    }
  }
  const errors = (_a = newDepositFetcher.data) == null ? void 0 : _a.errors;
  (0, import_react2.useEffect)(() => {
    var _a2, _b, _c;
    if (!formRef.current)
      return;
    if (newDepositFetcher.type !== "done")
      return;
    const formEl = formRef.current;
    if (errors == null ? void 0 : errors.amount) {
      (_a2 = formEl.elements.amount) == null ? void 0 : _a2.focus();
    } else if (errors == null ? void 0 : errors.depositDate) {
      (_b = formEl.elements.depositDate) == null ? void 0 : _b.focus();
    } else if (document.activeElement === formEl.elements.intent) {
      formEl.reset();
      (_c = formEl.elements.amount) == null ? void 0 : _c.focus();
    }
  }, [newDepositFetcher.type, errors]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold leading-8"
  }, "Deposits"), deposits.length > 0 ? deposits.map((deposit) => /* @__PURE__ */ React.createElement("div", {
    key: deposit.id,
    className: lineItemClassName
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `../../deposits/${deposit.id}`,
    className: "text-blue-600 underline"
  }, deposit.depositDateFormatted), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(deposit.amount)))) : /* @__PURE__ */ React.createElement("div", null, "None yet"), /* @__PURE__ */ React.createElement(newDepositFetcher.Form, {
    method: "post",
    className: "grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2",
    ref: formRef,
    noValidate: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-[100px]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "depositAmount"
  }, "Amount")), (errors == null ? void 0 : errors.amount) ? /* @__PURE__ */ React.createElement("em", {
    id: "amount-error",
    className: "text-d-p-xs text-red-600"
  }, errors.amount) : null), /* @__PURE__ */ React.createElement("input", {
    id: "depositAmount",
    name: "amount",
    type: "number",
    className: inputClasses,
    min: "0.01",
    step: "any",
    required: true,
    "aria-invalid": Boolean(errors == null ? void 0 : errors.amount) || void 0,
    "aria-errormessage": (errors == null ? void 0 : errors.amount) ? "amount-error" : void 0
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "depositDate"
  }, "Date")), (errors == null ? void 0 : errors.depositDate) ? /* @__PURE__ */ React.createElement("em", {
    id: "depositDate-error",
    className: "text-d-p-xs text-red-600"
  }, errors.depositDate) : null), /* @__PURE__ */ React.createElement("input", {
    id: "depositDate",
    name: "depositDate",
    type: "date",
    className: `${inputClasses} h-[34px]`,
    required: true,
    "aria-invalid": Boolean(errors == null ? void 0 : errors.depositDate) || void 0,
    "aria-errormessage": (errors == null ? void 0 : errors.depositDate) ? "depositDate-error" : void 0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-4 lg:col-span-2 lg:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "depositNote"
  }, "Note")), /* @__PURE__ */ React.createElement("input", {
    id: "depositNote",
    name: "note",
    type: "text",
    className: inputClasses
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: submitButtonClasses,
    name: "intent",
    value: "create-deposit"
  }, "Create")))));
}
function LineItemDisplay({
  description,
  quantity,
  unitPrice
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: lineItemClassName
  }, /* @__PURE__ */ React.createElement("div", null, description), quantity === 1 ? null : /* @__PURE__ */ React.createElement("div", {
    className: "text-[10px]"
  }, "(", quantity, "x)"), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(unitPrice)));
}
function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "p-12 text-red-500"
    }, 'No invoice found with the ID of "', params.invoiceId, '"');
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(ErrorFallback, null);
}
export {
  CatchBoundary,
  ErrorBoundary,
  InvoiceRoute as default
};
//# sourceMappingURL=/build/routes/__app/sales/invoices/$invoiceId-O47433B3.js.map
