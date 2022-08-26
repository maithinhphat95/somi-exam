import React, { useState } from "react";
import PropTypes from "prop-types";
import FormAddNote from "../../components/NoteAddForm";
import NoteList from "../../components/NoteList";

import "./style.scss";
Body.propTypes = {};

function Body(props) {
  const [noteList, setNoteList] = useState([]);
  const saveData = (arr) => {
    localStorage.setItem("data", JSON.stringify(arr));
  };
  const handleAddNote = (obj) => {
    setNoteList([...noteList, obj]);
    saveData(noteList);
  };
  console.log(noteList);
  return (
    <div className="body">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
      <div className="main-content">
        <FormAddNote handleAddNote={handleAddNote} />
        <NoteList />
      </div>
    </div>
  );
}

export default Body;
