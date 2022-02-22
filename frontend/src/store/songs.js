/* eslint-disable default-param-last */

const LOAD_SONGS = 'songs/LOAD_SONGS';

const loadSongs = (songs) => ({
  type: LOAD_SONGS,
  songs,
});

export const getSongs = () => async (dispatch) => {
  const response = await fetch('/api/songs');

  if (response.ok) {
    const songs = await response.json();
    await dispatch((loadSongs(songs)));
  }
};

const initialState = {};

const songReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case LOAD_SONGS: {
      action.songs.forEach((song) => {
        stateCopy[song.id] = song;
      });
      return stateCopy;
    }
    default:
      return state;
  }
};

export default songReducer;
