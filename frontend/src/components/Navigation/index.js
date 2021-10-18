import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Playlist from '../Playlist';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);
  const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +sessionUser.id)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  return (
    <div className="nav-bar">
      <div id="nav-links">
        <NavLink exact to="/"><i className="fas fa-home"> Home</i></NavLink>
        <NavLink to="/search"><i className="fas fa-search"> Search</i></NavLink>
        <NavLink to="/library"><i className="fas fa-headphones"> Your Library</i></NavLink>
        <NavLink to="/playlists/new"> <i className="far fa-plus-square"></i> Create Playlist</NavLink>
        <div className="playlists">
          {userPlaylists.map(playlist =>
            <div className="playlist-item" key={playlist.id}>
              <NavLink to={`/playlists/${playlist.id}`}>
                <div className="playlist-name">{playlist.name}</div>
              </NavLink>
            </div>)}
        </div>
        {/* {isLoaded && sessionLinks} */}
      </div>
    </div>
  );
}

export default Navigation;