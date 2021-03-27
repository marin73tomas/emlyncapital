import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Box from "@material-ui/core/Box";
import styles from "../styles/index";

export default function Header() {
  const classes = styles();
  return (
    <Box className={classes.header} component="section" m={0}>
      <Navbar />
      <Hero />
    </Box>
  );
}
