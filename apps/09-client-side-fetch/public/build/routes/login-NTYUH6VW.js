import "/build/_shared/chunk-KXSTZPLY.js";
import {
  FullFakebooksLogo,
  inputClasses
} from "/build/_shared/chunk-HLO6UIGL.js";
import {
  Form,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-Z5ZUHZN2.js";
import {
  require_session
} from "/build/_shared/chunk-HPBXQUCY.js";
import {
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// empty-module:~/models/user.server
var require_user = __commonJS({
  "empty-module:~/models/user.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/kentcdodds/Desktop/stream-away-the-wait-talk/apps/09-client-side-fetch/app/routes/login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var meta = () => {
  return {
    title: "Login to Fakebooks"
  };
};
function LoginPage() {
  var _a, _b, _c, _d, _e;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : "";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-12"
  }, /* @__PURE__ */ React.createElement(FullFakebooksLogo, {
    size: "lg",
    position: "center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "text-sm block font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: inputClasses
  }), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "text-sm block font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "current-password",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: inputClasses
  }), ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4 md:flex-row md:gap-6"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "login",
    className: "w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400"
  }, "Log in"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "signup",
    className: "w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "remember",
    name: "remember",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "remember",
    className: "text-sm ml-2 block text-gray-900"
  }, "Remember me"))))));
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-NTYUH6VW.js.map
