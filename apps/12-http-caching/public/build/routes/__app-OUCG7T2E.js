import {
  require_dist
} from "/build/_shared/chunk-2SU2LHTS.js";
import {
  FullFakebooksLogo,
  LogoutIcon,
  Spinner,
  UpRightArrowIcon
} from "/build/_shared/chunk-HLO6UIGL.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useTransition
} from "/build/_shared/chunk-27INLV7V.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/12-http-caching/app/routes/__app.tsx?browser
init_react();

// app/routes/__app.tsx
init_react();
var import_spin_delay = __toESM(require_dist());
function AppRoute() {
  const transition = useTransition();
  const showSpinner = (0, import_spin_delay.useSpinDelay)(transition.state !== "idle", {
    delay: 200,
    minDuration: 300
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex h-full rounded-lg bg-white text-gray-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-r border-gray-100 bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center gap-1"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, /* @__PURE__ */ React.createElement(FullFakebooksLogo, {
    size: "sm",
    position: "left"
  })), /* @__PURE__ */ React.createElement(Spinner, {
    visible: showSpinner
  })), /* @__PURE__ */ React.createElement("div", {
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
  }, "GitHub ", /* @__PURE__ */ React.createElement(UpRightArrowIcon, null)), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: "/logout",
    className: "my-1 py-1 px-2 pr-16 text-[length:14px]"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex gap-1 font-bold"
  }, "Logout ", /* @__PURE__ */ React.createElement(LogoutIcon, null)))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function NavItem({ to, children }) {
  return /* @__PURE__ */ React.createElement(NavLink, {
    to,
    prefetch: "intent",
    className: ({ isActive }) => `my-1 py-1 px-2 pr-16 text-[length:14px] ${isActive ? "rounded-md bg-gray-100" : ""}`
  }, children);
}
export {
  AppRoute as default
};
//# sourceMappingURL=/build/routes/__app-OUCG7T2E.js.map
