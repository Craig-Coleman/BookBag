import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteBook } from './booksSlice';

function BookCard({ book }) {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        history.push(`/books/${book.id}`)
    };

    function handleDelete(id) {
        dispatch(deleteBook(book.id));
    };

    return(
        <div className="card" >
            <img className="card_image" src={book.cover} alt='cover_image'></img>
            <h2>{book.title}</h2>
            <p>By: {book.author.first_name} {book.author.last_name}</p>
            <button className="card_info_button" onClick={handleClick}>To Book Info</button>
            <button className="delete_button" onClick={handleDelete}>Delete This Book</button>
        </div>
    )
};

export default BookCard;