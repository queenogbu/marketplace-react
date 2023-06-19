import React from 'react';

const AuthSidebar = () => {
    return (
        <div className="col-3 login-sidebar ps-5 pd-3">
            <div className="card">
                <nav className="nav flex-column">
                    <a className="nav-link" href="/login">Login</a>
                    <a className="nav-link" href="/register">Register</a>
                    <a className="nav-link" href="#">Forgotten Password</a>
                    <a className="nav-link" href="#">My Account</a>
                    <a className="nav-link" href="#">Address Book</a>
                    <a className="nav-link" href="#">Wish List</a>
                    <a className="nav-link" href="#">Order History</a>
                    <a className="nav-link" href="#">Downloads</a>
                </nav>
            </div>
        </div>
    )
}

export default AuthSidebar;