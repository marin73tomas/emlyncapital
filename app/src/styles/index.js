import { makeStyles } from "@material-ui/core/styles";
import heroImg from "../img/Hero.jpg";
export const GOLD_COLOR = "#CDB37B";
export const BLACK_COLOR = "#232323";
const myStyles = makeStyles({
  root: {
    fontFamily: "Roboto",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3em",
    position: "relative",
  },
  navBarMenu: {
    display: "flex",
    alignItems: "center",
    gap: "3em",
    color: "white",
    listStyle: "none",
    lineHeight: "1",
    fontSize: "21px",
    fontWeight: 400,
  },
  link: {
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
    transition: "all 0.15s linear",
    display: "flex",
  },
  header: {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    "&::before": {
      content: "''",
      backgroundColor: "black",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      opacity: 0.3,
    },
  },
  logo: {
    maxWidth: "80px",
    padding: "1em 0",
  },
  h2: {
    fontWeight: 600,
    fontSize: "54px",
  },
  h3: {
    fontWeight: 600,
    fontSize: "35px",
  },
  goldText: {
    color: GOLD_COLOR,
  },
  whiteText: {
    color: "white",
  },
  button: {
    borderRadius: "20px",
    padding: "12px 24px",
    color: BLACK_COLOR,
  },
  goldButton: {
    backgroundColor: GOLD_COLOR,
  },
  whiteButton: {
    backgroundColor: "white",
  },
  hero: {
    position: "relative",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5em",
    marginTop: "20vh",
  },
});

export default myStyles;
