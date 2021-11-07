import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

const TopNavigation = () => {
    const history = useHistory();
    const location = useLocation();
    const path = location?.pathname?.split("/")
    const initialPath = path[1]
    const [navComponent, setNavComponent] = useState(<></>)
    
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
    
    const [userInput, setUserInput] = useState("");
    
    useEffect(() => {
        if (initialPath === "library" || "search") {
            switch (initialPath) {
                case "search":
                    setNavComponent(
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
                    )
                    break;
                    
                case "library":
                    setNavComponent(
                        <>
                            <div className="library-nav-div">
                                <NavLink to="/library/playlists" className="library-nav-link">
                                    <span className="library-nav-span">Playlists</span>
                                </NavLink>
    
                                <NavLink to="/library/artists" className="library-nav-link">
                                    <span className="library-nav-span">Artists</span>
                                </NavLink>
    
                                <NavLink to="/library/albums" className="library-nav-link">
                                    <span className="library-nav-span">Albums</span>
                                </NavLink>
                            </div>
                        </>
                    )
                    break;
    
                default:
                    setNavComponent(<></>)
                    break;
            }
        }

        return navComponent;
    }, [initialPath])
    
    return (
        <>
            <nav className="top-navigation-bar-default">
                <div className="top-nav-features">
                    <div className="history-buttons-div">
                        <button className="history-button" onClick={() => history.go(-1)}><i className="fas fa-chevron-left"></i></button>
                        <button className="history-button" onClick={() => history.go(1)}><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className={initialPath === "library" || "search" ? "nav-component" : "hidden"}>
                        {navComponent}
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