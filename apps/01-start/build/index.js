var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream");
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
var import_node = require("@remix-run/node");
var import_isbot = __toESM(require("isbot"));
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = false;
    const { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      [callbackName]() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html");
        resolve(new import_node.Response(body, {
          status: didError ? 500 : responseStatusCode,
          headers: responseHeaders
        }));
        pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError(error) {
        didError = true;
        console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  unstable_shouldReload: () => unstable_shouldReload
});
var import_node3 = require("@remix-run/node");
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");
var import_dialog = require("@reach/dialog");

// ../../node_modules/@reach/dialog/styles.css
var styles_default = "/build/_assets/styles-2JGN57QB.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node");
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client");
var prisma;
if (true) {
  prisma = new import_client.PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new import_client.PrismaClient();
  }
  prisma = global.__db__;
  prisma.$connect();
}

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }
  const isValid = await import_bcryptjs.default.compare(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }
  const _a = userWithPassword, { password: _password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: true
  }
});
var USER_SESSION_KEY = "userId";
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (userId === void 0)
    return null;
  return getUserById(userId);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(redirectTo && redirectTo !== "/" ? `/login?${searchParams}` : `/login`);
  }
  return userId;
}
async function requireUser(request) {
  const userId = await requireUserId(request);
  const user = await getUserById(userId);
  if (!user) {
    throw await logout(request);
  }
  return user;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request, redirectTo = "/") {
  const session = await getSession(request);
  return (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MASMVCIR.css";

// app/components.tsx
var import_clsx = __toESM(require("clsx"));
var inputClasses = "text-lg w-full rounded border border-gray-500 px-2 py-1";
var submitButtonClasses = "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400";
var dangerButtonClasses = "w-full rounded bg-red-600 py-2 px-4 text-white hover:bg-red-700 focus:bg-red-500";
function LabelText({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-[12px] font-medium uppercase leading-[24px] text-gray-400"
  }, children);
}
function FullFakebooksLogo({
  size,
  position
}) {
  const [logoSize, textSize] = {
    sm: [`h-4 w-4`, `text-d-p-sm`],
    lg: [`h-12 w-12`, `text-d-h2`]
  }[size];
  return /* @__PURE__ */ React.createElement("div", {
    className: `flex items-center ${position === "center" ? "justify-center" : ""} text-[color:#23BF1F]`
  }, /* @__PURE__ */ React.createElement(FakebooksLogo, {
    className: `relative top-[1px] ${logoSize}`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: `font-display ${textSize}`
  }, "Fakebooks"));
}
function FakebooksLogo({ className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "#23BF1F",
    fillRule: "evenodd",
    d: "M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}
function FilePlusIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24px",
    height: "24px",
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.25 19.25h-3.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2H14L18.25 9v2.25M17 14.75v4.5M19.25 17h-4.5"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25h-4.25V5"
  }));
}
function PlusIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24px",
    height: "24px",
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 5.75v12.5M18.25 12H5.75"
  }));
}
function MinusIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24px",
    height: "24px",
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18.25 12.25H5.75"
  }));
}
function CevronDownIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.25 10.75 12 14.25l-3.25-3.5"
  }));
}
function TrashIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "m5.75 7.75.841 9.673a2 2 0 0 0 1.993 1.827h5.832a2 2 0 0 0 1.993-1.827l.841-9.673H5.75ZM9.75 10.75v5.5M13.25 10.75v5.5M8.75 7.75v-1a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v1M4.75 7.75h13.5",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function LogoutIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m15.75 8.75 3.5 3.25-3.5 3.25M19 12h-8.25M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"
  }));
}
function UpRightArrowIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    fill: "none"
  }, props), /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.25 15.25v-8.5h-8.5M17 7 6.75 17.25"
  }));
}
function ErrorFallback({
  message = "There was a problem. Sorry."
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 flex justify-center bg-red-100 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-red-brand"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[14px] font-bold"
  }, "Oh snap!"), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 text-[12px]"
  }, message)));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Fakebooks Remix"
});
var loader = async ({ request }) => {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
};
function App() {
  const { user } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), user ? /* @__PURE__ */ React.createElement(LogoutTimer, null) : null, /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
