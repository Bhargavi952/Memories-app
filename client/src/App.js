import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./Comonents/Navbar/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Comonents/Home/Home";
import Auth from "./Comonents/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container></BrowserRouter>
  );
};

export default App;
