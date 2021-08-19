import './index.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Artists from "./components/Artists";
import Home from "./components/Home";
import Search from "./components/Search";
import Genre from "./components/Genre";
import Songs from "./components/Songs";
import Album from "./components/Album";
import Error404 from "./components/Error404";
import { getArtists } from "./store/artists";
import { getUsers } from "./store/users";
import { getGenres } from "./store/genres";
import { getAlbums } from "./store/albums";
import { getPlaylists } from "./store/playlists";
import { getSongs } from "./store/songs";
import PlaylistForm from './components/PlaylistForm';

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
  
  const genresSlice = useSelector(state => state.genres);
  const genres = Object.values(genresSlice);

  const albumsSlice = useSelector(state => state.albums);
  const albums = Object.values(albumsSlice);

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

          <Route path="/search">
            <Search/>
          </Route>

          <Route path="/artists">
            <Artists/>
          </Route>

          <Route path="/songs">
            <Songs/>
          </Route>

          <Route path="/albums/:albumId">
            <Album albums={albums && albums}/>
          </Route>

          <Route path="/genres/:genreId">
            <Genre genres={genres}/>
          </Route>

          <Route path="/playlists/new">
            <PlaylistForm/>
          </Route>

          <Route>
            <Error404/>
          </Route>
          
        </Switch>
      )}
    </>
  );
}

export default App;