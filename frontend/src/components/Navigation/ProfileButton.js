import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import Profile from "../Profile";
import { Route, Link } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user) 
  const user = useSelector(state => state.users[sessionUser?.id])

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  return (
    <>
      <button onClick={openMenu}
      className="profile-button">
      👤
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
          <li>{user?.username}</li>
          <li>{sessionUser?.email}</li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;