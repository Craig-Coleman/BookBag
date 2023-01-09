import React from 'react';
import { useSelector } from 'react-redux'
import AuthorCard from './AuthorCard';

function MyAuthors() {

    const authors = useSelector(state => state.authors.entities);

    const authorsList = authors.map(author => {
        return(
            <AuthorCard key={author.id} id={author.id} author={author} />
        );
    });
    return(
        <div>
            <h1 className="title" >My Authors</h1>
            {authorsList}
        </div>
    )
};

export default MyAuthors;