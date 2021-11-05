import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname
    
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

    let navComponent = <></>
    const [userInput, setUserInput] = useState("");

    switch (path) {
        case "/search":
            navComponent = 
            <>
                <div className="search-div">
                    <form className="search-form">
                        <i className="fas fa-search"></i>
                        <input
                            placeholder="Artists, Songs, or Albums"    
                            value={userInput}
                            onChange={e => setUserInput(e.target.value)}/>
                    </form>
                </div>
            </>
            break;
        default:
            navComponent = <></>
            break;
    }
    
    return (
        <>
            <nav className="top-navigation-bar-default">
                <div className="top-nav-features">
                    <div className="history-buttons-div">
                        <button className="history-button" onClick={() => history.go(-1)}><i className="fas fa-chevron-left"></i></button>
                        <button className="history-button" onClick={() => history.go(1)}><i className="fas fa-chevron-right"></i></button>
                    </div>
                    {navComponent}
                </div>
                <div className="user-dropdown">
                    <ProfileButton/>
                </div>
            </nav>
        </>
    )
}

export default TopNavigation;