const LOAD_ALBUMS = "artists/LOAD_ALBUMS";

const loadAlbums = (albums) => ({
  type: LOAD_ALBUMS,
  albums
});

export const getAlbums = () => async (dispatch) => {
  const response = await fetch('/api/albums')

  if (response.ok) {
    const albums = await response.json()
    dispatch((loadAlbums(albums)));
  };
};

const initialState = {}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS: {
      const allAlbums = {}
      action.albums.forEach(album => {
        allAlbums[album.id] = album
      })
      return allAlbums;
    }
    default:
      return state;
  }
}

export default albumReducer;