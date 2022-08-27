import * as actionType from "./note-types";
// Action add a note to notelist
export const addNote = (noteItem) => {
  return {
    type: actionType.ADD_NOTE,
    payload: {
      noteContent: noteItem.noteContent,
      noteTime: noteItem.noteTime,
      noteDate: noteItem.noteDate,
      noteId: noteItem.noteId,
    },
  };
};
// Action remove a note from notelist
export const removeNote = (noteItem) => {
  return {
    type: actionType.REMOVE_NOTE,
    payload: noteItem.noteId,
  };
};
// Action fetdata from LocalStorage
const fetchData = (list) => {
  return {
    type: actionType.FETCH_DATA,
    payload: list,
  };
};

// export const fetchRequest = () => {
//   return (dispatch) => {
//       (async () => {
//           try {
//        s
//         }
//     })();
//   };
// };
