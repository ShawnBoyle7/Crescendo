import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    
    return (
        <>
            <nav className="top-navigation-bar">
                <div className="top-nav-elements">
                    
                </div>
                <div className="user-dropdown">
                    <ProfileButton/>
                </div>
            </nav>
        </>
    )
}

export default TopNavigation;