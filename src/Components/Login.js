import React from "react";
import firebase from "firebase/app";
import { auth } from "../Firebase";

//Styles
import styles from "./Login.module.css";

//Logo
import google from "../assets/google.svg";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to SemiChat</h2>
                <div className={styles.button} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} />
                    Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;