function LogoutTimer() {
  const [status, setStatus] = (0, import_react3.useState)("idle");
  const location = (0, import_react2.useLocation)();
  const fetcher = (0, import_react2.useFetcher)();
  const logoutTime = 1e3 * 60 * 60 * 24;
  const modalTime = logoutTime - 1e3 * 60 * 2;
  const modalTimer = (0, import_react3.useRef)();
  const logoutTimer = (0, import_react3.useRef)();
  const logout2 = (0, import_react3.useCallback)(() => {
    fetcher.submit({ redirectTo: location.pathname }, { method: "post", action: "/logout" });
  }, [fetcher, location.pathname]);
  const cleanupTimers = (0, import_react3.useCallback)(() => {
    clearTimeout(modalTimer.current);
    clearTimeout(logoutTimer.current);
  }, []);
  const resetTimers = (0, import_react3.useCallback)(() => {
    cleanupTimers();
    modalTimer.current = setTimeout(() => {
      setStatus("show-modal");
    }, modalTime);
    logoutTimer.current = setTimeout(logout2, logoutTime);
  }, [cleanupTimers, logout2, logoutTime, modalTime]);
  (0, import_react3.useEffect)(() => resetTimers(), [resetTimers, location.key]);
  (0, import_react3.useEffect)(() => cleanupTimers, [cleanupTimers]);
  function closeModal() {
    setStatus("idle");
    resetTimers();
  }
  return /* @__PURE__ */ React.createElement(import_dialog.Dialog, {
    "aria-label": "Pending Logout Notification",
    isOpen: status === "show-modal",
    onDismiss: closeModal
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4 text-d-h3"
  }, "Are you still there?"), /* @__PURE__ */ React.createElement("p", null, "You are going to be logged out due to inactivity. Close this modal to stay logged in."), /* @__PURE__ */ React.createElement("div", {
    className: "h-8"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-8"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: closeModal,
    className: submitButtonClasses
  }, "Remain Logged In"), /* @__PURE__ */ React.createElement("button", {
    onClick: logout2,
    className: dangerButtonClasses
  }, "Logout"))));
}
var unstable_shouldReload = ({ submission }) => (submission == null ? void 0 : submission.action) === "/logout" || (submission == null ? void 0 : submission.action) === "/login";

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/resources/customers.tsx
var customers_exports = {};
__export(customers_exports, {
  CustomerCombobox: () => CustomerCombobox,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var import_react4 = require("@remix-run/react");
var import_clsx2 = __toESM(require("clsx"));
var import_downshift = require("downshift");
var import_react5 = require("react");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/invoice.server.ts
var getDaysToDueDate = (date) => Math.ceil((date.getTime() - asUTC(new Date()).getTime()) / (1e3 * 60 * 60 * 24));
function getInvoiceDerivedData(invoice) {
  const daysToDueDate = getDaysToDueDate(invoice.dueDate);
  const totalAmount = invoice.lineItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const totalDeposits = invoice.deposits.reduce((acc, deposit) => acc + deposit.amount, 0);
  const dueStatus = totalAmount === totalDeposits ? "paid" : totalDeposits > totalAmount ? "overpaid" : daysToDueDate < 0 ? "overdue" : "due";
  const dueStatusDisplay = dueStatus === "paid" ? "Paid" : dueStatus === "overpaid" ? "Overpaid" : dueStatus === "overdue" ? "Overdue" : daysToDueDate === 0 ? "Due today" : daysToDueDate === 1 ? `Due tomorrow` : `Due in ${daysToDueDate} days`;
  return {
    totalAmount,
    totalDeposits,
    daysToDueDate,
    dueStatus,
    dueStatusDisplay
  };
}
function asUTC(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
async function getFirstInvoice() {
  return prisma.invoice.findFirst();
}
async function getInvoiceListItems() {
  const invoices = await prisma.invoice.findMany({
    select: {
      id: true,
      dueDate: true,
      number: true,
      customer: {
        select: { name: true }
      },
      lineItems: {
        select: { quantity: true, unitPrice: true }
      },
      deposits: {
        select: { amount: true }
      }
    }
  });
  return invoices.map((invoice) => {
    return __spreadValues({
      id: invoice.id,
      name: invoice.customer.name,
      number: invoice.number
    }, getInvoiceDerivedData(invoice));
  });
}
async function getInvoiceDetails(invoiceId) {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: {
      number: true,
      invoiceDate: true,
      dueDate: true,
      customer: {
        select: { id: true, name: true }
      },
      lineItems: {
        select: {
          id: true,
          quantity: true,
          unitPrice: true,
          description: true
        }
      },
      deposits: {
        select: { id: true, amount: true, depositDate: true }
      }
    }
  });
  if (!invoice)
    return null;
  return __spreadValues({ invoice }, getInvoiceDerivedData(invoice));
}
async function createInvoice({
  dueDate,
  customerId,
  lineItems
}) {
  const largestInvoiceNumber = await prisma.invoice.findFirst({
    select: { number: true },
    orderBy: { number: "desc" }
  });
  const nextNumber = largestInvoiceNumber ? largestInvoiceNumber.number + 1 : 1;
  return prisma.invoice.create({
    data: {
      number: nextNumber,
      dueDate,
      customer: { connect: { id: customerId } },
      lineItems: {
        create: lineItems.map((li) => ({
          description: li.description,
          quantity: li.quantity,
          unitPrice: li.unitPrice
        }))
      }
    }
  });
}

// app/models/customer.server.ts
async function searchCustomers(query) {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true
    }
  });
  const lowerQuery = query.toLowerCase();
  return customers.filter((c) => {
    return c.name.toLowerCase().includes(lowerQuery) || c.email.toLowerCase().includes(lowerQuery);
  });
}
async function getFirstCustomer() {
  return prisma.customer.findFirst();
}
async function getCustomerListItems() {
  return prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true
    }
  });
}
async function createCustomer({
  name,
  email
}) {
  return prisma.customer.create({ data: { email, name } });
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/resources/customers.tsx
var loader2 = async ({ request }) => {
  await requireUser(request);
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  (0, import_tiny_invariant2.default)(typeof query === "string", "query is required");
  return (0, import_node4.json)({
    customers: await searchCustomers(query)
  });
};
function CustomerCombobox({ error }) {
  var _a;
  const customerFetcher = (0, import_react4.useFetcher)();
  const id = (0, import_react5.useId)();
  const customers = ((_a = customerFetcher.data) == null ? void 0 : _a.customers) ?? [];
  const [selectedCustomer, setSelectedCustomer] = (0, import_react5.useState)(null);
  const cb = (0, import_downshift.useCombobox)({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedCustomer(selectedItem);
    },
    items: customers,
    itemToString: (item) => item ? item.name : "",
    onInputValueChange: (changes) => {
      if (!changes.inputValue)
        return;
      customerFetcher.submit({ query: changes.inputValue }, { method: "get", action: "/resources/customers" });
    }
  });
  const displayMenu = cb.isOpen && customers.length > 0;
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "customerId",
    type: "hidden",
    value: (selectedCustomer == null ? void 0 : selectedCustomer.id) ?? ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement("label", __spreadValues({}, cb.getLabelProps()), /* @__PURE__ */ React.createElement(LabelText, null, "Customer")), error ? /* @__PURE__ */ React.createElement("em", {
    id: "customer-error",
    className: "text-d-p-xs text-red-600"
  }, error) : null), /* @__PURE__ */ React.createElement("div", __spreadValues({}, cb.getComboboxProps()), /* @__PURE__ */ React.createElement("input", __spreadValues({}, cb.getInputProps({
    className: (0, import_clsx2.default)("text-lg w-full border border-gray-500 px-2 py-1", {
      "rounded-t rounded-b-0": displayMenu,
      rounded: !displayMenu
    }),
    "aria-invalid": Boolean(error) || void 0,
    "aria-errormessage": error ? "customer-error" : void 0
  })))), /* @__PURE__ */ React.createElement("ul", __spreadValues({}, cb.getMenuProps({
    className: (0, import_clsx2.default)("absolute z-10 bg-white shadow-lg rounded-b w-full border border-t-0 border-gray-500 max-h-[180px] overflow-scroll", { hidden: !displayMenu })
  })), cb.isOpen ? customers.map((customer, index) => /* @__PURE__ */ React.createElement("li", __spreadValues({
    className: (0, import_clsx2.default)("cursor-pointer py-1 px-2", {
      "bg-green-200": cb.highlightedIndex === index
    }),
    key: customer.id
  }, cb.getItemProps({ item: customer, index })), customer.name, " (", customer.email, ")")) : null));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");

