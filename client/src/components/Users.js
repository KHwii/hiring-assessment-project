import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: null };
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    fetch("https://koreanjson.com/users")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  selectUser(event) {
    this.setState({ selectedId: event });
  }

  render() {
    return (
      <div>
        <div>유저 리스트</div>
        {this.state.data
          ? this.state.data.map(el => (
              <span onClick={() => this.selectUser(el.id)}>{el.name}</span>
            ))
          : null}
        <Link to={`/users/${this.state.selectedId}`}>선택</Link>
        <Link to="/" className="select-btn">
          뒤로 가기
        </Link>
      </div>
    );
  }
}
