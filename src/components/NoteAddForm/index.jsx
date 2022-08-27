import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNote } from "../../redux/notes-app/note-actions";
import PropTypes from "prop-types";
import "./style.scss";

FormAddNote.propTypes = {};

function FormAddNote(props) {
  const { noteList } = props;
  // Hook
  const [note, setNote] = useState({
    noteContent: "",
    noteDate: "",
    noteTime: "",
    noteId: "",
  });
  const [isInput, setIsInput] = useState({
    isContent: true,
    isDate: true,
    isTime: true,
  });

  const dispatch = useDispatch();

  // Handle change the input value
  const handleChangeInput = (name, value) => {
    let today = new Date();
    switch (name) {
      // Handle input content note
      case "noteContent":
        setNote({ ...note, [name]: value });
        setIsInput({ ...isInput, isContent: false });
        break;
      // Handle input date note
      case "noteDate":
        if (value >= today.toISOString().split("T")[0]) {
          setNote({ ...note, [name]: value });
          setIsInput({ ...isInput, isDate: false });
        } else {
          alert("Please don't input the day in the past");
          setNote({
            ...note,
            [name]: "",
          });
        }
        break;
      // Handle input time note
      case "noteTime":
        if (note.noteDate !== "") {
          setIsInput({ ...isInput, isTime: false });
          setNote({
            ...note,
            [name]: value,
          });
        } else {
          alert("Bạn chưa chọn Ngày Nhắc");
          setNote({
            ...note,
            [name]: "",
          });
        }
        break;
      default:
        break;
    }
  };

  // Handle add note to list
  const handleAddNote = (noteItem) => {
    const check =
      noteItem.noteContent === "" ||
      noteItem.noteDate === "" ||
      noteItem.noteTime === "";
    if (check) {
      alert("Bạn chưa nhập đủ thông tin");
      return;
    } else {
      let id =
        noteList.length === 0 ? 0 : noteList[noteList.length - 1].noteId + 1;
      let newNote = { ...noteItem, noteId: id };
      const action = addNote(newNote);
      dispatch(action);
    }
  };

  return (
    <div className="add-form">
      <div className="add-form-item">
        <label htmlFor="form-item-content">Nội dung</label>
        <input
          name="noteContent"
          id="form-item-content"
          type="text"
          minLength={5}
          maxLength={80}
          placeholder="mời nhập nội dung của ngày"
          onChange={(e) => {
            handleChangeInput(e.target.name, e.target.value);
          }}
        />
      </div>
      <div>
        <div className="input-date-time">
          <div className="add-form-item">
            <label htmlFor="form-item-date">Ngày nhắc</label>
            <input
              name="noteDate"
              id="form-item-date"
              type="date"
              value={note.noteDate}
              onChange={(e) => {
                handleChangeInput(e.target.name, e.target.value);
              }}
            />
          </div>
          <div className="add-form-item">
            <label htmlFor="form-item-time">Giờ nhắc</label>
            <input
              name="noteTime"
              id="form-item-time"
              type="time"
              value={note.noteTime}
              onChange={(e) => {
                handleChangeInput(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-action">
          <button
            onClick={() => {
              handleAddNote(note);
            }}
          >
            Lưu NGày
          </button>
        </div>
      </div>
      <div className="form-alert">
        {isInput.isContent && <p>Bạn chưa nhập Nội Dung</p>}
        {isInput.isDate && <p>Bạn chưa chọn Ngày nhắc</p>}
        {isInput.isTime && <p>Bạn chưa chọn Giờ nhắc</p>}
      </div>
    </div>
  );
}

export default FormAddNote;
