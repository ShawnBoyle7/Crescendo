const LOAD_ARTISTS = "artists/LOAD_ARTISTS";

const loadArtists = (artists) => ({
  type: LOAD_ARTISTS,
  artists
});

export const getArtists = () => async (dispatch) => {
  const response = await fetch('/api/artists')

  if (response.ok) {
    const artists = await response.json()
    dispatch((loadArtists(artists)));
  };
};

const initialState = {}

const artistReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ARTISTS: {
      const allArtists = {}
      action.artists.forEach(artist => {
        allArtists[artist.id] = artist
      })
      return allArtists;
    }
      default: 
      return state;
  }
}

export default artistReducer;