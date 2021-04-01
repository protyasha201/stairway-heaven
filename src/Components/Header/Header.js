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
                <Link className="links" to="/home">Home</Link>
                <Link className="links" to="/orders">Orders</Link>
                <Link to="/admin/addProduct" className="links">Admin</Link>
                <Link className="links" to="/deals">Deals</Link>
                <button onClick={goToLogin} className="loginBtn">Login</button>
            </div>
        </div>
    );
};

export default Header;