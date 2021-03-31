import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h2>STAIRWAY HEAVEN</h2>
            <div className="login">
                <h3>Login</h3>
                <h2><FontAwesomeIcon className="googleIcon" icon={faGoogle}/>Login with Google</h2>
            </div>
        </div>
    );
};

export default Login;