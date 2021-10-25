import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    
    return (
        <>
            <div className="top-navigation-bar">
                <ProfileButton/>
            </div>
        </>
    )
}

export default TopNavigation;