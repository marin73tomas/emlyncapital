import { makeStyles } from "@material-ui/core/styles";
import heroImg from "../img/Hero.jpg";

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
  header: {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  logo: {
    maxWidth: "80px",
    padding: "1em 0",
  },
});
export default myStyles;
