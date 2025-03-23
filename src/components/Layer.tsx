import { type ReactNode, type FC } from "react";
import { Button } from "../components/Button";
import sprite from "../assets/creditcard_sprite.png";
import atm from "../assets/atm_sign.png";
import { RoutePath } from "../routes";
import { useStore } from "../App";
import { layerStyles } from "./Layer.css";
import * as stylex from "@stylexjs/stylex";
import systems from "../assets/systems.png";
import sticker from "../assets/sticker_graf.png";
import graffiti from "../assets/graffiti.png";

export const Layer: FC<{
  children: ReactNode;
  buttonLeftPropsOne?: { text: string; to: RoutePath; onClick?: () => void };
  buttonLeftPropsTwo?: { text: string; to: RoutePath; onClick?: () => void };
  buttonLeftPropsThree?: { text: string; to: RoutePath; onClick?: () => void };
  buttonLeftPropsFour?: { text: string; to: RoutePath; onClick?: () => void };
  buttonRightPropsOne?: { text: string; to: RoutePath; onClick?: () => void };
  buttonRightPropsTwo?: { text: string; to: RoutePath; onClick?: () => void };
  buttonRightPropsThree?: { text: string; to: RoutePath; onClick?: () => void };
  buttonRightPropsFour?: { text: string; to: RoutePath; onClick?: () => void };
}> = ({
  children,
  buttonLeftPropsOne,
  buttonLeftPropsTwo,
  buttonLeftPropsThree,
  buttonLeftPropsFour,
  buttonRightPropsOne,
  buttonRightPropsTwo,
  buttonRightPropsThree,
  buttonRightPropsFour,
}) => {
  const [name] = useStore((store) => store.name);
  return (
    <div {...stylex.props(layerStyles.container)}>
      <div {...stylex.props(layerStyles.background)}>
        <div {...stylex.props(layerStyles.imageContainer)}>
          <img src={atm} />
          <div {...stylex.props(layerStyles.graffiti)}>
            <img src={graffiti} />
          </div>
        </div>
        <div {...stylex.props(layerStyles.atmBody)}>
          <div {...stylex.props(layerStyles.atmBodyTop)}></div>
          <div {...stylex.props(layerStyles.atmCardContainer)}>
            {name ? (
              <img src={sprite} {...stylex.props(layerStyles.activeCards)} />
            ) : null}
            <img src={sprite} {...stylex.props(layerStyles.inactiveCards)} />
          </div>
          <div {...stylex.props(layerStyles.actionsContainer)}>
            <div {...stylex.props(layerStyles.columnButtons)}>
              <Button side="left" {...buttonLeftPropsOne} />
              <Button side="left" {...buttonLeftPropsTwo} />
              <Button side="left" {...buttonLeftPropsThree} />
              <Button side="left" {...buttonLeftPropsFour} />
            </div>
            <div {...stylex.props(layerStyles.screen)}>
              {children}
              <div {...stylex.props(layerStyles.systems)}>
                <img src={systems} />
              </div>
              <div {...stylex.props(layerStyles.sticker)}>
                <img src={sticker} />
              </div>
            </div>
            <div {...stylex.props(layerStyles.columnButtons)}>
              <Button side="right" {...buttonRightPropsOne} />
              <Button side="right" {...buttonRightPropsTwo} />
              <Button side="right" {...buttonRightPropsThree} />
              <Button side="right" {...buttonRightPropsFour} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
