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
      <Route path="/" exact component={Header} />
      <Route path="/posts" exact component={Board} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/:id" exact component={EachUser} />
      <Route path="/users/:id/todos" exact component={UserTodos} />
    </Router>
  );
}

export default App;
