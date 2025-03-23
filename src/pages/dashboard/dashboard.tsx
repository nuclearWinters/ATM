import { type FC } from "react";
import { Layer } from "../../components/Layer";
import { useStore } from "../../App";
import * as stylex from "@stylexjs/stylex";
import { dashboardStyles } from "./dashboard.css";

export const Dashboard: FC = () => {
  const [name] = useStore((store) => store.name);
  return (
    <Layer
      buttonLeftPropsThree={{ text: "Withdrawn", to: "/withdrawn" }}
      buttonLeftPropsFour={{ text: "Deposit", to: "/deposit" }}
      buttonRightPropsTwo={{
        text: "Exit",
        to: "/",
        onClick: () => {
          localStorage.removeItem("token");
          window.location.reload();
        },
      }}
      buttonRightPropsThree={{ text: "Balance", to: "/balance" }}
      buttonRightPropsFour={{ text: "Re-Enter PIN", to: "/password" }}
    >
      <div {...stylex.props(dashboardStyles.text)}>Hi {name}!</div>
      <div {...stylex.props(dashboardStyles.text)}>Please make a choice</div>
    </Layer>
  );
};

export default Dashboard;
