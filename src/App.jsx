import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { mainPage } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={mainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
