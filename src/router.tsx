import { FC, ReactNode, Suspense, useEffect, useTransition } from "react";
import {
  Routes,
  RouteHome,
  RouteDashboard,
  RoutePassword,
  RouteBalance,
  RouteDeposit,
  RouteWithdrawn,
  RoutePath,
  paths,
  RoutePathsVisitor,
  RoutePathAuth,
} from "./routes";
import { useSetStore, useStore } from "./App";

function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

export function getPageLogged(path: RoutePathAuth): ReactNode {
  switch (path) {
    case paths.DASHBOARD:
      return <RouteDashboard />;
    case paths.PASSWORD:
      return <RoutePassword />;
    case paths.BALANCE:
      return <RouteBalance />;
    case paths.OPERATION:
      return <RouteWithdrawn />;
    case paths.DEPOSIT:
      return <RouteDeposit />;
    default:
      return assertUnreachable(path);
  }
}

export function getPageVisitor(path: RoutePathsVisitor): ReactNode {
  switch (path) {
    case paths.HOME:
      return <RouteHome />;
    case paths.PASSWORD:
      return <RoutePassword />;
    default:
      return assertUnreachable(path);
  }
}

export const MyRouter: FC = () => {
  const [, startTransition] = useTransition();
  const [path] = useStore((store) => store.path);
  const dispatch = useSetStore();

  useEffect(() => {
    const handlePop = () => {
      startTransition(() => {
        dispatch({
          path: window.location.pathname as RoutePath,
        });
      });
    };
    window.addEventListener("popstate", handlePop);
    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes path={path} />
    </Suspense>
  );
};
