import * as stylex from "@stylexjs/stylex";

export const buttonStyles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  grayStick: {
    height: "6px",
    width: "24px",
    background: "#9b9b9b",
    position: "relative",
  },
  rightStickContainer: {
    position: "absolute",
    right: "30px",
    display: "flex",
    alignItems: "center",
    top: "-2px",
    zIndex: "10",
    gap: "10px",
  },
  text: {
    whiteSpace: "nowrap",
    color: "white",
    fontSize: "0.8rem",
    lineHeight: "10px",
  },
  whiteStick: {
    width: "24px",
    height: "6px",
    background: "white",
  },
  link: {
    backgroundColor: "#c1c1c1",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    height: "40px",
    width: "80px",
    borderTop: "4px solid #c9c9c7",
    borderBottom: "4px solid #9b9b9b",
  },
  leftStickContainer: {
    position: "absolute",
    left: "30px",
    display: "flex",
    alignItems: "center",
    top: "-2px",
    zIndex: "10",
    gap: "10px",
  },
});
