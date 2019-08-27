import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Header from "./components/Header";
import EachUser from "./components/EachUser";
import Board from "./components/Board";
import UserTodos from "./components/UserTodos";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route exact path="/posts" component={Board} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:id" component={EachUser} />
      <Route exact path="/users/:id/todos" component={UserTodos} />
    </Router>
  );
}

export default App;
