import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PublisherPage() {

    const params = useParams();

    const publisher = useSelector(state => state.publishers.entities).filter(publisher => publisher.id === parseInt(params.publisher_id))[0];

    return(
        <div>
            <div className="book_info" >
                <img className="book_info_image" src={publisher.image} alt="cover_image"></img>
                <h1 className="info_page_title">{publisher.title}</h1>
                <div className="book_info_data">
                    <h3>Established: {publisher.year_established} </h3>
                    <p>Primary Genre: {publisher.primary_genre}</p>
                </div>
            </div>
        </div>
    )
};

export default PublisherPage;