import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route component={Login} />
      </div>
    </Router>
  );
}

export default App;
