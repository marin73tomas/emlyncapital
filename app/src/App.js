import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "./sections/Header";

const App = () => (
  <React.Fragment>
    <CssBaseline />

    <Header />
    <Container maxWidth="lg"></Container>
  </React.Fragment>
);
export default App;
