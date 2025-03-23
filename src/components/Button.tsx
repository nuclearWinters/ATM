import { FC } from "react";
import { RoutePath } from "../routes";
import { HomeEntryPoint } from "../pages/home";
import { DashboardEntryPoint } from "../pages/dashboard";
import { PasswordEntryPoint } from "../pages/password";
import { BalanceEntryPoint } from "../pages/balance";
import { OperationEntryPoint } from "../pages/operation";
import { useNavigation } from "../App";
import * as stylex from "@stylexjs/stylex";
import { buttonStyles } from "./Button.css";

export const Button: FC<{
  side: "left" | "right";
  text?: string;
  to?: RoutePath;
  onClick?: () => void;
}> = ({ side, text, to, onClick }) => {
  const { historyPush } = useNavigation();
  const isLeft = side === "left";
  const isRight = side === "right";
  const preloadRouteCode = () => {
    if (to === "/") {
      HomeEntryPoint.root.load();
    } else if (to === "/dashboard") {
      DashboardEntryPoint.root.load();
    } else if (to === "/password") {
      PasswordEntryPoint.root.load();
    } else if (to === "/balance") {
      BalanceEntryPoint.root.load();
    } else if (to === "/withdrawn" || to === "/deposit") {
      OperationEntryPoint.root.load();
    }
  };
  const onClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick?.();
    if (to) {
      historyPush(to);
    }
  };
  return (
    <div {...stylex.props(buttonStyles.container)}>
      {isRight ? (
        <div {...stylex.props(buttonStyles.grayStick)}>
          {text ? (
            <div {...stylex.props(buttonStyles.rightStickContainer)}>
              <div {...stylex.props(buttonStyles.text)}>{text}</div>
              <div {...stylex.props(buttonStyles.whiteStick)} />
            </div>
          ) : null}
        </div>
      ) : null}
      <a
        href={to}
        onClick={onClickHandler}
        onMouseEnter={preloadRouteCode}
        {...stylex.props(buttonStyles.link)}
      />
      {isLeft ? (
        <>
          <div {...stylex.props(buttonStyles.grayStick)}>
            {text ? (
              <div {...stylex.props(buttonStyles.leftStickContainer)}>
                <div {...stylex.props(buttonStyles.whiteStick)} />
                <div {...stylex.props(buttonStyles.text)}>{text}</div>
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
};
