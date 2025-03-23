import JSResource from "../../JSResource";

export const BalanceEntryPoint = {
  root: JSResource("Balance", () => import("./balance")),
};
