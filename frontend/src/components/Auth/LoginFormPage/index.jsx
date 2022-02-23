
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import './LoginFormPage.css';
import '../Auth.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const loginErrors = errors.filter((error) => error.startsWith('Incorrect')).map((error) => error.slice());

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="auth-form-page">
      <div className="login-logo-header-container">
        <img className="login-logo" src="https://i.imgur.com/SbCD3mF.png" alt="login-logo" />
      </div>

      <div className="auth-form-container">
        <h2 className="login-header">To continue, log in to Crescendo.</h2>
        <div className="auth-divider" />
        <div className={`${loginErrors.length ? 'login-error-container' : 'hidden'}`}>
          {loginErrors.map((error) => (
            <span key={error.id}>{error}</span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="credential" className="label">
                Email address or username
              </label>
            </div>
            <input
              className="auth-input"
              type="text"
              name="credential"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder="Email address or username"
              required
            />
          </div>
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
            <input
              className="auth-input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="login-button-container">
            <button type="submit" className="login-button">Log In</button>
          </div>
          <div className="auth-divider" />
          <div className="login-redirect-container">
            <p className="no-user-message">Don&apos;t have an account?</p>
            <button className="redirect-signup-button" onClick={() => history.push('/signup')} type="button">Sign up for Crescendo </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
