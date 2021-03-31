import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const goToLogin = () => {
        history.push('/login');
    }
    return (
        <div className="header">
            <h2>STAIRWAY HEAVEN</h2>
            <div className="navLinks">
                <a className="links" href="#">Home</a>
                <a className="links" href="#">Orders</a>
                <a href="/admin" className="links">Admin</a>
                <a className="links" href="#">Deals</a>
                <button onClick={goToLogin} className="loginBtn">Login</button>
            </div>
        </div>
    );
};

export default Header;