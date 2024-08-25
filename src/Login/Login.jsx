import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; 

function Login(){ 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(){
        if (username === "Joemar" && password === "12345") {
            navigate('/overview');
        } else {
            alert("Invalid username or password");
        }
    }

    return(
        <div className={styles.loginPageContainer}>  
            <div className={styles.loginContainer}>  
                <div className={styles.leftSideContainer}>
                    <p className={styles.loginText}>FitTrack</p>

                    <input 
                        className={styles.usernameLogin} 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        className={styles.passwordLogin} 
                        placeholder="Password" 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className={styles.forgotPassword}>Forgot your password?</p>

                    <button className={styles.loginButton} onClick={handleLogin}>Login</button>
                </div>

                <div className={styles.rightSideContainer}>
                    <p className={styles.sloganRight}>Ready to get fit?</p>
                    <p className={styles.sloganRight2}>Enter your details and begin 
                        your journey with us</p>

                    <button className={styles.signupButton}>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
