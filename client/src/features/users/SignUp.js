import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from './usersSlice';

function SignUp() {

    const dispatch = useDispatch();

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    function handleSignUp(event) {
        event.preventDefault();
        const newUserInfo = {
            username: newUsername,
            password: newPassword,
            password_confirmation: confirmNewPassword
        };
        dispatch(signUp(newUserInfo));
        setNewUsername("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    function handleClick() {
        setHidden(false);
    }

    return(
        <div>
            <button className="add_btn" type="button" onClick={handleClick}>Sign Up</button>
            <div hidden={hidden} >
            <h1>Login</h1>
            <h3>Please enter your desired Username and Password</h3>
            <form id="signUpForm" onSubmit={(event) => handleSignUp(event)} >
                <input
                    type="text"
                    placeholder="New Username"
                    onChange={(event) => setNewUsername(event.target.value)}
                    value={newUsername}
                ></input>
                <input 
                    type="password"
                    placeholder="New Password"
                    onChange={(event) => setNewPassword(event.target.value)}
                    value={newPassword}
                ></input>
                <input 
                    type="password"
                    placeholder="Confirm New Password"
                    onChange={(event) => setConfirmNewPassword(event.target.value)}
                    value={confirmNewPassword}
                ></input>
                <input type="submit" value="Sign Up"></input>
            </form>
            </div>
        </div>
    );
};

export default SignUp;