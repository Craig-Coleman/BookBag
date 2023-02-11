import React from 'react';
import { useHistory } from 'react-router-dom';

function PublisherCard({ publisher}) {

    const history = useHistory();

    function handleClick() {
        history.push(`/publisherspage/${publisher.id}`)
    };

    return(
        <div className="card" >
            <img className="card_image" src={publisher.image} alt='cover_image'></img>
            <h2>{publisher.title}</h2>
            <button className="card_info_button" onClick={handleClick}>To Publisher Info</button>
        </div>
    )
};

export default PublisherCard;