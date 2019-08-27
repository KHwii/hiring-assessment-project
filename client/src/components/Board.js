import React from "react";
import { Link } from "react-router-dom";

export default function Board() {
  return (
    <div>
      <div>hello world</div>
      <Link to="/" className="select-btn">
        뒤로 가기
      </Link>
    </div>
  );
}
