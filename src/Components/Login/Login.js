import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (!firebase.apps.length > 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const signInWIthGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userInfo = { ...loggedInUser };
                userInfo.name = user.name;
                userInfo.email = user.email;
                userInfo.isLoggedIn = true;
                userInfo.photoURL = user.photoURL;

                setLoggedInUser(userInfo);
                history.replace(from);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }
    return (
        <div>
            <h2 style={{ marginLeft: '20px' }}>STAIRWAY HEAVEN</h2>
            <div className="login">
                <h3>Login</h3>
                <h2 onClick={signInWIthGoogle}><FontAwesomeIcon className="googleIcon" icon={faGoogle} />Login with Google</h2>
            </div>
        </div>

    );
};

export default Login;