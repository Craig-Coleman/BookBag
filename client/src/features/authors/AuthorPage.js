import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AuthorPage() {

    const params = useParams();

    const author = useSelector(state => state.authors.entities).filter(author => author.id === parseInt(params.author_id))[0];

    if (author) {
    return(
        <div>
            <div className="book_info" >
                <img className="book_info_image" src={author.image} alt="cover_image"></img>
                <h1 className="info_page_title" >{author.first_name}, {author.last_name}</h1>
                <div className="book_info_data">
                    <h3>Age: {author.age} </h3>
                    <p>Best-Selling Book: {author.best_seller}</p>
                    <p>Books Published: {author.books_published}</p>
                </div>
            </div>
        </div>
    )
    } else {
        return(
            <h1>...Loading</h1>
        )
    }
}

export default AuthorPage;