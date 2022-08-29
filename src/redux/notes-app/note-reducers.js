import * as actionType from "./note-types";

const initialState = {
  noteList: [],
  selectedId: null,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add note to list
    // case actionType.ADD_NOTE:
    //   const newList = [...state.noteList];
    //   newList.push(action.payload);
    //   return { ...state, noteList: newList };

    // Remove note from list
    // case actionType.REMOVE_NOTE:
    //   const newList = [...state.noteList].filter(
    //     (item) => item.noteId != action.payload
    //   );
    //   return { ...state, noteList: newList };

    // Get data from local store/ call API
    case actionType.FETCH_DATA:
      return {
        ...state,
        noteList: action.payload,
      };

    // Update list after add / remove note
    case actionType.UPDATE_DATA:
      return {
        ...state,
        noteList: action.payload,
      };

    // Default
    default:
      return state;
  }
};

export default noteReducer;
