import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Contact from "../components/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" children={Home} />
          <Route path="/about" component={About} />
          <Route path="/proyects" component={Proyects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
