import * as actionType from "./note-types";

const initialState = {
  noteList: [],
};
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_NOTELIST:
      const isInList = state.noteList.find((noteItem) =>
        noteItem.noteTime === action.payload.noteTime &&
        noteItem.noteContent === action.payload.noteContent
          ? true
          : false
      );
      break;
    default:
      return state;
  }
};
