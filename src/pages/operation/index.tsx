import JSResource from "../../JSResource";

export const OperationEntryPoint = {
  root: JSResource("Operation", () => import("./operation")),
};
