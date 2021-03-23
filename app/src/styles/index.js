import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    backgroundImage: "/about-us-img.png",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  logo: {
    src: "/logo.png",
  },
});
export default useStyles;
