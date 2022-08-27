import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";
import "./style.scss";
NoteList.propTypes = {};

function NoteList(props) {
  const { noteList } = props;
  return (
    <div className="note-list">
      {noteList.map((item, index) => (
        <NoteItem noteItem={item} key={index} />
      ))}
    </div>
  );
}

export default NoteList;
