import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../features/users/usersSlice';
import NavBar from './NavBar';

function Header() {

    const dispatch = useDispatch();   
    const history = useHistory(); 
    const user = useSelector(state => state.users.user);

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                dispatch(logout());
            }
        })
        history.push("/");
    };

    if (user) {
    return(
        <div id="header" >
            <div id="header_name">
            <h1> {user.first_name} {user.last_name}'s Book Collection </h1>
            </div>
            <button id="logout_btn" onClick={handleLogout}>Logout</button>
            <NavBar></NavBar>
        </div>
    );
    } else {
        return(
            <h1>...Loading</h1>
        )
    }
};

export default Header;