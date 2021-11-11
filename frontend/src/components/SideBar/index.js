import React from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist, getPlaylists } from '../../store/playlists';
import { getUsers } from '../../store/users';
import './SideBar.css';

function SideBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const location = useLocation();
    const path = location.pathname.split('/');
    const currentPath = path[1]

    const sessionUser = useSelector(state => state.session.user);
    const allPlaylists = Object.values(useSelector(state => state.playlists));
    const userPlaylists = allPlaylists.filter(playlist => playlist?.userId === +sessionUser?.id).reverse();

    const newPlaylist = async (e) => {
        e.preventDefault()

        const formValues = {
            name: `New Playlist #${userPlaylists.length + 1}`,
            userId: sessionUser.id,
            description: ""
        }

        await dispatch(createPlaylist(formValues))
        await dispatch(getPlaylists())

        history.push(`/playlists/${userPlaylists[userPlaylists.length -1].id}`)
    }
    return (
        <div className="side-bar">
            <Link to="/" className="logo-link">
                <img className="logo" src="https://i.imgur.com/wWHVdsL.png" />
            </Link> 

            <div className="side-bar-navigation-div">
                <button className={currentPath === "" ? "current-side-bar-button": "side-bar-button"} onClick={() => history.push('/')}>
                    <i className="medium material-icons">home</i>
                    <p>Home</p>
                </button>

                {/* <button className={currentPath === "search" ? "current-side-bar-button": "side-bar-button"} onClick={() => history.push('/search')}>
                    <i className="medium material-icons">search</i>
                    <p>Search</p>
                </button> */}

                <button className={currentPath === "library" ? "current-side-bar-button": "side-bar-button"} onClick={() => history.push('/library/playlists')}>
                    <i className="medium material-icons">library_music</i>
                    <p>Your Library</p>
                </button>
            </div>

            <div className="side-bar-personal-navigation-div">
                <button className="side-bar-personal-navigation-button" onClick={newPlaylist}>
                    <i className="fas fa-plus-square"></i>
                    <p>Create Playlist</p>
                </button>

                {/* <button className="side-bar-personal-navigation-button" onClick={() => history.push('/library/songs')}>
                    <img className="liked-songs-image" src={"https://i.imgur.com/YtozZx0.png"} />
                    <p id="liked-">Liked Songs</p>
                </button>  */}
            </div>

            <div className="sidebar-divider"></div>
        
            <ul className="playlist-links">
                {userPlaylists.reverse().map(playlist =>
                    <li className="playlist-link" key={playlist?.id}>
                        <Link to={`/playlists/${playlist?.id}`}>
                            <div className="side-bar-playlist-name">
                                <p>{playlist?.name}</p>
                            </div>
                        </Link>
                    </li>)}
            </ul>
        </div>
    );
}

export default SideBar;