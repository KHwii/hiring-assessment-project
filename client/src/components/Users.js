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

  selectUser() {
    let selectedUser = document.body.querySelector("#user-select").value;
    this.setState({ selectedId: selectedUser });
  }

  render() {
    return (
      <div>
        <div>유저 리스트</div>
        <select
          id="user-select"
          size={`${this.state.data ? this.state.data.length : null}`}
          onChange={() => this.selectUser()}
        >
          {this.state.data
            ? this.state.data.map(el => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))
            : null}
        </select>
        <Link to={`/users/${this.state.selectedId}`} className="select-btn">
          선택
        </Link>
        <Link to="/" className="select-btn">
          뒤로 가기
        </Link>
      </div>
    );
  }
}
