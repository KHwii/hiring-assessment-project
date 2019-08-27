import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class UserTodos extends Component {
  constructor(match) {
    super(match);
    this.state = {};
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    fetch(`https://koreanjson.com/todos?userId=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }

  async handleSelect() {
    let selectTagVal = document.body.querySelector("#select-todo").value;
    let booleanVal = selectTagVal === "true";
    if (selectTagVal === "true" || selectTagVal === "false") {
      await fetch(
        `https://koreanjson.com/todos?userId=${this.props.match.params.id}`
      )
        .then(res => res.json())
        .then(json =>
          this.setState({
            todos: json.filter(el => el.completed === booleanVal)
          })
        );
    } else {
      await fetch(
        `https://koreanjson.com/todos?userId=${this.props.match.params.id}`
      )
        .then(res => res.json())
        .then(json =>
          this.setState({
            todos: json
          })
        );
    }
  }

  render() {
    return (
      <div>
        <Link
          to={`/users/${this.props.match.params.id}`}
          className="select-btn"
        >
          유저 프로필
        </Link>
        <Link
          to={`/users/${this.props.match.params.id}/todos`}
          className="select-btn"
        >
          투두
          <span>{this.state.todos ? this.state.todos.length : null}</span>
        </Link>
        <select id="select-todo" onChange={() => this.handleSelect()}>
          <option value="" selected>
            모든 투두
          </option>
          <option value="false">미완료 투두</option>
          <option value="true">완료 투두</option>
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
