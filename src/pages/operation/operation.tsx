import { useState, type FC } from "react";
import { useNavigation, useSetStore } from "../../App";
import { Layer } from "../../components/Layer";
import * as stylex from "@stylexjs/stylex";
import { operationStyles } from "./operation.css";

const operationRequest = async (
  value: string,
  action: "withdrawn" | "deposit"
) => {
  return new Promise<{ total: number }>((resolve, reject) => {
    setTimeout(() => {
      const user = localStorage.getItem("userData");
      if (!user) return reject();
      const userData = JSON.parse(user);
      if (typeof userData !== "object" || userData === null) return reject();
      if (typeof userData.total !== "number") return reject();
      if (action === "withdrawn") {
        if (userData.total - parseFloat(value) < 0) return reject();
        userData.total -= parseFloat(value);
      } else {
        userData.total += parseFloat(value);
      }
      localStorage.setItem("userData", JSON.stringify(userData));
      resolve(userData);
    }, 500);
  });
};

export const Operation: FC<{ action: "withdrawn" | "deposit" }> = ({
  action,
}) => {
  const { historyPush } = useNavigation();
  const dispatch = useSetStore();
  const [value, setValue] = useState("");
  const isDeposit = action === "deposit";
  return (
    <Layer buttonRightPropsFour={{ text: "Back", to: "/dashboard" }}>
      <div {...stylex.props(operationStyles.text)}>
        {isDeposit
          ? "Enter the amount to deposit"
          : "Enter the amount to withdrawn"}
      </div>
      <input
        {...stylex.props(operationStyles.input)}
        placeholder="0.00"
        autoFocus
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*\.?\d{0,2}$/.test(value)) {
            setValue(value);
          }
        }}
      />
      <button
        {...stylex.props(operationStyles.button)}
        onClick={async () => {
          try {
            const userData = await operationRequest(value, action);
            dispatch(userData);
            historyPush("/balance");
          } catch (e) {
            setValue("");
          }
        }}
      >
        Submit
      </button>
    </Layer>
  );
};

export default Operation;
