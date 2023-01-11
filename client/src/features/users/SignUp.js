import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from './usersSlice';

function SignUp() {

    const dispatch = useDispatch();

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [hidden, setHidden] = useState(true);

    function handleSignUp(event) {
        event.preventDefault();
        const newUserInfo = {
            username: newUsername,
            password: newPassword,
            password_confirmation: confirmNewPassword,
            first_name: firstName,
            last_name: lastName,
            email: email
        };
        dispatch(signUp(newUserInfo));
        setNewUsername("");
        setNewPassword("");
        setConfirmNewPassword("");
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    function handleClick() {
        setHidden(false);
    }

    return(
        <div>
            <button className="add_btn" type="button" onClick={handleClick}>Sign Up</button>
            <div hidden={hidden} >
            <h1>Sign Up</h1>
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
                <input
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                ></input>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                ></input>
                <input
                    type="text"
                    placeholder="Enter Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                ></input>
                <input type="submit" value="Sign Up"></input>
            </form>
            </div>
        </div>
    );
};

export default SignUp;