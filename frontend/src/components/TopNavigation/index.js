import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    const history = useHistory();
    
    return (
        <>
            <nav className="top-navigation-bar">
                <div className="top-nav-features">
                    <div className="history-buttons-div">
                        <button className="history-button" onClick={() => history.go(-1)}><i class="fas fa-chevron-left"></i></button>
                        <button className="history-button" onClick={() => history.go(1)}><i class="fas fa-chevron-right"></i></button>
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