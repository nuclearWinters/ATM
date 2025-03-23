import * as stylex from "@stylexjs/stylex";

export const operationStyles = stylex.create({
  text: { textAlign: "center", padding: "20px", fontSize: "1.2rem" },
  input: {
    width: "90%",
    margin: "0px auto",
    fontSize: "1.2rem",
    fontFamily: '"Press Start 2P"',
  },
  button: {
    padding: "10px",
    margin: "20px auto 0px auto",
    backgroundColor: "#c1c1c1",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    borderTop: "4px solid #c9c9c7",
    borderBottom: "4px solid #9b9b9b",
    fontFamily: '"Press Start 2P"',
  }
});
