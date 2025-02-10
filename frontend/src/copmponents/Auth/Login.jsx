import React from 'react'

const Login = () => {
  return (
    <div className="container">
        <div className="login-box">
            <h2>Login</h2>
            <form id="loginForm">
                <div className="input-group">
                    <input type="text" id="username" required />
                    <label for="username">Username</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password" required />
                    <label for="password">Password</label>
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
            <div id="message" className="message"></div>
        </div>
    </div>
  )
}

export default Login