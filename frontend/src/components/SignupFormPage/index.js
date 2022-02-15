import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupFormPage.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="signup-form-page">
            <div className="signup-form-container">
                <h2>Sign up for free to start listening.</h2>
                <div className="signup-divider"></div>
                <form onSubmit={handleSubmit} className="signup-form" >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="label-container">
                        <label for="email" className="label">
                            What's your email?
                        </label>
                    </div>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email."
                            required
                        />
                    <div className="label-container">
                        <label for="username" className="label">
                            What should we call you?
                        </label>
                    </div>
                        <input
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter a profile name."
                            required
                        />
                    <div className="label-container">
                        <label for="password" className="label">
                            Create a password.
                        </label>
                    </div>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password."
                            required
                        />
                    <div className="label-container">
                        <label for="password-confirmation" className="label">
                            Confirm your password
                        </label>
                    </div>
                        <input
                            name="password-confirmation"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password."
                            required
                        />
                    <div className="signup-button-container">
                        <button type="submit" className="signup-button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default SignupFormPage;