import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, deleteUser } from './usersSlice';

function UserInfo() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.users.user);
    const errors = useSelector(state => state.users.error.errors).map(error => {
        return(
            <p key={error} className="error" >{error}</p>
        );
    });


    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [imageUrl, setImageUrl] = useState(user.image);


    function handleSubmit(event) {
        event.preventDefault();
        const newUserInfo = {
            id: user.id,
            first_name: firstName,
            last_name: lastName,
            email: email
        };
        dispatch(updateUser(newUserInfo));
    };

    function handleDeleteUser(id) {
        dispatch(deleteUser(id));
        history.push("/");
    };

    return(
        <div>
            <h1 className="title">My Profile Information</h1>
            <img id="user_image" src={user.image} alt="user_image"></img>
            <h2 className="form_label" >Edit My Information</h2>
            {errors}
            <form onSubmit={event => handleSubmit(event)}>
                <label className="field_label" >First Name:  </label>
                    <input 
                        placeholder="Enter New First Name"
                        type="text" 
                        onChange={event => setFirstName(event.target.value)} 
                        value={firstName}
                    ></input>
                <label className="field_label" >Last Name:  </label>
                    <input 
                        placeholder="Enter New Last Name"
                        type="text" 
                        onChange={event => setLastName(event.target.value)}
                        value={lastName}
                        ></input>
                <label className="field_label" >Email: </label>
                    <input 
                        placeholder="Enter New First Name"
                        type="text" 
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        ></input>
                <label className="field_label" >Image URL</label>
                    <input 
                        placeholder="Enter New Image URL"
                        type="text" 
                        onChange={event => setImageUrl(event.target.value)}
                        value={imageUrl}
                    ></input>
                    <input 
                        id="save" 
                        type="submit" 
                        value="Save Changes" 
                    ></input>
            </form>
            <button className="delete_button" onClick={function() {handleDeleteUser(user.id)}}>Delete My Account</button>
        </div>
    );
};

export default UserInfo;
