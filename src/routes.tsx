import { FC, Suspense, use } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { HomeEntryPoint } from "./pages/home";
import { DashboardEntryPoint } from "./pages/dashboard";
import { PasswordEntryPoint } from "./pages/password";
import { BalanceEntryPoint } from "./pages/balance";
import { OperationEntryPoint } from "./pages/operation";
import { useStore } from "./App";
import { getPageLogged, getPageVisitor } from "./router";

export const Routes: FC<{
  path: RoutePath;
}> = ({ path }) => {
  const [cache] = useStore((store) => store.cache);
  const [name] = useStore((store) => store.name);
  const promise = cache["session"];
  use(promise);
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        {name
          ? getPageLogged(path as RoutePathAuth)
          : getPageVisitor(path as RoutePathsVisitor)}
      </Suspense>
    </ErrorBoundary>
  );
};

export const paths = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PASSWORD: "/password",
  BALANCE: "/balance",
  OPERATION: "/withdrawn",
  DEPOSIT: "/deposit",
} as const;

type Paths = typeof paths;

export type RoutePath = Paths[keyof Paths];

export type RoutePathAuth = Paths[keyof Omit<Paths, "HOME">];

export type RoutePathsVisitor = Paths[keyof Pick<Paths, "HOME" | "PASSWORD">];

export const RouteHome: FC = () => {
  const Module = HomeEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module />;
  }
  const Component = use(HomeEntryPoint.root.load());
  return <Component />;
};

export const RouteDashboard: FC = () => {
  const Module = DashboardEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module />;
  }
  const Component = use(DashboardEntryPoint.root.load());
  return <Component />;
};

export const RoutePassword: FC = () => {
  const Module = PasswordEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module />;
  }
  const Component = use(PasswordEntryPoint.root.load());
  return <Component />;
};

export const RouteBalance: FC = () => {
  const Module = BalanceEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module />;
  }
  const Component = use(BalanceEntryPoint.root.load());
  return <Component />;
};

export const RouteWithdrawn: FC = () => {
  const Module = OperationEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module action="withdrawn" />;
  }
  const Component = use(OperationEntryPoint.root.load());
  return <Component action="withdrawn" />;
};

export const RouteDeposit: FC = () => {
  const Module = OperationEntryPoint.root.getModuleIfRequired();
  if (Module) {
    return <Module action="deposit" />;
  }
  const Component = use(OperationEntryPoint.root.load());
  return <Component action="deposit" />;
};
