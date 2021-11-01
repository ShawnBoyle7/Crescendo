import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist } from '../../store/playlists';
import './SideNavigation.css';

function SideNavigation() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const playlistsSlice = useSelector(state => state.playlists);
    const allPlaylists = Object.values(playlistsSlice);
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === +sessionUser?.id).reverse();

    let sessionLinks;
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );

    const newPlaylist = async (e) => {
        e.preventDefault()

        const formValues = {
            name: `New Playlist #${userPlaylists.length + 1}`,
            userId: sessionUser.id
        }

        await dispatch(createPlaylist(formValues))
    }
    return (
        <div className="side-navigation-bar">
            <div id="side-nav-elements">
                <NavLink exact to="/"><i className="fas fa-home"></i>Home</NavLink>
                <NavLink to="/search"><i className="fas fa-search"></i>Search</NavLink>
                <NavLink to="/library"><i className="fas fa-headphones"></i>Your Library</NavLink>
                <NavLink to="" onClick={newPlaylist}> <i className="far fa-plus-square"></i>Create Playlist</NavLink>
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