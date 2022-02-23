
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './TopNavigation.css';

function TopNavigation() {
  const history = useHistory();
  const location = useLocation();
  const path = location?.pathname?.split('/')[1];
  const [navComponent, setNavComponent] = useState(<></>);

  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (path === 'library' || path === 'search') {
      switch (path) {
        case 'search':
          setNavComponent(
            <div className="search-div">
              <form className="search-form">
                <i className="fas fa-search" />
                <input
                  placeholder="Artists, Songs, or Albums"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </form>
            </div>,
          );
          break;
        case 'library':
          setNavComponent(
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
            </div>,
          );
          break;
        default:
          setNavComponent(<></>);
          break;
      }
    }

    return navComponent;
  }, [path]);

  return (
    <nav className="top-navigation-bar-default">
      <div className="top-nav-features">
        <div className="history-buttons-div">
          <button className="history-button" type="button" onClick={() => history.go(-1)} aria-label="Go Back"><i className="fas fa-chevron-left" /></button>
          <button className="history-button" type="button" onClick={() => history.go(1)} aria-label="Go Forward"><i className="fas fa-chevron-right" /></button>
        </div>
        <div className={path === 'library' || path === 'search' ? 'nav-component' : 'hidden'}>
          {navComponent}
        </div>
      </div>
      <div className="user-dropdown">
        <ProfileButton />
      </div>
    </nav>
  );
}

export default TopNavigation;
