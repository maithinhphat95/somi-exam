import * as actionType from "./note-types";

const initialState = {
  noteList: [],
  selectedId: null,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add note to list
    case actionType.ADD_NOTE: {
      const newList = [...state.noteList];
      newList.push(action.payload);

      return { ...state, noteList: newList };
    }
    // Remove note from list
    case actionType.REMOVE_NOTE: {
      const newList = [...state.noteList].filter(
        (item) => item.noteId != action.payload
      );
      return { ...state, noteList: newList };
    }

    // Default
    default:
      return state;
  }
};

export default noteReducer;
