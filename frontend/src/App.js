import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import { getArtists } from "./store/artists";
import { getUsers } from "./store/users";
import { getGenres } from "./store/genres";
import { getAlbums } from "./store/albums";
import { getPlaylists } from "./store/playlists";

// Re evaluate all the dispatching below

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getArtists());
    dispatch(getUsers());
    dispatch(getGenres());
    dispatch(getAlbums());
    dispatch(getPlaylists());
  }, [dispatch])

  // Artists Slice of state below

  const artistsSlice = useSelector(state => state.artists);

  const artists = Object.values(artistsSlice)

  // Users slice of state below

  const usersSlice = useSelector(state => state.users);

  // const users = Object.values(usersSlice)

  // Genres slice of state below

  const genresSlice = useSelector(state => state.genres);

  // const genres = Object.values(genresSlice)

  // Albums slice of state below

  const albumsSlice = useSelector(state => state.albums);

  // const albums = Object.values(albumsSlice)

  // Playlists slice of state below

  const playlistsSlice = useSelector(state => state.playlists);

  // const playlists = Object.values(playlistsSlice)
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          
          <Route exact path="/">
            hey
          </Route>
          
          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/artists/:artistId">
            <Artist artists={artists}/>
          </Route>

          <Route path="/artists">
            <Artists artists={artists}/>
          </Route>

          <Route>
            404 not found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;