// app/utils.ts
var import_react6 = require("@remix-run/react");
var import_react7 = require("react");
var DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }
  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }
  return to;
}
function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}
var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
function asUTC2(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
function parseDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return asUTC2(new Date(year, month - 1, day));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/logout.tsx
var action = async ({ request }) => {
  const formData = await request.formData();
  return logout(request, safeRedirect(formData.get("redirectTo"), "/"));
};
var loader3 = async () => {
  return (0, import_node5.redirect)("/");
};

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => AppRoute
});
var import_react8 = require("@remix-run/react");
function AppRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex h-full rounded-lg bg-white text-gray-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-r border-gray-100 bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "."
  }, /* @__PURE__ */ React.createElement(FullFakebooksLogo, {
    size: "sm",
    position: "left"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-7"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col font-bold text-gray-800"
  }, /* @__PURE__ */ React.createElement(NavItem, {
    to: "dashboard"
  }, "Dashboard"), /* @__PURE__ */ React.createElement(NavItem, {
    to: "accounts"
  }, "Accounts"), /* @__PURE__ */ React.createElement(NavItem, {
    to: "sales"
  }, "Sales"), /* @__PURE__ */ React.createElement(NavItem, {
    to: "expenses"
  }, "Expenses"), /* @__PURE__ */ React.createElement(NavItem, {
    to: "reports"
  }, "Reports"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/kentcdodds/advanced-remix",
    className: "my-1 flex gap-1 py-1 px-2 pr-16 text-[length:14px]"
  }, "GitHub ", /* @__PURE__ */ React.createElement(UpRightArrowIcon, null)), /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post",
    action: "/logout",
    className: "my-1 py-1 px-2 pr-16 text-[length:14px]"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex gap-1 font-bold"
  }, "Logout ", /* @__PURE__ */ React.createElement(LogoutIcon, null)))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Outlet, null)));
}
function NavItem({ to, children }) {
  return /* @__PURE__ */ React.createElement(import_react8.NavLink, {
    to,
    prefetch: "intent",
    className: ({ isActive }) => `my-1 py-1 px-2 pr-16 text-[length:14px] ${isActive ? "rounded-md bg-gray-100" : ""}`
  }, children);
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute,
  loader: () => loader4
});
var import_server_runtime = require("@remix-run/server-runtime");
var loader4 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime.json)({});
};
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "Look at all these graphs!");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/accounts.tsx
var accounts_exports = {};
__export(accounts_exports, {
  default: () => AccountsRoute,
  loader: () => loader5
});
var import_server_runtime2 = require("@remix-run/server-runtime");
var loader5 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime2.json)({});
};
function AccountsRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "Hope you have tons of accounts I guess.");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/expenses.tsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesRoute,
  loader: () => loader6
});
var import_server_runtime3 = require("@remix-run/server-runtime");
var loader6 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime3.json)({});
};
function ExpensesRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "Hope you don't have a lot of these...");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/reports.tsx
var reports_exports = {};
__export(reports_exports, {
  default: () => ReportsRoute,
  loader: () => loader7
});
var import_react9 = require("@remix-run/react");
var import_server_runtime4 = require("@remix-run/server-runtime");
var loader7 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime4.json)({});
};
function ReportsRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full p-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-display text-d-h3 text-black"
  }, "Reports"), /* @__PURE__ */ React.createElement("div", {
    className: "h-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium"
  }, /* @__PURE__ */ React.createElement(import_react9.Form, {
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

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => IndexRoute,
  loader: () => loader8
});
var import_react10 = require("@remix-run/react");
var import_node6 = require("@remix-run/node");
var loader8 = async ({ request }) => {
  await requireUser(request);
  return (0, import_node6.redirect)("/sales/invoices");
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "Go to the", " ", /* @__PURE__ */ React.createElement(import_react10.Link, {
    className: "text-blue-600 underline",
    to: "sales"
  }, "sales"), " ", "page...");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  default: () => SalesRoute,
  loader: () => loader9
});
var import_node7 = require("@remix-run/node");
var import_react11 = require("@remix-run/react");
var loader9 = async ({ request }) => {
  await requireUser(request);
  const [firstInvoice, firstCustomer] = await Promise.all([
    getFirstInvoice(),
    getFirstCustomer()
  ]);
  return (0, import_node7.json)({
    firstInvoiceId: firstInvoice == null ? void 0 : firstInvoice.id,
    firstCustomerId: firstCustomer == null ? void 0 : firstCustomer.id
  });
};
var linkClassName = ({ isActive }) => isActive ? "font-bold text-black" : "";
function SalesRoute() {
  const data = (0, import_react11.useLoaderData)();
  const matches = (0, import_react11.useMatches)();
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
  }, /* @__PURE__ */ React.createElement(import_react11.NavLink, {
    to: ".",
    className: linkClassName({ isActive: indexMatches })
  }, "Overview"), /* @__PURE__ */ React.createElement(import_react11.NavLink, {
    prefetch: "intent",
    to: "subscriptions",
    className: linkClassName
  }, "Subscriptions"), /* @__PURE__ */ React.createElement(import_react11.NavLink, {
    prefetch: "intent",
    to: data.firstInvoiceId ? `invoices/${data.firstInvoiceId}` : "invoices",
    className: linkClassName({ isActive: invoiceMatches })
  }, "Invoices"), /* @__PURE__ */ React.createElement(import_react11.NavLink, {
    prefetch: "intent",
    to: data.firstCustomerId ? `customers/${data.firstCustomerId}` : "Customers",
    className: linkClassName({ isActive: customerMatches })
  }, "Customers"), /* @__PURE__ */ React.createElement(import_react11.NavLink, {
    prefetch: "intent",
    to: "deposits",
    className: linkClassName
  }, "Deposits")), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement(import_react11.Outlet, null));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/subscriptions.tsx
var subscriptions_exports = {};
__export(subscriptions_exports, {
  default: () => Subscriptions,
  loader: () => loader10
});
var import_server_runtime5 = require("@remix-run/server-runtime");
var loader10 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime5.json)({});
};
function Subscriptions() {
  return /* @__PURE__ */ React.createElement("div", null, "Woo. Subs. Money.");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/customers.tsx
var customers_exports2 = {};
__export(customers_exports2, {
  default: () => Customers,
  loader: () => loader11
});
var import_react12 = require("@remix-run/react");
var import_node8 = require("@remix-run/node");
var loader11 = async ({ request }) => {
  await requireUser(request);
  return (0, import_node8.json)({
    customers: await getCustomerListItems()
  });
};
function Customers() {
  const { customers } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 border-r border-gray-100"
  }, /* @__PURE__ */ React.createElement(import_react12.NavLink, {
    to: "new",
    prefetch: "intent",
    className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex gap-1"
  }, /* @__PURE__ */ React.createElement(FilePlusIcon, null), " ", /* @__PURE__ */ React.createElement("span", null, "Create new customer"))), /* @__PURE__ */ React.createElement("div", {
    className: "max-h-96 overflow-y-scroll"
  }, customers.map((customer) => /* @__PURE__ */ React.createElement(import_react12.NavLink, {
    key: customer.id,
    to: customer.id,
    className: ({ isActive }) => "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:14px] font-bold leading-6"
  }, /* @__PURE__ */ React.createElement("div", null, customer.name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between text-[length:12px] font-medium leading-4 text-gray-400"
  }, /* @__PURE__ */ React.createElement("div", null, customer.email)))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-1/2 flex-col justify-between"
  }, /* @__PURE__ */ React.createElement(import_react12.Outlet, null), /* @__PURE__ */ React.createElement("small", {
    className: "p-2 text-center"
  }, "Note: this is arbitrarily slow to demonstrate pending UI.")));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/customers/$customerId.tsx
