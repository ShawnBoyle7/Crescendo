
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import './SignupFormPage.css';
import '../Auth.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const emailErrors = errors.filter((error) => error.startsWith('Email')).map((error) => error.slice());
  const usernameErrors = errors.filter((error) => error.startsWith('Username')).map((error) => error.slice());
  const passwordErrors = errors.filter((error) => error.startsWith('Password')).map((error) => error.slice());
  const otherErrors = errors.filter((error) => error.startsWith('Your')).map((error) => error.slice());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }

    return setErrors(['Your passwords must match']);
  };

  return (
    <div className="auth-form-page">
      <div className="signup-logo-header-container">
        <img className="signup-logo" src="https://i.imgur.com/SbCD3mF.png" alt="" />
        <h2 className="signup-header">Sign up for free to start listening.</h2>
      </div>

      <div className="auth-form-container">
        <div className="auth-divider" />
        <form onSubmit={handleSubmit} className="auth-form">
          <div className={`${otherErrors.length ? 'confirm-password-error-container' : 'hidden'}`}>
            {otherErrors.map((error) => (
              <div key={error.id}>{error}</div>
            ))}
          </div>
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="email" className="label">
                What&apos;s your email?
              </label>
            </div>
            <input
              className="auth-input"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email."
              required
            />
            <div className="auth-errors-container">
              {emailErrors.map((error) => (
                <span key={error.id}>{error}</span>
              ))}
            </div>
          </div>
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="username" className="label">
                What should we call you?
              </label>
            </div>
            <input
              className="auth-input"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a profile name."
              required
            />
            <div className="auth-errors-container">
              {usernameErrors.map((error) => (
                <span key={error.id}>{error}</span>
              ))}
            </div>
          </div>
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="password" className="label">
                Create a password.
              </label>
            </div>
            <input
              className="auth-input"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password."
              required
            />
            <div className="auth-errors-container">
              {passwordErrors.map((error) => (
                <span key={error.id}>{error}</span>
              ))}
            </div>
          </div>
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="password-confirmation" className="label">
                Confirm your password
              </label>
            </div>
            <input
              className="auth-input"
              name="password-confirmation"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password."
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="existing-user-link">
            Have an account?
            {' '}
            <Link to="/login">Log in.</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
