import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
      </Switch>
    </Container>
  </main>
);

export default Main;