var customerId_exports = {};
__export(customerId_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => CustomerRoute,
  loader: () => loader12
});
var import_react13 = require("@remix-run/react");
var loader12 = async ({ request, params }) => {
  await requireUser(request);
  const { customerId } = params;
  if (typeof customerId !== "string") {
    throw new Error("This should be unpossible.");
  }
  return new Response("todo");
};
var lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";
function CustomerRoute() {
  const data = {
    customerInfo: {
      email: "todo@todo.com",
      name: "TODO"
    },
    invoiceDetails: [
      {
        id: "todo",
        number: 0,
        dueStatus: "paid",
        dueStatusDisplay: "todo",
        totalAmount: 0
      }
    ]
  };
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
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_react13.Link, {
    className: "text-blue-600 underline",
    to: `../../invoices/${details.id}`
  }, details.number)), /* @__PURE__ */ React.createElement("td", {
    className: "text-center uppercase " + (details.dueStatus === "paid" ? "text-green-brand" : details.dueStatus === "overdue" ? "text-red-brand" : "")
  }, details.dueStatusDisplay), /* @__PURE__ */ React.createElement("td", {
    className: "text-right"
  }, currencyFormatter.format(details.totalAmount)))))));
}
function CatchBoundary() {
  const caught = (0, import_react13.useCatch)();
  const params = (0, import_react13.useParams)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "relative h-full"
    }, /* @__PURE__ */ React.createElement(ErrorFallback, {
      message: `No customer found with the ID of "${params.customerId}"`
    }));
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/customers/index.tsx
var customers_exports3 = {};
__export(customers_exports3, {
  default: () => InvoiceIndex,
  loader: () => loader13
});
var import_node9 = require("@remix-run/node");
var loader13 = async ({ request }) => {
  await requireUser(request);
  const firstCustomer = await getFirstCustomer();
  if (!firstCustomer) {
    return (0, import_node9.json)({});
  }
  return (0, import_node9.redirect)(`/sales/customers/${firstCustomer.id}`);
};
function InvoiceIndex() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, "You don't have any customers \u{1F62D}");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/customers/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewCustomer
});
var import_react14 = require("@remix-run/react");
var import_server_runtime6 = require("@remix-run/server-runtime");
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var action2 = async ({ request }) => {
  await requireUser(request);
  const formData = await request.formData();
  const intent = formData.get("intent");
  switch (intent) {
    case "create": {
      const name = formData.get("name");
      const email = formData.get("email");
      (0, import_tiny_invariant3.default)(typeof name === "string", "name is required");
      (0, import_tiny_invariant3.default)(typeof email === "string", "email is required");
      const customer = await createCustomer({ name, email });
      return (0, import_server_runtime6.redirect)(`/sales/customers/${customer.id}`);
    }
  }
  return new Response(`Unsupported intent: ${intent}`, { status: 400 });
};
function NewCustomer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 font-display"
  }, "New Customer"), /* @__PURE__ */ React.createElement(import_react14.Form, {
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

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/deposits.tsx
var deposits_exports = {};
__export(deposits_exports, {
  default: () => Deposits,
  loader: () => loader14
});
var React2 = __toESM(require("react"));
var import_react15 = require("@remix-run/react");
var import_server_runtime7 = require("@remix-run/server-runtime");

// app/models/deposit.server.ts
async function getDepositListItems() {
  const deposits = await prisma.deposit.findMany({
    orderBy: {
      depositDate: "desc"
    },
    select: {
      id: true,
      depositDate: true,
      amount: true,
      invoice: {
        select: {
          id: true,
          number: true,
          customer: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });
  return deposits.map((d) => __spreadProps(__spreadValues({}, d), {
    depositDateFormatted: d.depositDate.toLocaleDateString()
  }));
}
async function getDepositDetails(depositId) {
  return prisma.deposit.findFirst({
    where: { id: depositId },
    select: { note: true }
  });
}
async function createDeposit(data) {
  return prisma.deposit.create({ data });
}
async function deleteDeposit(id) {
  return prisma.deposit.delete({ where: { id } });
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/deposits.tsx
var import_clsx3 = __toESM(require("clsx"));
var loader14 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime7.json)({
    deposits: await getDepositListItems()
  });
};
function Deposits() {
  const data = (0, import_react15.useLoaderData)();
  const outlet = (0, import_react15.useOutlet)();
  const { depositId } = (0, import_react15.useParams)();
  const depositNotFound = depositId && data.deposits.every((d) => d.id !== depositId);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "overflow-hidden rounded-lg border border-gray-200"
  }, depositNotFound ? /* @__PURE__ */ React2.createElement("div", {
    className: "p-12 text-red-500"
  }, 'No deposit found with the ID of "', depositId, '"') : null, /* @__PURE__ */ React2.createElement("table", {
    className: "w-full"
  }, /* @__PURE__ */ React2.createElement("thead", {
    className: "border-b-2 border-gray-200"
  }, /* @__PURE__ */ React2.createElement("tr", null, /* @__PURE__ */ React2.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }), /* @__PURE__ */ React2.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Date"), /* @__PURE__ */ React2.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Invoice"), /* @__PURE__ */ React2.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Customer"), /* @__PURE__ */ React2.createElement("th", {
    className: "border border-gray-100 py-2 px-4"
  }, "Amount"))), /* @__PURE__ */ React2.createElement("tbody", {
    className: "max-h-[100px]"
  }, data.deposits.map((d) => /* @__PURE__ */ React2.createElement(React2.Fragment, {
    key: d.id
  }, /* @__PURE__ */ React2.createElement("tr", null, /* @__PURE__ */ React2.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React2.createElement(import_react15.Link, {
    to: d.id === depositId ? "." : d.id,
    className: "flex justify-center"
  }, /* @__PURE__ */ React2.createElement(CevronDownIcon, {
    className: (0, import_clsx3.default)({
      "-rotate-90": d.id === depositId
    })
  }))), /* @__PURE__ */ React2.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, d.depositDateFormatted), /* @__PURE__ */ React2.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React2.createElement(import_react15.Link, {
    className: "text-blue-600 underline",
    to: `../invoices/${d.invoice.id}`
  }, d.invoice.number)), /* @__PURE__ */ React2.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, /* @__PURE__ */ React2.createElement(import_react15.Link, {
    className: "text-blue-600 underline",
    to: `../customers/${d.invoice.customer.id}`
  }, d.invoice.customer.name)), /* @__PURE__ */ React2.createElement("td", {
    className: "border border-gray-100 py-2 px-4"
  }, currencyFormatter.format(d.amount))), d.id === depositId ? /* @__PURE__ */ React2.createElement("tr", null, /* @__PURE__ */ React2.createElement("td", {
    colSpan: 5
  }, outlet)) : null)))));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/deposits/$depositId.tsx
