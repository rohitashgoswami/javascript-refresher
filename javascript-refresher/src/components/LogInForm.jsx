import React from 'react';

export default function LogInForm(props) {
    return (
        <div className="container">
            <div className="login-form">
                <form>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}