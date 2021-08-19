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
    <ul className="nav-list">
      <li>
        <NavLink exact to="/"><i class="fas fa-home"></i></NavLink>
        <input type="text"></input>
        <NavLink to="/search"><i class="fas fa-search"></i></NavLink>
        <NavLink to="/library"><i class="fas fa-headphones"></i></NavLink>
        
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;