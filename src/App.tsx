import * as stylex from "@stylexjs/stylex";
import { type FC, useEffect } from "react";
import { MyRouter } from "./router";
import { createFastContext } from "./context";
import { RoutePath } from "./routes";
import { HomeEntryPoint } from "./pages/home";
import { DashboardEntryPoint } from "./pages/dashboard";
import { PasswordEntryPoint } from "./pages/password";
import { BalanceEntryPoint } from "./pages/balance";
import { OperationEntryPoint } from "./pages/operation";
import { isUser } from "./utils";

export const userData = {
  name: "John Doe",
  total: 1000,
};

if (localStorage.getItem("userData") === null) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

const requestSession = async () => {
  return new Promise<{ name: string; total: number }>((resolve, reject) => {
    setTimeout(() => {
      const token = localStorage.getItem("token");
      if (token === null || atob(token) < String(Date.now()))
        return resolve({ name: "", total: 0 });
      const user = localStorage.getItem("userData");
      if (!user) return resolve({ name: "", total: 0 });
      const userData = JSON.parse(user);
      if (isUser(userData)) {
        return resolve(userData);
      }
      resolve({ name: "", total: 0 });
    }, 500);
  });
};

const token = localStorage.getItem("token");

if (token === null || atob(token) < String(Date.now())) {
  localStorage.removeItem("token");
}

const sessionPromise = requestSession();

const pathname = window.location.pathname as RoutePath;

if (pathname === "/") {
  HomeEntryPoint.root.load();
} else if (pathname === "/dashboard") {
  DashboardEntryPoint.root.load();
} else if (pathname === "/password") {
  PasswordEntryPoint.root.load();
} else if (pathname === "/balance") {
  BalanceEntryPoint.root.load();
} else if (pathname === "/withdrawn" || pathname === "/deposit") {
  OperationEntryPoint.root.load();
}

export const { Provider, useSetStore, useStore, imperativeContext } =
  createFastContext({
    total: 0,
    name: "",
    path: window.location.pathname as RoutePath,
    cache: {
      session: sessionPromise.then((user) => {
        if (user.name) {
          if (window.location.pathname === "/") {
            window.history.pushState({}, "", "/dashboard");
            imperativeContext.set({
              ...user,
              path: "/dashboard",
            });
          } else {
            imperativeContext.set(user);
          }
        } else {
          if (!["/", "/password"].includes(window.location.pathname)) {
            window.history.pushState({}, "", "/");
            imperativeContext.set({
              ...user,
              path: "/",
            });
          }
        }
        return user;
      }),
    },
  });

export const useNavigation = () => {
  const dispatch = useSetStore();
  const historyPush = (path: RoutePath) => {
    window.history.pushState({}, "", path);
    dispatch({ path });
  };
  return { historyPush };
};

export const baseApp = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(248,248,248)",
    border: "20px solid blue",
  },
});

export const App: FC = () => {
  useEffect(() => {
    const EventSource = window.EventSource || function () {};
    const eventSource = new EventSource("/esbuild");
    eventSource?.addEventListener?.("change", () => location.reload());
    return () => eventSource?.close?.();
  }, []);
  useEffect(() => {
    let timer = setInterval(() => {
      const expireDate = localStorage.getItem("token");
      if (expireDate && atob(expireDate) < String(Date.now())) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Provider>
      <MyRouter />
    </Provider>
  );
};
