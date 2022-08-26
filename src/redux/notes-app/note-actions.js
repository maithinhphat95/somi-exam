import * as actionType from "./note-types";

export const addToList = (noteItem) => {
  return {
    type: actionType.ADD_TO_NOTELIST,
    payload: {
      noteContent: noteItem.noteContent,
      noteTime: noteItem.noteTime,
    },
  };
};
