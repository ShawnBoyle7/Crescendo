const LOAD_GENRES = 'genres/LOAD_GENRES';

const loadGenres = (genres) => ({
  type: LOAD_GENRES,
  genres,
});

export const getGenres = () => async (dispatch) => {
  const response = await fetch('/api/genres');

  if (response.ok) {
    const genres = await response.json();
    dispatch((loadGenres(genres)));
  }
};

const initialState = {};

// eslint-disable-next-line default-param-last
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GENRES: {
      const allGenres = {};
      action.genres.forEach((genre) => {
        allGenres[genre.id] = genre;
      });
      return allGenres;
    }
    default:
      return state;
  }
};

export default genreReducer;
