import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
        
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;