var depositId_exports = {};
__export(depositId_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action3,
  default: () => DepositRoute,
  loader: () => loader15
});
var import_react16 = require("@remix-run/react");
var import_node10 = require("@remix-run/node");
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var loader15 = async ({ request, params }) => {
  await requireUser(request);
  const { depositId } = params;
  if (typeof depositId !== "string") {
    throw new Error("This should be unpossible.");
  }
  const depositDetails = await getDepositDetails(depositId);
  if (!depositDetails) {
    throw new Response("not found", { status: 404 });
  }
  return (0, import_node10.json)({
    depositNote: depositDetails.note
  });
};
var action3 = async ({ request, params }) => {
  const { depositId } = params;
  if (typeof depositId !== "string") {
    throw new Error("This should be unpossible.");
  }
  const formData = await request.formData();
  const intent = formData.get("intent");
  (0, import_tiny_invariant4.default)(typeof intent === "string", "intent must be a string");
  switch (intent) {
    case "delete": {
      await deleteDeposit(depositId);
      return (0, import_node10.redirect)("/sales/deposits");
    }
    default: {
      throw new Error(`Unsupported intent: ${intent}`);
    }
  }
};
function DepositRoute() {
  const data = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, data.depositNote ? /* @__PURE__ */ React.createElement("span", null, "Note:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "pl-1"
  }, data.depositNote)) : /* @__PURE__ */ React.createElement("span", {
    className: "text-m-p-sm uppercase text-gray-500 md:text-d-p-sm"
  }, "No note"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react16.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    title: "Delete deposit",
    name: "intent",
    value: "delete"
  }, /* @__PURE__ */ React.createElement(TrashIcon, null))))));
}
function CatchBoundary2() {
  return null;
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/deposits/index.tsx
var deposits_exports2 = {};
__export(deposits_exports2, {
  default: () => DepositsIndexRoute
});
function DepositsIndexRoute() {
  return null;
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/invoices.tsx
var invoices_exports = {};
__export(invoices_exports, {
  default: () => InvoicesRoute,
  loader: () => loader16
});
var import_react17 = require("@remix-run/react");
var import_node11 = require("@remix-run/node");
var import_react18 = require("@remix-run/react");
var loader16 = async ({ request }) => {
  await requireUser(request);
  const invoiceListItems = await getInvoiceListItems();
  const dueSoonAmount = invoiceListItems.reduce((sum, li) => {
    if (li.dueStatus !== "due") {
      return sum;
    }
    const remainingBalance = li.totalAmount - li.totalDeposits;
    return sum + remainingBalance;
  }, 0);
  const overdueAmount = invoiceListItems.reduce((sum, li) => {
    if (li.dueStatus !== "overdue") {
      return sum;
    }
    const remainingBalance = li.totalAmount - li.totalDeposits;
    return sum + remainingBalance;
  }, 0);
  return (0, import_node11.json)({
    invoiceListItems,
    overdueAmount,
    dueSoonAmount
  });
};
function InvoicesRoute() {
  const data = (0, import_react18.useLoaderData)();
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
  }), /* @__PURE__ */ React.createElement(InvoiceList, null, /* @__PURE__ */ React.createElement(import_react17.Outlet, null)));
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
  const { invoiceListItems } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex overflow-hidden rounded-lg border border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 border-r border-gray-100"
  }, /* @__PURE__ */ React.createElement(import_react18.NavLink, {
    to: "new",
    prefetch: "intent",
    className: ({ isActive }) => "block border-b-4 border-gray-100 py-3 px-4 hover:bg-gray-50 " + (isActive ? "bg-gray-50" : "")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex gap-1"
  }, /* @__PURE__ */ React.createElement(FilePlusIcon, null), " ", /* @__PURE__ */ React.createElement("span", null, "Create new invoice"))), /* @__PURE__ */ React.createElement("div", {
    className: "max-h-96 overflow-y-scroll"
  }, invoiceListItems.map((invoice) => /* @__PURE__ */ React.createElement(import_react18.NavLink, {
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

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/invoices/$invoiceId.tsx
var invoiceId_exports = {};
__export(invoiceId_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action4,
  default: () => InvoiceRoute,
  loader: () => loader17
});
var import_node12 = require("@remix-run/node");
var import_react19 = require("@remix-run/react");
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_react20 = require("react");
var loader17 = async ({ request, params }) => {
  await requireUser(request);
  const { invoiceId } = params;
  if (typeof invoiceId !== "string") {
    throw new Error("This should be unpossible.");
  }
  const invoiceDetails = await getInvoiceDetails(invoiceId);
  if (!invoiceDetails) {
    throw new Response("not found", { status: 404 });
  }
  return (0, import_node12.json)({
    customerName: invoiceDetails.invoice.customer.name,
    customerId: invoiceDetails.invoice.customer.id,
    totalAmount: invoiceDetails.totalAmount,
    dueStatus: invoiceDetails.dueStatus,
    dueDisplay: invoiceDetails.dueStatusDisplay,
    invoiceDateDisplay: invoiceDetails.invoice.invoiceDate.toLocaleDateString(),
    lineItems: invoiceDetails.invoice.lineItems.map((li) => ({
      id: li.id,
      description: li.description,
      quantity: li.quantity,
      unitPrice: li.unitPrice
    })),
    deposits: invoiceDetails.invoice.deposits.map((deposit) => ({
      id: deposit.id,
      amount: deposit.amount,
      depositDateFormatted: deposit.depositDate.toLocaleDateString()
    }))
  });
};
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
var action4 = async ({ request, params }) => {
  await requireUser(request);
  const { invoiceId } = params;
  if (typeof invoiceId !== "string") {
    throw new Error("This should be unpossible.");
  }
  const formData = await request.formData();
  const intent = formData.get("intent");
  (0, import_tiny_invariant5.default)(typeof intent === "string", "intent required");
  switch (intent) {
    case "create-deposit": {
      const amount = Number(formData.get("amount"));
      const depositDateString = formData.get("depositDate");
      const note = formData.get("note");
      (0, import_tiny_invariant5.default)(!Number.isNaN(amount), "amount must be a number");
      (0, import_tiny_invariant5.default)(typeof depositDateString === "string", "dueDate is required");
      (0, import_tiny_invariant5.default)(typeof note === "string", "dueDate is required");
      const depositDate = parseDate(depositDateString);
      const errors = {
        amount: validateAmount(amount),
        depositDate: validateDepositDate(depositDate)
      };
      const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
      if (hasErrors) {
        return (0, import_node12.json)({ errors });
      }
      await createDeposit({ invoiceId, amount, note, depositDate });
      return new Response("ok");
    }
    default: {
      throw new Error(`Unsupported intent: ${intent}`);
    }
  }
};
var lineItemClassName2 = "flex justify-between border-t border-gray-100 py-4 text-[14px] leading-[24px]";
function InvoiceRoute() {
  const data = (0, import_react19.useLoaderData)();
  const location = (0, import_react19.useLocation)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10",
    key: location.key
  }, /* @__PURE__ */ React.createElement(import_react19.Link, {
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
    className: `${lineItemClassName2} font-bold`
  }, /* @__PURE__ */ React.createElement("div", null, "Net Total"), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(data.totalAmount))), /* @__PURE__ */ React.createElement("div", {
    className: "h-8"
  }), /* @__PURE__ */ React.createElement(Deposits2, null));
}
function Deposits2() {
  var _a;
  const data = (0, import_react19.useLoaderData)();
  const newDepositFetcher = (0, import_react19.useFetcher)();
  const formRef = (0, import_react20.useRef)(null);
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
  (0, import_react20.useEffect)(() => {
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
    className: lineItemClassName2
  }, /* @__PURE__ */ React.createElement(import_react19.Link, {
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
    className: lineItemClassName2
  }, /* @__PURE__ */ React.createElement("div", null, description), quantity === 1 ? null : /* @__PURE__ */ React.createElement("div", {
    className: "text-[10px]"
  }, "(", quantity, "x)"), /* @__PURE__ */ React.createElement("div", null, currencyFormatter.format(unitPrice)));
}
function CatchBoundary3() {
  const caught = (0, import_react19.useCatch)();
  const params = (0, import_react19.useParams)();
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

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/invoices/index.tsx
var invoices_exports2 = {};
__export(invoices_exports2, {
  default: () => InvoiceIndex2,
  loader: () => loader18
});
var import_node13 = require("@remix-run/node");
var loader18 = async ({ request }) => {
  await requireUser(request);
  const firstInvoice = await getFirstInvoice();
  if (!firstInvoice) {
    return (0, import_node13.json)({});
  }
  return (0, import_node13.redirect)(`/sales/invoices/${firstInvoice.id}`);
};
function InvoiceIndex2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, "You don't have any invoices \u{1F62D}");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/invoices/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action5,
  default: () => NewInvoice,
  loader: () => loader19
});
var import_react23 = require("@remix-run/react");
var import_node15 = require("@remix-run/node");
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var import_react24 = require("react");

