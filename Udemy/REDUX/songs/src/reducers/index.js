import { combineReducers } from "redux";
//Reducers

const songsReducer = () => {
  return {
    songs: [
      { title: "No Scrubs", duration: "4:05" },
      { title: "All Star", duration: "3:15" },
      { title: "Macarena", duration: "1:45" },
    ],
    favoriteTitle: "All Star",
  };
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
