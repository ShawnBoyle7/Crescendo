import { csrfFetch } from "./csrf"

const LOAD_PLAYLISTS = "playlists/LOAD_PLAYLISTS";
const ADD_PLAYLIST = "playlists/ADD_PLAYLIST";
const RENAME_PLAYLIST = "playlists/RENAME_PLAYLIST"

const renamePlaylist = (playlist) => ({
  type: RENAME_PLAYLIST,
  playlist,
});

const addPlaylist = (playlist) => ({
  type: ADD_PLAYLIST,
  playlist,
});


export const editPlaylist = (formData, userId) => async dispatch => {
  const res = await csrfFetch(`/api/playlists/${userId}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    const updatedPlaylist = await res.json();
    dispatch(renamePlaylist(updatedPlaylist));
    return updatedPlaylist;
  }
}

// 2.
export const createPlaylist = (formData) => async (dispatch) => {
  const response = await csrfFetch('/api/playlists', {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  // 4.
  if (response.ok) {
    const playlist = await response.json()
    dispatch((addPlaylist(playlist)));
    return playlist;
  }
};

const loadPlaylists = (playlists) => ({
  type: LOAD_PLAYLISTS,
  playlists
});

export const getPlaylists = () => async (dispatch) => {
  const response = await fetch('/api/playlists')

  if (response.ok) {
    const playlists = await response.json()
    dispatch((loadPlaylists(playlists)));
  };
};

const initialState = {}

// 5.
const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PLAYLISTS: {
      const allPlaylists = {}
      action.playlists.forEach(playlist => {
        allPlaylists[playlist.id] = playlist
      })
      return allPlaylists;
    }
    case ADD_PLAYLIST:
      const newState = {...state}
      newState[action.playlist.id] = action.playlist
      return newState;
    case RENAME_PLAYLIST:
      const newNewState = {...state}
      newNewState[action.playlist.id] = action.playlist
      return newNewState;
    default: 
      return state;
  }
}

export default playlistReducer;