// app/routes/resources/customers.tsx
var import_node14 = require("@remix-run/node");
var import_react21 = require("@remix-run/react");
var import_clsx4 = __toESM(require("clsx"));
var import_downshift2 = require("downshift");
var import_react22 = require("react");
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
function CustomerCombobox2({ error }) {
  var _a;
  const customerFetcher = (0, import_react21.useFetcher)();
  const id = (0, import_react22.useId)();
  const customers = ((_a = customerFetcher.data) == null ? void 0 : _a.customers) ?? [];
  const [selectedCustomer, setSelectedCustomer] = (0, import_react22.useState)(null);
  const cb = (0, import_downshift2.useCombobox)({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedCustomer(selectedItem);
    },
    items: customers,
    itemToString: (item) => item ? item.name : "",
    onInputValueChange: (changes) => {
      if (!changes.inputValue)
        return;
      customerFetcher.submit({ query: changes.inputValue }, { method: "get", action: "/resources/customers" });
    }
  });
  const displayMenu = cb.isOpen && customers.length > 0;
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "customerId",
    type: "hidden",
    value: (selectedCustomer == null ? void 0 : selectedCustomer.id) ?? ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement("label", __spreadValues({}, cb.getLabelProps()), /* @__PURE__ */ React.createElement(LabelText, null, "Customer")), error ? /* @__PURE__ */ React.createElement("em", {
    id: "customer-error",
    className: "text-d-p-xs text-red-600"
  }, error) : null), /* @__PURE__ */ React.createElement("div", __spreadValues({}, cb.getComboboxProps()), /* @__PURE__ */ React.createElement("input", __spreadValues({}, cb.getInputProps({
    className: (0, import_clsx4.default)("text-lg w-full border border-gray-500 px-2 py-1", {
      "rounded-t rounded-b-0": displayMenu,
      rounded: !displayMenu
    }),
    "aria-invalid": Boolean(error) || void 0,
    "aria-errormessage": error ? "customer-error" : void 0
  })))), /* @__PURE__ */ React.createElement("ul", __spreadValues({}, cb.getMenuProps({
    className: (0, import_clsx4.default)("absolute z-10 bg-white shadow-lg rounded-b w-full border border-t-0 border-gray-500 max-h-[180px] overflow-scroll", { hidden: !displayMenu })
  })), cb.isOpen ? customers.map((customer, index) => /* @__PURE__ */ React.createElement("li", __spreadValues({
    className: (0, import_clsx4.default)("cursor-pointer py-1 px-2", {
      "bg-green-200": cb.highlightedIndex === index
    }),
    key: customer.id
  }, cb.getItemProps({ item: customer, index })), customer.name, " (", customer.email, ")")) : null));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/invoices/new.tsx
var loader19 = async ({ request }) => {
  await requireUser(request);
  return (0, import_node15.json)({});
};
function validateCustomerId(customerId) {
  return customerId === "" ? "Please select a customer" : null;
}
function validateDueDate(date) {
  if (Number.isNaN(date.getTime())) {
    return "Please enter a valid date";
  }
  return null;
}
function validateLineItemQuantity(quantity) {
  if (quantity <= 0)
    return "Must be greater than 0";
  if (Number(quantity.toFixed(0)) !== quantity) {
    return "Fractional quantities are not allowed";
  }
  return null;
}
function validateLineItemUnitPrice(unitPrice) {
  if (unitPrice <= 0)
    return "Must be greater than 0";
  if (Number(unitPrice.toFixed(2)) !== unitPrice) {
    return "Must only have two decimal places";
  }
  return null;
}
var action5 = async ({ request }) => {
  await requireUser(request);
  const formData = await request.formData();
  const intent = formData.get("intent");
  switch (intent) {
    case "create": {
      const customerId = formData.get("customerId");
      const dueDateString = formData.get("dueDate");
      (0, import_tiny_invariant7.default)(typeof customerId === "string", "customerId is required");
      (0, import_tiny_invariant7.default)(typeof dueDateString === "string", "dueDate is required");
      const dueDate = parseDate(dueDateString);
      const lineItemIds = formData.getAll("lineItemId");
      const lineItemQuantities = formData.getAll("quantity");
      const lineItemUnitPrices = formData.getAll("unitPrice");
      const lineItemDescriptions = formData.getAll("description");
      const lineItems = [];
      for (let i = 0; i < lineItemQuantities.length; i++) {
        const quantity = +lineItemQuantities[i];
        const unitPrice = +lineItemUnitPrices[i];
        const description = lineItemDescriptions[i];
        (0, import_tiny_invariant7.default)(typeof quantity === "number", "quantity is required");
        (0, import_tiny_invariant7.default)(typeof unitPrice === "number", "unitPrice is required");
        (0, import_tiny_invariant7.default)(typeof description === "string", "description is required");
        lineItems.push({ quantity, unitPrice, description });
      }
      const errors = {
        customerId: validateCustomerId(customerId),
        dueDate: validateDueDate(dueDate),
        lineItems: lineItems.reduce((acc, lineItem, index) => {
          const id = lineItemIds[index];
          (0, import_tiny_invariant7.default)(typeof id === "string", "lineItem ids are required");
          acc[id] = {
            quantity: validateLineItemQuantity(lineItem.quantity),
            unitPrice: validateLineItemUnitPrice(lineItem.unitPrice)
          };
          return acc;
        }, {})
      };
      const customerIdHasError = errors.customerId !== null;
      const dueDateHasError = errors.dueDate !== null;
      const lineItemsHaveErrors = Object.values(errors.lineItems).some((lineItem) => Object.values(lineItem).some(Boolean));
      const hasErrors = dueDateHasError || customerIdHasError || lineItemsHaveErrors;
      if (hasErrors) {
        return (0, import_node15.json)({ errors });
      }
      const invoice = await createInvoice({ dueDate, customerId, lineItems });
      return (0, import_node15.redirect)(`/sales/invoices/${invoice.id}`);
    }
  }
  return new Response(`Unsupported intent: ${intent}`, { status: 400 });
};
function NewInvoice() {
  const actionData = (0, import_react23.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 font-display"
  }, "New Invoice"), /* @__PURE__ */ React.createElement(import_react23.Form, {
    method: "post",
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement(CustomerCombobox2, {
    error: actionData == null ? void 0 : actionData.errors.customerId
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "dueDate"
  }, /* @__PURE__ */ React.createElement(LabelText, null, "Due Date")), (actionData == null ? void 0 : actionData.errors.dueDate) ? /* @__PURE__ */ React.createElement("em", {
    id: "dueDate-error",
    className: "text-d-p-xs text-red-600"
  }, actionData.errors.dueDate) : null), /* @__PURE__ */ React.createElement("input", {
    id: "dueDate",
    name: "dueDate",
    className: inputClasses,
    type: "date",
    "aria-invalid": Boolean(actionData == null ? void 0 : actionData.errors.dueDate) || void 0,
    "aria-errormessage": (actionData == null ? void 0 : actionData.errors.dueDate) ? "dueDate-error" : void 0
  })), /* @__PURE__ */ React.createElement(LineItems, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "create",
    className: submitButtonClasses
  }, "Create Invoice"))));
}
var generateRandomId = () => Math.random().toString(32).slice(2);
function LineItems() {
  const firstId = (0, import_react24.useId)();
  const [lineItems, setLineItems] = (0, import_react24.useState)(() => [firstId]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-2"
  }, lineItems.map((lineItemClientId, index) => /* @__PURE__ */ React.createElement(LineItemFormFields, {
    key: lineItemClientId,
    lineItemClientId,
    index,
    onRemoveClick: () => {
      setLineItems((lis) => lis.filter((id, i) => id !== lineItemClientId));
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    title: "Add Line Item",
    type: "button",
    onClick: () => setLineItems((lis) => [...lis, generateRandomId()])
  }, /* @__PURE__ */ React.createElement(PlusIcon, null))));
}
function LineItemFormFields({
  lineItemClientId,
  index,
  onRemoveClick
}) {
  const actionData = (0, import_react23.useActionData)();
  const errors = actionData == null ? void 0 : actionData.errors.lineItems[lineItemClientId];
  return /* @__PURE__ */ React.createElement("fieldset", {
    key: lineItemClientId,
    className: "border-b-2 py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    title: "Remove Line Item",
    onClick: onRemoveClick
  }, /* @__PURE__ */ React.createElement(MinusIcon, null)), /* @__PURE__ */ React.createElement("legend", null, "Line Item ", index + 1)), /* @__PURE__ */ React.createElement("input", {
    value: lineItemClientId,
    name: "lineItemId",
    type: "hidden"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: `quantity-${lineItemClientId}`
  }, "Quantity:")), (errors == null ? void 0 : errors.quantity) ? /* @__PURE__ */ React.createElement("em", {
    id: "quantity-error",
    className: "text-d-p-xs text-red-600"
  }, errors.quantity) : null), /* @__PURE__ */ React.createElement("input", {
    id: `quantity-${lineItemClientId}`,
    name: "quantity",
    type: "number",
    className: inputClasses,
    "aria-invalid": Boolean(errors == null ? void 0 : errors.quantity) || void 0,
    "aria-errormessage": (errors == null ? void 0 : errors.quantity) ? "name-error" : void 0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: `unitPrice-${lineItemClientId}`
  }, "Unit Price:")), (errors == null ? void 0 : errors.unitPrice) ? /* @__PURE__ */ React.createElement("em", {
    id: "unitPrice-error",
    className: "text-d-p-xs text-red-600"
  }, errors.unitPrice) : null), /* @__PURE__ */ React.createElement("input", {
    id: `unitPrice-${lineItemClientId}`,
    name: "unitPrice",
    type: "number",
    min: "1",
    step: "any",
    className: inputClasses,
    "aria-invalid": Boolean(errors == null ? void 0 : errors.unitPrice) || void 0,
    "aria-errormessage": (errors == null ? void 0 : errors.unitPrice) ? "name-error" : void 0
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LabelText, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: `description-${lineItemClientId}`
  }, "Description:")), /* @__PURE__ */ React.createElement("input", {
    id: `description-${lineItemClientId}`,
    name: "description",
    className: inputClasses
  }))));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 flex justify-center bg-red-100 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-red-brand"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[14px] font-bold"
  }, "Oh snap!"), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 text-[12px]"
  }, "There was a problem. Sorry.")));
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/__app/sales/index.tsx
var sales_exports2 = {};
__export(sales_exports2, {
  default: () => SalesOverview,
  loader: () => loader20
});
var import_server_runtime8 = require("@remix-run/server-runtime");
var loader20 = async ({ request }) => {
  await requireUser(request);
  return (0, import_server_runtime8.json)({});
};
function SalesOverview() {
  return /* @__PURE__ */ React.createElement("div", null, "Overview");
}

