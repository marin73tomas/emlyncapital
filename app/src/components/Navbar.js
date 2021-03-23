import Box from "@material-ui/core/Box";
import { Link } from "react-scroll";
import styles from "../styles/index";
const classes = styles();
const Navbar = () => (
  <Box component="div" className={classes.navBar}>
    <img alt="logo" src="/logo.png" />
    <ul>
      <li>
        <Link id="/" smooth={true}>
          Home
        </Link>
      </li>
      <li>
        <Link id="about" smooth={true}>
          About Us
        </Link>
      </li>
      <li>
        <Link id="coupons" smooth={true}>
          Coupons
        </Link>
      </li>
      <li>
        <Link id="process" smooth={true}>
          Our Process
        </Link>
      </li>
      <li>
        <Link id="home" smooth={true}>
          Contact
        </Link>
      </li>
    </ul>
  </Box>
);

export default Navbar;
