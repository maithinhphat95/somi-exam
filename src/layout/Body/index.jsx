import React from "react";
import PropTypes from "prop-types";
import FormAddNote from "../../components/NoteAddForm";
import NoteList from "../../components/NoteList";

import "./style.scss";
Body.propTypes = {};

function Body(props) {
  return (
    <div className="body">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
      <div className="main-content">
        <FormAddNote />
        <NoteList />
      </div>
    </div>
  );
}

export default Body;
