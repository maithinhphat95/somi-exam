import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useSelector } from "react-redux";
Header.propTypes = {};

function Header(props) {
  const [todaykNote, setTodayNote] = useState(true);
  const noteList = useSelector((state) => state.note.noteList);
  let today = new Date();
  return <div className="header"></div>;
}

export default Header;
