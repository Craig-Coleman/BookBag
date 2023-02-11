import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div className="sidenav">
        <NavLink
            to="/"
            exact
            activeStyle={{
                background: "darkblue",
            }}
        >My Books</NavLink>
        <NavLink
            to="/authorspage"
            exact
            activeStyle={{
                background: "darkblue",
            }}
        > My Authors</NavLink>
        <NavLink
        to="/publisherspage"
        exact
        activeStyle={{
            background: "darkblue",
        }}
        >My Publishers</NavLink>
        <NavLink
            to="/userpage"
            exact
            activeStyle={{
                background: "darkblue",
            }}
        >User Profile</NavLink>
        </div>
    )
}

export default NavBar;