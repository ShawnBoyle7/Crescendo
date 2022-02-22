/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */

import React, { useCallback } from 'react';
import {
  useHistory, useLocation, Link,
} from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist, getPlaylists } from '../../store/playlists';
import { getUsers } from '../../store/users';
import './SideBar.css';

function SideBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const path = location.pathname.split('/');
  const currentPath = path[1];

  const sessionUserId = useSelector((state) => +state.session.user.id);
  const allPlaylists = Object.values(useSelector((state) => state.playlists));
  const userPlaylists = allPlaylists
    .filter((playlist) => playlist?.userId === sessionUserId)
    .reverse();
  const playlistName = userPlaylists.length ? `New Playlist #${userPlaylists.length + 1}` : `New Playlist #${1}`;

  const newPlaylist = async () => {
    const formValues = {
      name: playlistName,
      userId: sessionUserId,
      description: '',
    };

    // dispatch(createPlaylist(formValues))
    //   .then(() => {
    //     dispatch(getUsers());
    //     dispatch(getPlaylists());
    //     history.push(`/playlists/${userPlaylists.length + 1}`);
    //   });

    await dispatch(createPlaylist(formValues));
    await dispatch(getUsers());
    await dispatch(getPlaylists());
    history.push(`/playlists/${userPlaylists.length + 1}`);
  };

  const debouncedNewPlaylist = useCallback(debounce(() => newPlaylist(), 250), [allPlaylists]);

  return (
    <div className="side-bar">
      <Link to="/" className="logo-link">
        <img className="logo" src="https://i.imgur.com/RIztzKt.png" alt="logo" />
      </Link>

      <div className="side-bar-navigation-div">
        <button
          className={
            currentPath === '' ? 'current-side-bar-button' : 'side-bar-button'
          }
          onClick={() => history.push('/')}
          type="button"
        >
          <i className="medium material-icons">home</i>
          <p>Home</p>
        </button>

        {/* <button className={currentPath === "search" ?
        "current-side-bar-button": "side-bar-button"} onClick={() => history.push('/search')}>
          <i className="medium material-icons">search</i>
          <p>Search</p>
        </button> */}

        <button
          className={
            currentPath === 'library'
              ? 'current-side-bar-button'
              : 'side-bar-button'
          }
          onClick={() => history.push('/library/playlists')}
          type="button"
        >
          <i className="medium material-icons">library_music</i>
          <p>Your Library</p>
        </button>
      </div>

      <div className="side-bar-personal-navigation-div">
        <button
          className="side-bar-personal-navigation-button"
          onClick={debouncedNewPlaylist}
          type="button"
        >
          <i className="fas fa-plus-square" />
          <p>Create Playlist</p>
        </button>

        {/* <button className="side-bar-personal-navigation-button"
            onClick={() => history.push('/library/songs')}>
          <img className="liked-songs-image" src={"https://i.imgur.com/YtozZx0.png"} />
          <p id="liked-">Liked Songs</p>
        </button>  */}
      </div>

      <div className="sidebar-divider" />

      <ul className="playlist-links">
        {userPlaylists.reverse().map((playlist) => (
          <li className="playlist-link" key={playlist?.id}>
            <Link to={`/playlists/${playlist?.id}`}>
              <div className="side-bar-playlist-name">
                <p>{playlist?.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
