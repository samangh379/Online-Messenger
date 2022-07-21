import React from "react";

//Styles
import styles from "./Login.module.css";

//Logo
import google from "../assets/google.svg";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to SemiChat</h2>
                <div className={styles.button}>
                    <img src={google} />
                    Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;
