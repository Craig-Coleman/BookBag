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
            to="/authors"
            exact
            activeStyle={{
                background: "darkblue",
            }}
        > My Authors</NavLink>
        <NavLink
        to="/publishers"
        exact
        activeStyle={{
            background: "darkblue",
        }}
        >My Publishers</NavLink>
        <NavLink
            to="/user"
            exact
            activeStyle={{
                background: "darkblue",
            }}
        >User Profile</NavLink>
        </div>
    )
}

export default NavBar;