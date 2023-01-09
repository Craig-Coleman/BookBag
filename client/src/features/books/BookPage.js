import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBook } from './booksSlice';

function BookPage() {

    const params = useParams();
    const dispatch = useDispatch();

    const book = useSelector(state => state.books.entities).filter(book => book.id === parseInt(params.book_id))[0];

    const [title, setTitle] = useState(book.title);
    const [description, setDescription] = useState(book.description);
    const [pubYear, setPubYear] = useState(book.year_published);
    const [length, setLength] = useState(book.length);
    const [cover, setCover] = useState(book.cover);
    const [hidden, setHidden] = useState(true);
    const [btnHidden, setBtnHidden] = useState(false);

    function resetData() {
        setTitle('');
        setDescription('');
        setPubYear('');
        setLength('');
        setCover('');
        setHidden(true);
    };

    const bookInfo = {
        id: book.id,
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
        setBtnHidden(true);
    }

    console.log(book)

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
            <button hidden={btnHidden} className="edit_button" type="button" onClick={showForm}>Edit Book Information</button>
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
}

export default BookPage;