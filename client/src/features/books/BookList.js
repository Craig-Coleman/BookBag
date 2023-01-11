import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookPublisher } from '../publishers/publishersSlice';
import { addBookAuthor } from '../authors/authorsSlice';
import { resetNewBook } from './booksSlice';
import { deleteBookPublisher } from '../publishers/publishersSlice';
import { deleteBookAuthor } from '../authors/authorsSlice';
import { resetDeleteBook, clearListErrors } from './booksSlice';
import NewBookForm from './NewBookForm';
import BookCard from './BookCard';


function BookList() {

    const dispatch = useDispatch();

    const books = useSelector(state => state.books.entities);
    const authors = useSelector(state => state.authors.entities);
    const publishers = useSelector(state => state.publishers.entities);
    const newBook = useSelector(state => state.books.newBook);
    const deleteBook = useSelector(state => state.books.deleteBook);
    const errors = useSelector(state => state.books.error.errors).map(error => {
        return(
            <p key={error} className="error" >{error}</p>
        );
    });

    useEffect(() => {
        dispatch(clearListErrors())
    }, [books]);

    useEffect(() => {
        if (newBook) {
            if (authors.filter(author => author.id === newBook.author.id).length === 0) {
                dispatch(addBookAuthor(newBook.author));
            };
            if (publishers.filter(publisher => publisher.id === newBook.publisher.id).length === 0) {
                dispatch(addBookPublisher(newBook.publisher));
            };
            dispatch(resetNewBook());
        };
    }, [newBook, dispatch, authors, publishers]);

    useEffect(() => {
        if (deleteBook) {
            if (books.filter(book => book.author.id === deleteBook.author.id).length === 0) {
                dispatch(deleteBookAuthor(deleteBook.author));
            };
            if (books.filter(book => book.publisher.id === deleteBook.publisher.id).length === 0) {
                dispatch(deleteBookPublisher(deleteBook.publisher));
            };
            dispatch(resetDeleteBook());
        };
    }, [deleteBook, books, dispatch]);

    const bookList = books.map(book => {
        return(
            <BookCard key={book.id} id={book.id} book={book}/>
        );
    });

    return(
        <div>
        <h1 className="title" >My Books</h1>
        {bookList}
        {errors}
        <NewBookForm />
        </div>
    );
};

export default BookList;
