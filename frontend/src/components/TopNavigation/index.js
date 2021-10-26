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
                    <div className="history-div">
                        <span className="history-span"><i class="fas fa-chevron-left"></i></span>
                        <span className="history-span"><i class="fas fa-chevron-right"></i></span>
                    </div>
                </div>
                <div className="user-dropdown">
                    <ProfileButton/>
                </div>
            </nav>
        </>
    )
}

export default TopNavigation;