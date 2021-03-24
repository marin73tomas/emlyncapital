import React from "react";
import styles from "../styles/index";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import classNames from "classnames";

export default function Hero() {
  const classes = styles();
  return (
    <Container maxWidth="sm" className={classes.hero}>
      <Typography
        component="h2"
        className={classNames(classes.h2, classes.goldText)}
      >
        EMLYN CAPITAL
      </Typography>
      <Typography
        component="h3"
        className={classNames(classes.h3, classes.whiteText)}
      >
        We protect your capital
      </Typography>
      <Link
        to="contact"
        className={classNames(classes.link, classes.button, classes.goldButton)}
      >
        Contact Us
      </Link>
    </Container>
  );
}
