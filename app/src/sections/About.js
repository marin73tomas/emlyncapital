import React from "react";
import Grid from "@material-ui/core/Grid";
import imgAboutUs from "../img/about-us-img.png";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import styles from "../styles/index";

export default function About() {
  const classes = styles();

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Typography
              component="h3"
              className={classNames(classes.h2, classes.whiteText)}
            />

            <Typography />
          </Grid>
          <Grid item sm={12} md={6}>
            <img src={imgAboutUs} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
