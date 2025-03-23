import JSResource from "../../JSResource";

export const PasswordEntryPoint = {
  root: JSResource("Password", () => import("./password")),
};
