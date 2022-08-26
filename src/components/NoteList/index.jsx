import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import "./style.scss";
NoteList.propTypes = {};
const noteList = [
  { noteContent: "aaa", noteDate: "04-04-2022", noteTime: "13:00:22" },
];
function NoteList(props) {
  return (
    <div className="note-list">
      {noteList.map((item, index) => (
        <NoteItem noteItem={item} key={index} />
      ))}
    </div>
  );
}

export default NoteList;
