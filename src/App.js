import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserCreate from "./components/UserCreate";
import UserList from "./components/Users";



export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={UserList}></Route>
        <Route exact path="/create" component={UserCreate}></Route>
      </Switch>
    </Router>
  );
}