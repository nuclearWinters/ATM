import JSResource from "../../JSResource";

export const DashboardEntryPoint = {
  root: JSResource("Dashboard", () => import("./dashboard")),
};