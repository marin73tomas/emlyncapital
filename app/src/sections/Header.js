import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Box from "@material-ui/core/Box";
import styles from "../styles/index";
const classes = styles();

export default function Header() {
  return (
    <Box className={classes.hero} component="section" m={1}>
      <Navbar />
      <Hero />
    </Box>
  );
}
