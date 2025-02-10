import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container">
        <div className="login-box registration-box">
            <h2>Create Account</h2>
            <form id="registrationForm" enctype="multipart/form-data">
                <div className="input-group">
                    <input type="text" id="name" required />
                    <label for="name">Full Name</label>
                </div>
                <div className="input-group">
                    <input type="email" id="email" required />
                    <label for="email">Email Address</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password" required />
                    <label for="password">Password</label>
                </div>
                <div className="input-group file-input">
                    <label for="profile-image" className="file-label">Profile Image</label>
                    <input type="file" id="profile-image" accept="image/*" className="file-input-field" />
                    <div className="image-preview" id="image-preview"></div>
                </div>
                <button type="submit" className="login-btn">Register</button>
                <p className="switch-form">Already have an account? <Link to="/">Login here</Link></p>
            </form>
            <div id="message" className="message"></div>
        </div>
    </div>
  )
}

export default Register