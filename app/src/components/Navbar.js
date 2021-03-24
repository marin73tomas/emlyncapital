import Box from "@material-ui/core/Box";
import { Link } from "react-scroll";
import styles from "../styles/index";
import logo from "../img/logo.png";
import Container from "@material-ui/core/Container";
const Navbar = () => {
  const classes = styles();

  return (
    <Container className={classes.navBar} maxWidth="lg">
      <img alt="logo" className={classes.logo} src={logo} />
      <ul className={classes.navBarMenu}>
        <li>
          <Link className={classes.link} id="/" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.link} id="about" smooth={true}>
            About Us
          </Link>
        </li>
        <li>
          <Link className={classes.link} id="coupons" smooth={true}>
            Coupons
          </Link>
        </li>
        <li>
          <Link className={classes.link} id="process" smooth={true}>
            Our Process
          </Link>
        </li>
        <li>
          <Link className={classes.link} id="home" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
