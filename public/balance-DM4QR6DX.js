import {
  Layer,
  __toESM,
  inject,
  props,
  require_jsx_runtime,
  useStore
} from "./chunk-MZDSX57E.js";

// src/pages/balance/balance.css.tsx
var _inject2 = inject;
_inject2(".textAlign-x2b8uid{text-align:center}", 3e3);
_inject2(".padding-x1qhigcl{padding:20px}", 1e3);
_inject2(".fontSize-x1jchvi3{font-size:1rem}", 3e3);
var balanceStyles = {
  text: {
    textAlign: "textAlign-x2b8uid",
    padding: "padding-x1qhigcl",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    fontSize: "fontSize-x1jchvi3",
    $$css: "balance/balance.css.tsx:4"
  }
};

// src/pages/balance/balance.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Balance = () => {
  const [total] = useStore((state) => state.total);
  const [name] = useStore((state) => state.name);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layer, { buttonRightPropsFour: {
    text: "Back",
    to: "/dashboard"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...props(balanceStyles.text), children: [
      "Account name: ",
      name
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...props(balanceStyles.text), children: [
      "Total amount: $",
      total.toFixed(2)
    ] })
  ] });
};
var balance_default = Balance;
export {
  Balance,
  balance_default as default
};
