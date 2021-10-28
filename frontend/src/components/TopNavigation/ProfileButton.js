import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './TopNavigation.css';
import { Link } from "react-router-dom";

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
            <div className="profile-button" onClick={openMenu}>
                <div className="nav-profile-image-div">
                    <img className="nav-profile-image" src="https://i.imgur.com/3x2W04X.jpg"/>
                </div>
                <span className="nav-profile-name">
                    {user?.username}
                </span>
                { showMenu ?
                    <i className="fas fa-caret-up"></i>
                    : 
                    <i className="fas fa-caret-down"></i>
                }
            </div>

            {showMenu && (
                <div className="profile-dropdown">
                    <div className="menu-div">
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div className="menu-div">
                        <span onClick={logout}>Log Out</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;