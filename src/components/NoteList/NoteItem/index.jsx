import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import { removeNote } from "../../../redux/notes-app/note-actions";
NoteItem.propTypes = {};

function NoteItem(props) {
  const { noteItem } = props;
  const dispatch = useDispatch();
  let active = false;
  let today = new Date();
  if (
    parseInt(noteItem.noteDate.slice(5, 7)) == today.getMonth() + 1 &&
    parseInt(noteItem.noteDate.slice(8, 10)) == today.getDate()
  ) {
    active = true;
  }

  const handleRemoveNote = () => {
    let action = removeNote(noteItem);
    dispatch(action);
    console.log(action);
  };
  return (
    <div className={`note-item ${active ? "active" : null}`}>
      <h3>{`Ngày: ${noteItem.noteDate}`}</h3>
      <p>{`Thời gian: ${noteItem.noteTime}`}</p>
      <p>{`${noteItem.noteContent}`}</p>
      <button
        className="remove-btn"
        onClick={() => {
          handleRemoveNote();
        }}
      >
        X
      </button>
    </div>
  );
}

export default NoteItem;
