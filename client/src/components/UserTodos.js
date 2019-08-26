import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class UserTodos extends Component {
  constructor(match) {
    super(match);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://koreanjson.com/todos?userId=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }
  render() {
    return (
      <div>
        <select>
          <option selected>모든 투두</option>
          <option>미완료 투두</option>
          <option>완료 투두</option>
        </select>
        {this.state.todos
          ? this.state.todos.map(el => <div>{el.title}</div>)
          : null}
        <Link to="/" className="select-btn">
          Home
        </Link>
        <Link
          to={`/users/${this.props.match.params.id}`}
          className="select-btn"
        >
          뒤로 가기
        </Link>
      </div>
    );
  }
}
