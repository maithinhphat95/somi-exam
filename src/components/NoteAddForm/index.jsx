import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

FormAddNote.propTypes = {};

function FormAddNote(props) {
  const [note, setNote] = useState({
    noteContent: "",
    noteDate: "",
    noteTime: "",
  });
  const handleChangeInput = (name, value) => {
    let today = new Date();

    switch (name) {
      case "noteContent":
        setNote({ ...note, [name]: value });
        break;
      case "noteDate":
        if (value >= today.toISOString().split("T")[0]) {
          setNote({ ...note, [name]: value });
        } else {
          alert("Please don't input the day in the past");
        }
        break;
      case "noteTime":
        break;
      default:
        break;
    }
    console.log(note);
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
          <button>Lưu NGày</button>
        </div>
      </div>
      <div className="form-alert">
        <p>Bạn chưa nhập Nội Dung</p>
        <p>Bạn chưa chọn Ngày nhắc</p>
        <p>Bạn chưa chọn Giờ nhắc nhắc</p>
      </div>
    </div>
  );
}

export default FormAddNote;
