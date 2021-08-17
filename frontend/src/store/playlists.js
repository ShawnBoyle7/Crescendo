const LOAD_PLAYLISTS = "playlists/LOAD_PLAYLISTS";

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

const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PLAYLISTS: {
      const allPlaylists = {}
      action.playlists.forEach(playlist => {
        allPlaylists[playlist.id] = playlist
      })
      return allPlaylists;
    }
      default: 
      return state;
  }
}

export default playlistReducer;