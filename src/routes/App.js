import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" children={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
