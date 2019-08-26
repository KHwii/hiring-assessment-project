import React from "react";
import ControlUser from "./ControlUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function PrintUsers(props) {
  return (
    <div>
      <div>유저 리스트</div>
      {props.users
        ? props.users.map(el => {
            return <ControlUser users={el} key={el.id} select={props.select} />;
          })
        : null}
      <div>
        <Link to={`/users/${this.id}`}>선택</Link>
        <Link to="/" className="select-btn">
          뒤로 가기
        </Link>
      </div>
    </div>
  );
}
