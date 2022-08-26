import React from "react";
import PropTypes from "prop-types";

NoteItem.propTypes = {};

function NoteItem(props) {
  const { noteItem } = props;
  return (
    <div className="note-item">
      <h3>{`Ngày: ${noteItem.noteDate}`}</h3>
      <p>{`Thời gian: ${noteItem.noteTime}`}</p>
      <p>{`${noteItem.noteContent}`}</p>
    </div>
  );
}

export default NoteItem;
