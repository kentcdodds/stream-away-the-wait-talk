import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3CWVTRIT.js";

// app/utils.ts
init_react();
var import_react = __toESM(require_react());
var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
function asUTC(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}
function parseDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return asUTC(new Date(year, month - 1, day));
}

export {
  currencyFormatter,
  parseDate
};
//# sourceMappingURL=/build/_shared/chunk-KXSTZPLY.js.map
