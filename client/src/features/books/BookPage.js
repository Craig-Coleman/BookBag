import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBook, clearErrors } from './booksSlice';

function BookPage() {

    const params = useParams();
    const dispatch = useDispatch();

    const books = useSelector(state => state.books.entities)
    const book = books.filter(book => book.id === parseInt(params.book_id))[0];
    const errors = useSelector(state => state.books.bookError.errors);
    const errorList = useSelector(state => state.books.bookError.errors).map(error => {
        return(
            <p key={error} className="error" >{error}</p>
        );
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [length, setLength] = useState('');
    const [cover, setCover] = useState('');
    const [id, setId] = useState('');
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        if (book) {
        setTitle(book.title)
        setDescription(book.description)
        setPubYear(book.year_published)
        setLength(book.length)
        setCover(book.cover)
        setId(book.id)
        }
    }, [books, errors]);

    useEffect(() => {
        dispatch(clearErrors())
    }, [book]);

    function resetData() {
        setTitle('');
        setDescription('');
        setPubYear('');
        setLength('');
        setCover('');
        setHidden(true);
    };

    const bookInfo = {
        id: id,
        title: title,
        description: description,
        year_published: pubYear,
        length: length,
        cover: cover,
    }

    function handleEditBook(event) {
        event.preventDefault();
        dispatch(updateBook(bookInfo));
        resetData();
    };

    function showForm() {
        setHidden(false);
    }

        if (book) {
    return(
        <div>
            <div className="book_info" >
                <img className="book_info_image" src={book.cover} alt="cover_image"></img>
                <h1 className="info_page_title" >{book.title}</h1>
                <div className="book_info_data">
                <h3>By: {book.author.first_name} {book.author.last_name}</h3>
                <p>Published By: {book.publisher.title}</p>
                <p>Published In: {book.year_published}</p>
                <p>Length: {book.length} pages</p>
                <p className="summary">Summary</p>
                <p>{book.description}</p>
                </div>
            </div>
            <div id="error">
            {errorList}
            </div>
            <button className="edit_button" type="button" onClick={showForm}>Edit Book Information</button>
            <div hidden={hidden}>
            <h2 className="form_label" >Edit Book Information Below</h2>
            <form onSubmit={(event) => handleEditBook(event)}>
                <label className="field_label" >Title:  </label>
                <input 
                    type="text"
                    placeholder="Enter a New Title"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                ></input>
                <label className="field_label" >Summary:  </label>
                <input 
                    type="text"
                    placeholder="Enter a New Summary"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                ></input>
                <label className="field_label" >Year of Publication: </label>
                <input
                    type="text"
                    placeholder="Entre a New Year of Publication"
                    onChange={(event) => setPubYear(event.target.value)}
                    value={pubYear}
                ></input>
                <label className="field_label" >Image URL:  </label>
                <input
                    type="text"
                    placeholder="Enter a New URL for Cover Art"
                    onChange={(event) => setCover(event.target.value)}
                    value={cover}
                ></input>
                <label className="field_label" >Length: </label>
                <input
                    type="text"
                    placeholder="Enter a New Number of Pages"
                    onChange={(event) => setLength(event.target.value)}
                    value={length}
                ></input>
                <input
                    type="submit"
                    value="Save Changes"
                ></input>
                </form>
            </div>
        </div>
    )
        } else {
            return (
                <h1>...Loading</h1>
            )
        }
}

export default BookPage;