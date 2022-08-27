import { combineReducers } from "redux";
import noteReducer from "./notes-app/note-reducers";
// const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  note: noteReducer,
});

export default rootReducer;
