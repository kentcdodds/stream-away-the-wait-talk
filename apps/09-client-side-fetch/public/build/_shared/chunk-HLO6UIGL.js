import {
  React,
  init_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// ../../node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// app/components.tsx
init_react();
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
  return /* @__PURE__ */ React.createElement("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
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
  return /* @__PURE__ */ React.createElement("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 5.75v12.5M18.25 12H5.75"
  }));
}
function MinusIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "24px",
    height: "24px",
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18.25 12.25H5.75"
  }));
}
function CevronDownIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.25 10.75 12 14.25l-3.25-3.5"
  }));
}
function TrashIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m5.75 7.75.841 9.673a2 2 0 0 0 1.993 1.827h5.832a2 2 0 0 0 1.993-1.827l.841-9.673H5.75ZM9.75 10.75v5.5M13.25 10.75v5.5M8.75 7.75v-1a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v1M4.75 7.75h13.5",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function LogoutIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m15.75 8.75 3.5 3.25-3.5 3.25M19 12h-8.25M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"
  }));
}
function UpRightArrowIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.25 15.25v-8.5h-8.5M17 7 6.75 17.25"
  }));
}
function SpinnerIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 24,
    height: 24,
    fill: "none",
    ...props
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function InvoiceDetailsFallback() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-[56px] items-center border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[14px] w-full animate-pulse rounded bg-gray-300"
  }, "\xA0")), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-[56px] items-center border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[14px] w-full animate-pulse rounded bg-gray-300"
  }, "\xA0")));
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
function CustomerSkeleton({
  name,
  email
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative p-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:14px] font-bold leading-6"
  }, email), /* @__PURE__ */ React.createElement("div", {
    className: "text-[length:32px] font-bold leading-[40px]"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-m-h3 font-bold leading-8"
  }, "Invoices"), /* @__PURE__ */ React.createElement("div", {
    className: "h-4"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-[56px] items-center border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[14px] w-full animate-pulse rounded bg-gray-300"
  }, "\xA0")), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-[56px] items-center border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[14px] w-full animate-pulse rounded bg-gray-300"
  }, "\xA0"))));
}
function Spinner({ visible }) {
  return /* @__PURE__ */ React.createElement(SpinnerIcon, {
    className: clsx_m_default("animate-spin transition-opacity", {
      "opacity-0": !visible,
      "opacity-100": visible
    })
  });
}

export {
  clsx_m_default,
  inputClasses,
  submitButtonClasses,
  dangerButtonClasses,
  LabelText,
  FullFakebooksLogo,
  FilePlusIcon,
  PlusIcon,
  MinusIcon,
  CevronDownIcon,
  TrashIcon,
  LogoutIcon,
  UpRightArrowIcon,
  InvoiceDetailsFallback,
  ErrorFallback,
  CustomerSkeleton,
  Spinner
};
//# sourceMappingURL=/build/_shared/chunk-HLO6UIGL.js.map
