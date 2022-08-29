import * as actionType from "./notes-app/note-types";
import { combineReducers } from "redux";
import noteReducer from "./notes-app/note-reducers";

const rootReducer = combineReducers({
  note: noteReducer,
});

export default rootReducer;
