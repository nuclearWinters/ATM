import * as stylex from "@stylexjs/stylex";

export const layerStyles = stylex.create({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    background: "#9f80ac",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    margin: "10px 10px 0px 10px",
    background: "#126cae",
    height: "140px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "720px",
    width: "calc(100% - 20px)",
  },
  atmBody: {
    display: "flex",
    flex: 1,
    margin: "0px 40px 0px 40px",
    flexDirection: "column",
    background: "#f1f0e7",
    maxWidth: "660px",
    width: "calc(100% - 80px)",
  },
  atmBodyTop: {
    height: "14px",
    background: "#bebebe",
  },
  atmCardContainer: {
    height: "20px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCards: {
    top: "0px",
    position: "absolute",
    clip: "rect(0px, 30px, 20px, 0px)",
  },
  inactiveCards: {
    top: "-22px",
    position: "absolute",
    clip: "rect(20px, 1000px, 50px, 0px)",
  },
  actionsContainer: {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    padding: "20px 20px 100px 20px",
    maxHeight: "300px",
  },
  screen: {
    background: "#7eb4d5",
    border: "6px solid #e1e1d6",
    position: "relative",
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  columnButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "20px",
  },
  systems: {
    position: "absolute",
    bottom: -16,
    right: 0,
  },
  sticker: {
    position: "absolute",
    bottom: -100,
    left: -50,
  },
  graffiti: {
    position: "absolute",
    bottom: "50px",
    left: "50%",
  }
});
