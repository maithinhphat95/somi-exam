import React, { useState } from "react";
import PropTypes from "prop-types";
import FormAddNote from "../../components/NoteAddForm";
import NoteList from "../../components/NoteList";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
Body.propTypes = {};

function Body(props) {
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
