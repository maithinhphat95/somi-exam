import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";

FormAddNote.propTypes = {};

function FormAddNote(props) {
  const { handleAddNote } = props;
  // Hook
  const [note, setNote] = useState({
    noteContent: "",
    noteDate: "",
    noteTime: "",
  });
  const [isInput, setIsInput] = useState({
    isContent: true,
    isDate: true,
    isTime: true,
  });
  const handleChangeInput = (name, value) => {
    let today = new Date();

    switch (name) {
      case "noteContent":
        setNote({ ...note, [name]: value });
        setIsInput({ ...isInput, isContent: false });
        break;
      case "noteDate":
        if (value >= today.toISOString().split("T")[0]) {
          setNote({ ...note, [name]: value });
          setIsInput({ ...isInput, isDate: false });
        } else {
          alert("Please don't input the day in the past");
        }
        break;
      case "noteTime":
        setIsInput({ ...isInput, isTime: false });

        break;
      default:
        break;
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
