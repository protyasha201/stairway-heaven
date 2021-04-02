import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../Avatar face.png';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);

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
                {
                    loggedInUser.isLoggedIn ? <img className="userImage" alt="user" src={logo}></img>
                    :
                    <button onClick={goToLogin} className="loginBtn">Login</button>
                }
            </div>
        </div>
    );
};

export default Header;