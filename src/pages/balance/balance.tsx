import { type FC } from "react";
import { useStore } from "../../App";
import { Layer } from "../../components/Layer";
import * as stylex from "@stylexjs/stylex";
import { balanceStyles } from "./balance.css";

export const Balance: FC = () => {
  const [total] = useStore((state) => state.total);
  const [name] = useStore((state) => state.name);
  return (
    <Layer buttonRightPropsFour={{ text: "Back", to: "/dashboard" }}>
      <div {...stylex.props(balanceStyles.text)}>Account name: {name}</div>
      <div {...stylex.props(balanceStyles.text)}>
        Total amount: ${total.toFixed(2)}
      </div>
    </Layer>
  );
};

export default Balance;
