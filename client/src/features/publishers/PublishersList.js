import React from 'react';
import { useSelector } from 'react-redux';
import PublisherCard from './PublisherCard';

function PublishersList() {

    const publishers = useSelector(state => state.publishers.entities);

    const publishersList = publishers.map(publisher => {
        return(
            <PublisherCard key={publisher.id} id={publisher.id} publisher={publisher} />
        );
    });
    return(
        <div>
            <h1 className="title" >My Authors</h1>
            {publishersList}
        </div>
    )
};

export default PublishersList;