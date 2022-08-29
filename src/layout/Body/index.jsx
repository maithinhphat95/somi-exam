import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormAddNote from "../../components/NoteAddForm";
import NoteList from "../../components/NoteList";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../../redux/notes-app/note-actions";
import "./style.scss";
Body.propTypes = {};

function Body(props) {
  // Hook
  let dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("data")) {
      dispatch(fetchRequest());
    }
  }, [localStorage.getItem("data")]);

  const noteList = useSelector((state) => state.note.noteList);

  return (
    <div className="body">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
      <div className="main-content">
        <FormAddNote noteList={noteList} />
        <NoteList noteList={noteList} />
      </div>
    </div>
  );
}

export default Body;
