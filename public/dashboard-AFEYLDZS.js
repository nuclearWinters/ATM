import {
  Layer,
  __toESM,
  inject,
  props,
  require_jsx_runtime,
  useStore
} from "./chunk-MZDSX57E.js";

// src/pages/dashboard/dashboard.css.tsx
var _inject2 = inject;
_inject2(".textAlign-x2b8uid{text-align:center}", 3e3);
_inject2(".padding-x1uvv1pg{padding:20px 20px 6px 20px}", 1e3);
_inject2(".fontSize-x1jchvi3{font-size:1rem}", 3e3);
var dashboardStyles = {
  text: {
    textAlign: "textAlign-x2b8uid",
    padding: "padding-x1uvv1pg",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    fontSize: "fontSize-x1jchvi3",
    $$css: "dashboard/dashboard.css.tsx:4"
  }
};

// src/pages/dashboard/dashboard.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Dashboard = () => {
  const [name] = useStore((store) => store.name);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layer, { buttonLeftPropsThree: {
    text: "Withdrawn",
    to: "/withdrawn"
  }, buttonLeftPropsFour: {
    text: "Deposit",
    to: "/deposit"
  }, buttonRightPropsTwo: {
    text: "Exit",
    to: "/",
    onClick: () => {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }, buttonRightPropsThree: {
    text: "Balance",
    to: "/balance"
  }, buttonRightPropsFour: {
    text: "Re-Enter PIN",
    to: "/password"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ...props(dashboardStyles.text), children: [
      "Hi ",
      name,
      "!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...props(dashboardStyles.text), children: "Please make a choice" })
  ] });
};
var dashboard_default = Dashboard;
export {
  Dashboard,
  dashboard_default as default
};
