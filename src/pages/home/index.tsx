import JSResource from "../../JSResource";

export const HomeEntryPoint = {
  root: JSResource("Home", () => import("./home")),
};
