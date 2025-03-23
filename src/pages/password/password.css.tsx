import * as stylex from "@stylexjs/stylex";

export const passwordStyles = stylex.create({
  errorText: {
    color: "#B00020",
    textAlign: "center",
    padding: "20px",
    fontSize: "1rem",
  },
  text: {
    textAlign: "center",
    padding: "20px",
    fontSize: "1rem",
  },
  mainText: {
    textAlign: "center",
    padding: "20px",
    fontSize: "1.5rem",
  },
  input: {
    width: "90%",
    margin: "0px auto",
    fontSize: "1.5rem",
    fontFamily: '"Press Start 2P"',
  }
});
