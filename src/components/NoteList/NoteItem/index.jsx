import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  removeNote,
  updateDataRequest,
} from "../../../redux/notes-app/note-actions";
NoteItem.propTypes = {};

function NoteItem(props) {
  const { noteItem } = props;
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.note.noteList);

  let active = false;
  let today = new Date();
  if (
    parseInt(noteItem.noteDate.slice(5, 7)) == today.getMonth() + 1 &&
    parseInt(noteItem.noteDate.slice(8, 10)) == today.getDate()
  ) {
    active = true;
  }

  const handleRemoveNote = () => {
    // let action = removeNote(noteItem);
    // dispatch(action);
    let newList =
      noteList.length == 0
        ? []
        : noteList.filter((item) => item.noteId != noteItem.noteId);
    updateDataRequest(newList);
    console.log(updateDataRequest);
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
