import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "./sections/Header";
import styles from "./styles/index";

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg"></Container>
    </div>
  );
};
export default App;
