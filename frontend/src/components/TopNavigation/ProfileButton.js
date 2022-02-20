import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './TopNavigation.css';

function ProfileButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

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
    history.push("/")
  };

  return (
    <>
      <div className="profile-button" onClick={openMenu}>
        <div className="nav-profile-image-div">
          <img className="nav-profile-image" src="https://i.imgur.com/3x2W04X.jpg" alt="profile" />
        </div>
        <span className="nav-profile-name">
          {sessionUser.username}
        </span>
        { showMenu ?
          <i className="fas fa-caret-up"></i>
          : 
          <i className="fas fa-caret-down"></i>
        }
      </div>

      {showMenu && (
        <div className="profile-dropdown">
          {/* <Link to="/profile">
            <div className="menu-div">
              <span>Profile</span>
            </div>
          </Link> */}
          <div className="menu-div" onClick={logout}>
            <span >Log Out</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;