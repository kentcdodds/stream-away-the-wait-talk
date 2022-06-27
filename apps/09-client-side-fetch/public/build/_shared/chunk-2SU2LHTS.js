import {
  __commonJS,
  init_react,
  require_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// ../../node_modules/spin-delay/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/spin-delay/dist/index.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = global || self, factory(global.spinDelay = {}, global.react));
    })(exports, function(exports2, react) {
      const defaultOptions = {
        delay: 500,
        minDuration: 200
      };
      function useSpinDelay(loading, options) {
        options = Object.assign({}, defaultOptions, options);
        const [state, setState] = react.useState("IDLE");
        const timeout = react.useRef(null);
        react.useEffect(() => {
          if (loading && state === "IDLE") {
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
              if (!loading) {
                return setState("IDLE");
              }
              timeout.current = setTimeout(() => {
                setState("EXPIRE");
              }, options.minDuration);
              setState("DISPLAY");
            }, options.delay);
            setState("DELAY");
          }
          if (!loading && state !== "DISPLAY") {
            clearTimeout(timeout.current);
            setState("IDLE");
          }
        }, [loading, state, options.delay, options.minDuration]);
        react.useEffect(() => {
          return () => clearTimeout(timeout.current);
        }, []);
        return state === "DISPLAY" || state === "EXPIRE";
      }
      exports2.default = useSpinDelay;
      exports2.defaultOptions = defaultOptions;
      exports2.useSpinDelay = useSpinDelay;
    });
  }
});

export {
  require_dist
};
//# sourceMappingURL=/build/_shared/chunk-2SU2LHTS.js.map
