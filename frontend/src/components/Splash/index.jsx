import React from 'react';
import './Splash.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { demo } from '../../store/session';

function Splash() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return (
      <Redirect to="/" />
    );
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(demo());
  };

  return (
    <div className="splash">
      <nav className="nav-placeholder">
        <NavLink to="/signup">
          <button className="signup-link-button" type="button">
            SIGN UP
          </button>
        </NavLink>
        <NavLink to="/login">
          <button className="login-link-button" type="button">
            LOG IN
          </button>
        </NavLink>
      </nav>

      <div className="splash-content">
        <div className="splash-elements">
          <div className="splash-header">
            <h1>
              Music is
              {' '}
              <br />
              {' '}
              everything
            </h1>
            <p className="splash-subheader">Millions of songs. No credit card needed.</p>
          </div>
          <button className="splash-demo-button" onClick={demoLogin} type="button">
            Demo Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splash;
