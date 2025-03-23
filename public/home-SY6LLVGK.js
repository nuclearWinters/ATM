import {
  Layer,
  __toESM,
  inject,
  props,
  require_jsx_runtime
} from "./chunk-MZDSX57E.js";

// src/pages/home/home.css.tsx
var _inject2 = inject;
_inject2(".textAlign-x2b8uid{text-align:center}", 3e3);
_inject2(".padding-x1qhigcl{padding:20px}", 1e3);
_inject2(".fontSize-xngnso2{font-size:1.5rem}", 3e3);
var homeStyles = {
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
    fontSize: "fontSize-xngnso2",
    $$css: "home/home.css.tsx:4"
  }
};

// src/pages/home/home.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Home = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, { buttonRightPropsFour: {
    text: "Enter PIN",
    to: "/password"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...props(homeStyles.text), children: "Welcome to the ATM" }) });
};
var home_default = Home;
export {
  Home,
  home_default as default
};
