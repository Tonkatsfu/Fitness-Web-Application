import React, { useState } from 'react';

function Login(){ 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        if (username !== "Joemar" || password !== "12345") {
            alert("Invalid username or password");
            return;
        }

        console.log("Username:", username);
        console.log("Password:", password);

        setUsername("");
        setPassword("");
    }

    return(
        <div className="container">
            <div className="left-side-container">
                <p className="login-text">Welcome!</p>

                <input 
                    className="username-login" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    className="password-login" 
                    placeholder="Password" 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="forgot-password">Forgot your password?</p>

                <button className="login-button" onClick={handleLogin}>Login</button>

            </div>

            <div className="right-side-container">
                <p className="slogan-right">Ready to get fit?</p>
                <p className="slogan-right-2">Enter your details and begin 
                    your journey with us</p>

                <button className="signup-button">Sign up</button>
            </div>
        </div>
    );
}

export default Login;
