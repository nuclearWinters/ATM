import { useState, type FC } from "react";
import { useNavigation, useSetStore } from "../../App";
import { Layer } from "../../components/Layer";
import * as stylex from "@stylexjs/stylex";
import { passwordStyles } from "./password.css";

export interface User {
  name: string;
  total: number;
}

export const isUser = (user: unknown): user is User => {
  return (
    typeof user === "object" &&
    user !== null &&
    "name" in user &&
    typeof user.name === "string" &&
    "total" in user &&
    typeof user.total === "number"
  );
};

const authRequest = async (password: string) => {
  return new Promise<{ name: string; total: number }>((resolve, reject) => {
    setTimeout(() => {
      if (password !== "1234") return reject();
      const user = localStorage.getItem("userData");
      if (!user) return reject();
      const userData: unknown = JSON.parse(user);
      if (isUser(userData)) {
        localStorage.setItem("token", btoa(String(Date.now() + 1000 * 60 * 3)));
        return resolve(userData);
      }
      reject();
    }, 500);
  });
};

export const Home: FC = () => {
  const { historyPush } = useNavigation();
  const dispatch = useSetStore();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layer
      buttonRightPropsFour={{
        text: "Exit",
        to: "/",
        onClick: () => {
          localStorage.removeItem("token");
          window.location.reload();
        },
      }}
    >
      <div {...stylex.props(passwordStyles.mainText)}>Enter password</div>
      <input
        {...stylex.props(passwordStyles.input)}
        disabled={isLoading}
        autoFocus
        type="text"
        value={value}
        inputMode="numeric"
        maxLength={4}
        placeholder="1234"
        onChange={async (e) => {
          const value = e.target.value.replace(/\D/g, "");
          setValue(value);
          setError("");
          if (value.length === 4) {
            try {
              setIsLoading(true);
              const user = await authRequest(value);
              dispatch(user);
              historyPush("/dashboard");
            } catch {
              setValue("");
              setError("Invalid password");
            } finally {
              setIsLoading(false);
            }
          }
        }}
      />
      {error ? (
        <div {...stylex.props(passwordStyles.errorText)}>{error}</div>
      ) : null}
      {isLoading ? (
        <div {...stylex.props(passwordStyles.text)}>Loading...</div>
      ) : null}
    </Layer>
  );
};

export default Home;
