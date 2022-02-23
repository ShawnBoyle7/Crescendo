import './index.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginFormPage from './components/Auth/LoginFormPage';
import SignupFormPage from './components/Auth/SignupFormPage';
import * as sessionActions from './store/session';
import SideBar from './components/SideBar';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Home from './components/Home';
import Search from './components/Search';
import Genre from './components/Genre';
import Songs from './components/Songs';
import Album from './components/Album';
import Library from './components/Library';
import Error404 from './components/Error404';
import Playlists from './components/Playlists';
import Profile from './components/Profile';
import Splash from './components/Splash';
import Artist from './components/Artist';
import Playlist from './components/Playlist';
import { getArtists } from './store/artists';
import { getUsers } from './store/users';
import { getGenres } from './store/genres';
import { getAlbums } from './store/albums';
import { getPlaylists } from './store/playlists';
import { getSongs } from './store/songs';
import { useIsPlaying } from './context/IsPlayingContext';
import { useNowPlaying } from './context/NowPlayingContext';
import { useNavComponent } from './context/NavComponent';
import AudioPlayer from './components/AudioPlayer';
import TopNavigation from './components/TopNavigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const genresSlice = useSelector((state) => state.genres);
  const genres = Object.values(genresSlice);
  const albumsSlice = useSelector((state) => state.albums);
  const albums = Object.values(albumsSlice);
  const { nowPlaying, setNowPlaying } = useNowPlaying();
  const { isPlaying, setIsPlaying } = useIsPlaying();
  const { navComponent, setNavComponent } = useNavComponent();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.restoreUser());
      await dispatch(getArtists());
      await dispatch(getUsers());
      await dispatch(getGenres());
      await dispatch(getAlbums());
      await dispatch(getPlaylists());
      await dispatch(getSongs());
      setIsLoaded(true);
      history.listen(() => {
        document.querySelector('.application').scrollTop = 0;
        const nav = document.querySelector('nav');
        nav?.classList.add('top-navigation-bar-default');
        nav?.classList.remove('top-navigation-bar-scrolled');
      });
    })();
  }, [dispatch, history]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {isLoaded && (
        !sessionUser
          ? (
            <Switch>
              <Route exact path="/">
                <Splash />
              </Route>

              <Route path="/login">
                <LoginFormPage />
              </Route>

              <Route path="/signup">
                <SignupFormPage />
              </Route>

              <Route>
                <Error404 />
              </Route>
            </Switch>
          )
          : (
            <div className="application">
              <TopNavigation navComponent={navComponent} setNavComponent={setNavComponent} />
              <SideBar />
              <div className="content">
                <Switch>
                  {sessionUser
                && (
                <Route exact path="/">
                  <Home />
                </Route>
                )}
                  <Route path="/search">
                    <Search />
                  </Route>

                  <Route path="/artists/:artistId">
                    <Artist
                      setNowPlaying={setNowPlaying}
                      nowPlaying={nowPlaying}
                      setIsPlaying={setIsPlaying}
                      isPlaying={isPlaying}
                    />
                  </Route>

                  <Route path="/albums/:albumId">
                    <Album
                      setNowPlaying={setNowPlaying}
                      nowPlaying={nowPlaying}
                      albums={albums && albums}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                  </Route>

                  <Route path="/artists">
                    <Artists />
                  </Route>

                  <Route path="/albums">
                    <Albums />
                  </Route>

                  <Route path="/songs">
                    <Songs />
                  </Route>

                  <Route path="/genres/:genreId">
                    <Genre genres={genres} />
                  </Route>

                  <Route path="/library">
                    <Library navComponent={navComponent} />
                  </Route>

                  <Route path="/playlists/:playlistId">
                    <Playlist
                      setNowPlaying={setNowPlaying}
                      nowPlaying={nowPlaying}
                      albums={albums && albums}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                  </Route>

                  <Route path="/playlists">
                    <Playlists />
                  </Route>

                  <Route path="/profile">
                    <Profile user={sessionUser} />
                  </Route>

                  <Route>
                    <Error404 />
                  </Route>
                </Switch>
              </div>
              <footer className="playbar-container">
                <AudioPlayer
                  nowPlaying={nowPlaying}
                  setNowPlaying={setNowPlaying}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                />
              </footer>
            </div>
          )
      )}
    </>
  );
}

export default App;
