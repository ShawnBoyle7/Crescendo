import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    const history = useHistory();

    document.addEventListener("scroll", () => {
        const nav = document.querySelector("nav")
    
        if (window.scrollY === 0) {
            nav?.classList.add("top-navigation-bar-default")
            nav?.classList.remove("top-navigation-bar-scrolled")
        } else if (window.scrollY > 0) {
            nav?.classList.remove("top-navigation-bar-default")
            nav?.classList.add("top-navigation-bar-scrolled")
        }
    })
    
    return (
        <>
            <nav className="top-navigation-bar-default">
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