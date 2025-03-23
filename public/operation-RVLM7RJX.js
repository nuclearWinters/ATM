import {
  Layer,
  __toESM,
  inject,
  props,
  require_jsx_runtime,
  require_react,
  useNavigation,
  useSetStore
} from "./chunk-MZDSX57E.js";

// src/pages/operation/operation.tsx
var import_react = __toESM(require_react());

// src/pages/operation/operation.css.tsx
var _inject2 = inject;
_inject2(".textAlign-x2b8uid{text-align:center}", 3e3);
_inject2(".padding-x1qhigcl{padding:20px}", 1e3);
_inject2(".fontSize-xvewgow{font-size:1.2rem}", 3e3);
_inject2(".width-xm6i5cn{width:90%}", 4e3);
_inject2(".margin-x19bbpc0{margin:0 auto}", 1e3);
_inject2('.fontFamily-xyl5qyx{font-family:"Press Start 2P"}', 3e3);
_inject2(".padding-x7z7khe{padding:10px}", 1e3);
_inject2(".margin-xgcql9v{margin:20px auto 0 auto}", 1e3);
_inject2(".backgroundColor-x1obw1pz{background-color:#c1c1c1}", 3e3);
_inject2(".color-x1awj2ng{color:white}", 3e3);
_inject2(".borderRadius-xur7f20{border-radius:8px}", 2e3);
_inject2(".border-x1gs6z28{border:none}", 1e3);
_inject2(".cursor-x1ypdohk{cursor:pointer}", 3e3);
_inject2(".borderTop-xokq9yq{border-top:4px solid #c9c9c7}", 2e3);
_inject2(".borderBottom-x13i6tur{border-bottom:4px solid #9b9b9b}", 2e3);
var operationStyles = {
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
    fontSize: "fontSize-xvewgow",
    $$css: "operation/operation.css.tsx:4"
  },
  input: {
    width: "width-xm6i5cn",
    margin: "margin-x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    fontSize: "fontSize-xvewgow",
    fontFamily: "fontFamily-xyl5qyx",
    $$css: "operation/operation.css.tsx:5"
  },
  button: {
    padding: "padding-x7z7khe",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    margin: "margin-xgcql9v",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    backgroundColor: "backgroundColor-x1obw1pz",
    color: "color-x1awj2ng",
    borderRadius: "borderRadius-xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: "border-x1gs6z28",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    cursor: "cursor-x1ypdohk",
    borderTop: "borderTop-xokq9yq",
    borderTopWidth: null,
    borderTopStyle: null,
    borderTopColor: null,
    borderBottom: "borderBottom-x13i6tur",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    fontFamily: "fontFamily-xyl5qyx",
    $$css: "operation/operation.css.tsx:11"
  }
};

// src/pages/operation/operation.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var operationRequest = async (value, action) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = localStorage.getItem("userData");
      if (!user) return reject();
      const userData = JSON.parse(user);
      if (typeof userData !== "object" || userData === null) return reject();
      if (typeof userData.total !== "number") return reject();
      if (action === "withdrawn") {
        if (userData.total - parseFloat(value) < 0) return reject();
        userData.total -= parseFloat(value);
      } else {
        userData.total += parseFloat(value);
      }
      localStorage.setItem("userData", JSON.stringify(userData));
      resolve(userData);
    }, 500);
  });
};
var Operation = ({
  action
}) => {
  const {
    historyPush
  } = useNavigation();
  const dispatch = useSetStore();
  const [value, setValue] = (0, import_react.useState)("");
  const isDeposit = action === "deposit";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layer, { buttonRightPropsFour: {
    text: "Back",
    to: "/dashboard"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...props(operationStyles.text), children: isDeposit ? "Enter the amount to deposit" : "Enter the amount to withdrawn" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ...props(operationStyles.input), placeholder: "0.00", autoFocus: true, value, onChange: (e) => {
      const value2 = e.target.value;
      if (/^\d*\.?\d{0,2}$/.test(value2)) {
        setValue(value2);
      }
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { ...props(operationStyles.button), onClick: async () => {
      try {
        const userData = await operationRequest(value, action);
        dispatch(userData);
        historyPush("/balance");
      } catch (e) {
        setValue("");
      }
    }, children: "Submit" })
  ] });
};
var operation_default = Operation;
export {
  Operation,
  operation_default as default
};
