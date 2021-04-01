import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';


const Login = () => {
    if (!firebase.apps.length > 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const signInWIthGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error code:", errorCode);
                console.log("Error message:", errorMessage);
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