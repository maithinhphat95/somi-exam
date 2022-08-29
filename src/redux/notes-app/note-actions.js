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
// Action save data from LocalStorage to the store
const fetchData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};
// Action get data from localstorage
export const fetchRequest = () => {
  return (dispatch) => {
    (async () => {
      console.log("thực thi call api");
      try {
        const data = await JSON.parse(localStorage.getItem("data"));
        dispatch(fetchData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
// Action update data after add / remove the note of note list
const updateData = (data) => {
  return {
    type: actionType.UPDATE_DATA,
    payload: data,
  };
};
// Action set data to local sotrage after update list
// export const updateDataRequest = (data) => {
//   return (dispatch) => {
//     (async () => {
//       try {
//         await localStorage.setItem("data", data);
//         dispatch(updateData(data));
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   };
// };

export const updateDataRequest = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await localStorage.setItem("data", JSON.stringify(data));
        dispatch(updateData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
