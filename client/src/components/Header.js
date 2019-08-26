import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>어플리케이션을 골라주세요</div>
      <Link to="/users" className="select-btn">
        투두
      </Link>
      <Link to="/posts" className="select-btn">
        게시판
      </Link>
    </div>
  );
}
