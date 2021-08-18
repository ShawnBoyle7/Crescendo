import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Artists from "./components/Artists";
import Home from "./components/Home";
import { getArtists } from "./store/artists";
import { getUsers } from "./store/users";
import { getGenres } from "./store/genres";
import { getAlbums } from "./store/albums";
import { getPlaylists } from "./store/playlists";
import { getSongs } from "./store/songs";

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
    dispatch(getSongs());
  }, [dispatch])
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/artists">
            <Artists/>
          </Route>

          <Route path="/albums/:albumId">
            Album component goes here
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