// route:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/01-start/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader21,
  meta: () => meta2
});
var import_node16 = require("@remix-run/node");
var import_react25 = require("@remix-run/react");
var React3 = __toESM(require("react"));
var loader21 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_node16.redirect)("/");
  return (0, import_node16.json)({});
};
var action6 = async ({ request }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");
  if (!validateEmail(email)) {
    return (0, import_node16.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_node16.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_node16.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  let user;
  switch (intent) {
    case "signup": {
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        return (0, import_node16.json)({ errors: { email: "A user already exists with this email" } }, { status: 400 });
      }
      user = await createUser(email, password);
      break;
    }
    case "login": {
      user = await verifyLogin(email, password);
      break;
    }
    default: {
      throw new Error(`Unknown intent: ${intent}`);
    }
  }
  if (!user) {
    return (0, import_node16.json)({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo
  });
};
var meta2 = () => {
  return {
    title: "Login to Fakebooks"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_react25.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const actionData = (0, import_react25.useActionData)();
  const emailRef = React3.useRef(null);
  const passwordRef = React3.useRef(null);
  React3.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React3.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React3.createElement("h1", {
    className: "mb-12"
  }, /* @__PURE__ */ React3.createElement(FullFakebooksLogo, {
    size: "lg",
    position: "center"
  })), /* @__PURE__ */ React3.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React3.createElement(import_react25.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    htmlFor: "email",
    className: "text-sm block font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React3.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React3.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: inputClasses
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React3.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    htmlFor: "password",
    className: "text-sm block font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React3.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React3.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "current-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: inputClasses
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React3.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React3.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col gap-4 md:flex-row md:gap-6"
  }, /* @__PURE__ */ React3.createElement("button", {
    type: "submit",
    name: "intent",
    value: "login",
    className: "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400"
  }, "Log in"), /* @__PURE__ */ React3.createElement("button", {
    type: "submit",
    name: "intent",
    value: "signup",
    className: "w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Sign Up")), /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React3.createElement("input", {
    id: "remember",
    name: "remember",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  }), /* @__PURE__ */ React3.createElement("label", {
    htmlFor: "remember",
    className: "text-sm ml-2 block text-gray-900"
  }, "Remember me"))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "f1489f63", "entry": { "module": "/build/entry.client-3QTLOETL.js", "imports": ["/build/_shared/chunk-3CVWKXCE.js", "/build/_shared/chunk-UPRF7IWN.js", "/build/_shared/chunk-UIDRLFYU.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-T32Q6XA5.js", "imports": ["/build/_shared/chunk-VPZV3J4D.js", "/build/_shared/chunk-5XHGT72L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app": { "id": "routes/__app", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app-ZUDPTPEC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/accounts": { "id": "routes/__app/accounts", "parentId": "routes/__app", "path": "accounts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/accounts-A6HY2XPQ.js", "imports": ["/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/dashboard": { "id": "routes/__app/dashboard", "parentId": "routes/__app", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/dashboard-GNXDGTJG.js", "imports": ["/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/expenses": { "id": "routes/__app/expenses", "parentId": "routes/__app", "path": "expenses", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/expenses-UPQIXNYI.js", "imports": ["/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/index": { "id": "routes/__app/index", "parentId": "routes/__app", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__app/index-NFJ2VLZ2.js", "imports": ["/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/reports": { "id": "routes/__app/reports", "parentId": "routes/__app", "path": "reports", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/reports-AE6JKWHT.js", "imports": ["/build/_shared/chunk-5XHGT72L.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales": { "id": "routes/__app/sales", "parentId": "routes/__app", "path": "sales", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales-LMCIP7T3.js", "imports": ["/build/_shared/chunk-CLA73AZB.js", "/build/_shared/chunk-VTL4VDFE.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/customers": { "id": "routes/__app/sales/customers", "parentId": "routes/__app/sales", "path": "customers", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/customers-FOPWKFGJ.js", "imports": ["/build/_shared/chunk-5XHGT72L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/customers/$customerId": { "id": "routes/__app/sales/customers/$customerId", "parentId": "routes/__app/sales/customers", "path": ":customerId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/customers/$customerId-KC6P3PN5.js", "imports": ["/build/_shared/chunk-U2XHCC3L.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__app/sales/customers/index": { "id": "routes/__app/sales/customers/index", "parentId": "routes/__app/sales/customers", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__app/sales/customers/index-KU3THGZE.js", "imports": ["/build/_shared/chunk-VTL4VDFE.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/customers/new": { "id": "routes/__app/sales/customers/new", "parentId": "routes/__app/sales/customers", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/customers/new-TTMKJH3E.js", "imports": ["/build/_shared/chunk-VTL4VDFE.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/deposits": { "id": "routes/__app/sales/deposits", "parentId": "routes/__app/sales", "path": "deposits", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/deposits-SDP2SNXV.js", "imports": ["/build/_shared/chunk-YGEBXFN7.js", "/build/_shared/chunk-U2XHCC3L.js", "/build/_shared/chunk-5XHGT72L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/deposits/$depositId": { "id": "routes/__app/sales/deposits/$depositId", "parentId": "routes/__app/sales/deposits", "path": ":depositId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/deposits/$depositId-UUHP5PSA.js", "imports": ["/build/_shared/chunk-47ZWW2WL.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__app/sales/deposits/index": { "id": "routes/__app/sales/deposits/index", "parentId": "routes/__app/sales/deposits", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__app/sales/deposits/index-MF2IRXUR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/index": { "id": "routes/__app/sales/index", "parentId": "routes/__app/sales", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__app/sales/index-VYU2MRXN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/invoices": { "id": "routes/__app/sales/invoices", "parentId": "routes/__app/sales", "path": "invoices", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/invoices-U27HMP77.js", "imports": ["/build/_shared/chunk-U2XHCC3L.js", "/build/_shared/chunk-5XHGT72L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/invoices/$invoiceId": { "id": "routes/__app/sales/invoices/$invoiceId", "parentId": "routes/__app/sales/invoices", "path": ":invoiceId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/invoices/$invoiceId-VVTUJCM3.js", "imports": ["/build/_shared/chunk-YGEBXFN7.js", "/build/_shared/chunk-CLA73AZB.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/__app/sales/invoices/index": { "id": "routes/__app/sales/invoices/index", "parentId": "routes/__app/sales/invoices", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__app/sales/invoices/index-KM4TQKIT.js", "imports": ["/build/_shared/chunk-CLA73AZB.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__app/sales/invoices/new": { "id": "routes/__app/sales/invoices/new", "parentId": "routes/__app/sales/invoices", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/invoices/new-X2LXMOYA.js", "imports": ["/build/_shared/chunk-CLA73AZB.js", "/build/_shared/chunk-VTL4VDFE.js", "/build/_shared/chunk-VPZV3J4D.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/__app/sales/subscriptions": { "id": "routes/__app/sales/subscriptions", "parentId": "routes/__app/sales", "path": "subscriptions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__app/sales/subscriptions-PFI6RF2F.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-COULDLOA.js", "imports": ["/build/_shared/chunk-U2XHCC3L.js", "/build/_shared/chunk-47ZWW2WL.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-ETJCSWWH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources/customers": { "id": "routes/resources/customers", "parentId": "root", "path": "resources/customers", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources/customers-URG4IJY2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F1489F63.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources/customers": {
    id: "routes/resources/customers",
    parentId: "root",
    path: "resources/customers",
    index: void 0,
    caseSensitive: void 0,
    module: customers_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/dashboard": {
    id: "routes/__app/dashboard",
    parentId: "routes/__app",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/__app/accounts": {
    id: "routes/__app/accounts",
    parentId: "routes/__app",
    path: "accounts",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_exports
  },
  "routes/__app/expenses": {
    id: "routes/__app/expenses",
    parentId: "routes/__app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/__app/reports": {
    id: "routes/__app/reports",
    parentId: "routes/__app",
    path: "reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/__app/index": {
    id: "routes/__app/index",
    parentId: "routes/__app",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/__app/sales": {
    id: "routes/__app/sales",
    parentId: "routes/__app",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: sales_exports
  },
  "routes/__app/sales/subscriptions": {
    id: "routes/__app/sales/subscriptions",
    parentId: "routes/__app/sales",
    path: "subscriptions",
    index: void 0,
    caseSensitive: void 0,
    module: subscriptions_exports
  },
  "routes/__app/sales/customers": {
    id: "routes/__app/sales/customers",
    parentId: "routes/__app/sales",
    path: "customers",
    index: void 0,
    caseSensitive: void 0,
    module: customers_exports2
  },
  "routes/__app/sales/customers/$customerId": {
    id: "routes/__app/sales/customers/$customerId",
    parentId: "routes/__app/sales/customers",
    path: ":customerId",
    index: void 0,
    caseSensitive: void 0,
    module: customerId_exports
  },
  "routes/__app/sales/customers/index": {
    id: "routes/__app/sales/customers/index",
    parentId: "routes/__app/sales/customers",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: customers_exports3
  },
  "routes/__app/sales/customers/new": {
    id: "routes/__app/sales/customers/new",
    parentId: "routes/__app/sales/customers",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/__app/sales/deposits": {
    id: "routes/__app/sales/deposits",
    parentId: "routes/__app/sales",
    path: "deposits",
    index: void 0,
    caseSensitive: void 0,
    module: deposits_exports
  },
  "routes/__app/sales/deposits/$depositId": {
    id: "routes/__app/sales/deposits/$depositId",
    parentId: "routes/__app/sales/deposits",
    path: ":depositId",
    index: void 0,
    caseSensitive: void 0,
    module: depositId_exports
  },
  "routes/__app/sales/deposits/index": {
    id: "routes/__app/sales/deposits/index",
    parentId: "routes/__app/sales/deposits",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: deposits_exports2
  },
  "routes/__app/sales/invoices": {
    id: "routes/__app/sales/invoices",
    parentId: "routes/__app/sales",
    path: "invoices",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_exports
  },
  "routes/__app/sales/invoices/$invoiceId": {
    id: "routes/__app/sales/invoices/$invoiceId",
    parentId: "routes/__app/sales/invoices",
    path: ":invoiceId",
    index: void 0,
    caseSensitive: void 0,
    module: invoiceId_exports
  },
  "routes/__app/sales/invoices/index": {
    id: "routes/__app/sales/invoices/index",
    parentId: "routes/__app/sales/invoices",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: invoices_exports2
  },
  "routes/__app/sales/invoices/new": {
    id: "routes/__app/sales/invoices/new",
    parentId: "routes/__app/sales/invoices",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/__app/sales/index": {
    id: "routes/__app/sales/index",
    parentId: "routes/__app/sales",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: sales_exports2
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
