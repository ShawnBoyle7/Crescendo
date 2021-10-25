import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SideNavigation.css';

function SideNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    const playlistsSlice = useSelector(state => state.playlists);
    const allPlaylists = Object.values(playlistsSlice);
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === +sessionUser?.id)

    let sessionLinks;
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    return (
        <div className="side-navigation-bar">
            <div id="side-nav-elements">
                <NavLink exact to="/"><i className="fas fa-home"></i>Home</NavLink>
                <NavLink to="/search"><i className="fas fa-search"></i>Search</NavLink>
                <NavLink to="/library"><i className="fas fa-headphones"></i>Your Library</NavLink>
                <NavLink to="/playlists/new"> <i className="far fa-plus-square"></i>Create Playlist</NavLink>
                <div className="playlists">
                    {userPlaylists.map(playlist =>
                        <div className="playlist-item" key={playlist.id}>
                            <NavLink to={`/playlists/${playlist.id}`}>
                                <div className="playlist-name">{playlist.name}</div>
                            </NavLink>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default SideNavigation;