import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useSelector } from "react-redux";
Header.propTypes = {};

function Header(props) {
  const [checkNote, setCheckNote] = useState(true);
  const noteList = useSelector((state) => state.note.noteList);
  let today = new Date();
  console.log(noteList[0].noteDate.slice(5, 7));
  console.log(noteList[0].noteDate.slice(8, 10));

  return <div className="header"></div>;
}

export default Header;
