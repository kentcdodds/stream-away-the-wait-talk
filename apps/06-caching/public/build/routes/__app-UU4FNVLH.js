import {
  FullFakebooksLogo,
  LogoutIcon,
  UpRightArrowIcon
} from "/build/_shared/chunk-ERJXMAAX.js";
import {
  Form,
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-CV5YO2YG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/06-caching/app/routes/__app.tsx?browser
init_react();

// app/routes/__app.tsx
init_react();
function AppRoute() {
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
//# sourceMappingURL=/build/routes/__app-UU4FNVLH.js.map
