import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class EachUser extends Component {
  constructor(match) {
    super(match);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://koreanjson.com/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));

    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(json => this.setState({ src: json.results[0].picture.medium }));

    fetch(`https://koreanjson.com/todos?userId=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json =>
        this.setState({ todos: json.filter(el => el.completed === true) })
      );
  }

  render() {
    return (
      <div>
        <div>
          <Link to={`/users/${this.props.match.params.id}`}>유저 프로필</Link>
          <span>
            <Link to={`/users/${this.props.match.params.id}/todos`}>투두</Link>
            <span>{this.state.todos ? this.state.todos.length : null}</span>
          </span>
        </div>
        <div>
          <div>
            {this.state.src ? <img alt="" src={this.state.src} /> : null}
          </div>
          <div>
            <div>
              <span>이름</span>
              <span>{this.state.data ? this.state.data.name : null}</span>
            </div>
            <div>
              <span>이메일</span>
              <span>{this.state.data ? this.state.data.email : null}</span>
            </div>
            <div>
              <span>모바일</span>
              <span>{this.state.data ? this.state.data.phone : null}</span>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Link to="/" className="select-btn">
            Home
          </Link>
          <Link to="/users" className="select-btn">
            뒤로 가기
          </Link>
        </div>
      </div>
    );
  }
}
