import React from 'react';
import { useHistory } from 'react-router-dom';

function AuthorCard({ author }) {

    const history = useHistory();

    function handleClick() {
        history.push(`/authors/${author.id}`)
    };

    return(
        <div className="card" >
            <img className="card_image" src={author.image} alt='cover_image'></img>
            <h2>{author.first_name} {author.last_name}</h2>
            <button className="card_info_button" onClick={handleClick}>To Author Info</button>
        </div>
    )
};

export default AuthorCard;