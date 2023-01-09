import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './usersSlice';

function Login() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(state => state.users.error.errors).map(error => {
        return(
            <p key={error} className="error">{error}</p>
        );
    });


    function handleLogin(event) {
        event.preventDefault();
        const userInfo = {
            username,
            password,
        };
        dispatch(login(userInfo))
        setUsername('');
        setPassword('');  
    };

    return(
        <div>
            <h1>Login</h1>
            <h3>Enter Username and Password</h3>
            <form id="loginForm" onSubmit={(event) => handleLogin(event)} >
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                ></input>
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                ></input>
                <input type="submit" value="Login"></input>
            </form>
            <div>
                {errors}
            </div>
        </div>
    );
};

export default Login;