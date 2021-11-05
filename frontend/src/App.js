import './index.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SideNavigation from "./components/SideNavigation";
import Artists from "./components/Artists";
import Home from "./components/Home";
import Search from "./components/Search";
import Genre from "./components/Genre";
import Songs from "./components/Songs";
import Album from "./components/Album";
import Library from './components/Library';
import Error404 from "./components/Error404";
import Playlists from './components/Playlists';
import Profile from './components/Profile';
import Splash from './components/Splash';
import { getArtists } from "./store/artists";
import { getUsers } from "./store/users";
import { getGenres } from "./store/genres";
import { getAlbums } from "./store/albums";
import { getPlaylists } from "./store/playlists";
import { getSongs } from "./store/songs";
import { useIsPlaying } from './context/IsPlayingContext';
import { useNowPlaying } from './context/NowPlayingContext';
import AudioPlayer from './components/AudioPlayer';
import TopNavigation from './components/TopNavigation';

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
    
    const sessionUser = useSelector(state => state.session.user)
    
    const genresSlice = useSelector(state => state.genres);
    const genres = Object.values(genresSlice);
    
    const albumsSlice = useSelector(state => state.albums);
    const albums = Object.values(albumsSlice);
    
    const { nowPlaying, setNowPlaying } = useNowPlaying();
    const { isPlaying, setIsPlaying } = useIsPlaying();

    return (
        <>
            {isLoaded && (
                <div className="application">
                    {sessionUser && 
                        <>
                            <SideNavigation/>
                            <TopNavigation/>
                        </>
                    }
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                {sessionUser ? 
                                    <Home />
                                    : 
                                    <Splash/>
                                }
                            </Route>

                            <Route path="/login">
                                <LoginFormPage />
                            </Route>

                            <Route path="/signup">
                                <SignupFormPage />
                            </Route>

                            <Route path="/search">
                                <Search />
                            </Route>

                            <Route path="/artists">
                                <Artists />
                            </Route>

                            <Route path="/songs">
                                <Songs />
                            </Route>

                            <Route path="/albums/:albumId">
                                <Album setNowPlaying={setNowPlaying} nowPlaying={nowPlaying} albums={albums && albums} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                            </Route>

                            <Route path="/genres/:genreId">
                                <Genre genres={genres} />
                            </Route>

                            <Route path="/library">
                                <Library />
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
                    {sessionUser &&
                        <footer className="playbar-container">
                            <AudioPlayer nowPlaying={nowPlaying} setNowPlaying={setNowPlaying} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                        </footer>
                    }
                </div>
            )}
        </>
    );
}

export default App;