import { type FC } from "react";
import { Layer } from "../../components/Layer";
import * as stylex from "@stylexjs/stylex";
import { homeStyles } from "./home.css";

export const Home: FC = () => {
  return (
    <Layer buttonRightPropsFour={{ text: "Enter PIN", to: "/password" }}>
      <div {...stylex.props(homeStyles.text)}>Welcome to the ATM</div>
    </Layer>
  );
};

export default Home;
