import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './booksSlice';

function NewBookForm() {

    const dispatch = useDispatch();

    const publishers = useSelector(state => state.publishers.entities);
    const authors = useSelector(state => state.authors.entities);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [authorId, setAuthorId] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [length, setLength] = useState('');
    const [publisherId, setPublisherId] = useState('');
    const [cover, setCover] = useState("");

    const [pubTitle, setPubTitle] = useState('');
    const [pubEstYear, setPubEstYear] = useState('');
    const [pubGenre, setPubGenre] = useState('');
    const [pubHidden, setPubHidden] = useState(true);

    const [authFirst, setAuthFirst] = useState('');
    const [authLast, setAuthLast] = useState('');
    const [authAge, setAuthAge] = useState('');
    const [authBest, setAuthBest] = useState('');
    const [authNum, setAuthNum] = useState('');
    const [authPic, setAuthPic] = useState('');
    const [authHidden, setAuthHidden] = useState(true);


    function resetData() {
        setTitle('');
        setDescription('');
        setAuthorId('');
        setPubYear('');
        setLength('');
        setPublisherId('');
        setCover('');
        setPubTitle('');
        setPubEstYear('');
        setPubGenre('');
        setPubHidden(true);
        setAuthFirst('');
        setAuthLast('');
        setAuthAge('');
        setAuthBest('');
        setAuthNum('');
        setAuthHidden(true);
        const pubSel = document.getElementById('pubSel');
        pubSel.value = "--Select a Publisher--"
        const authSel = document.getElementById('authSel');
        authSel.value = "--Select an Author--"
    };

    const newPublisher = {
            title: pubTitle, 
            year_established: pubEstYear, 
            primary_genre: pubGenre
        };

    const newAuthor = {
        first_name: authFirst,
        last_name: authLast,
        age: authAge,
        best_seller: authBest,
        books_published: authNum,
        image: authPic
    };

    const newBook = {
        title: title,
        description: description,
        author_id: authorId,
        year_published: pubYear,
        length: length,
        publisher_id: publisherId,
        cover: cover,
        author_attributes: newAuthor,
        publisher_attributes: newPublisher
    };


    function handleAddBook(event) {
        event.preventDefault();
        dispatch(addBook(newBook))
        resetData();
    };

    function handleClickPub() {
        setPubHidden(false);
        setPublisherId('');
    };

    function handleClickAuth() {
        setAuthHidden(false);
        setAuthorId('');
    };

    function handleSelectAuth(event) {
        setAuthorId(parseInt(event.target.value));
        setAuthFirst('');
        setAuthLast('');
        setAuthAge('');
        setAuthBest('');
        setAuthNum('');
        setAuthHidden(true);
    };

    function handleSelectPub(event) {
        setPublisherId(parseInt(event.target.value));
        setPubTitle('');
        setPubEstYear('');
        setPubGenre('');
        setPubHidden(true);
    };

    return(
        <div>
            <h2>Add a Book!</h2>
            <form onSubmit={(event) => handleAddBook(event)}>
                <input 
                    type="text"
                    placeholder="Title"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                ></input>
                <input 
                    type="text"
                    placeholder="Description"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                ></input>
                <input
                    type="text"
                    placeholder="Year of Publication"
                    onChange={(event) => setPubYear(event.target.value)}
                    value={pubYear}
                ></input>
                <input
                    type="text"
                    placeholder="URL for Cover Art"
                    onChange={(event) => setCover(event.target.value)}
                    value={cover}
                ></input>
                <input
                    type="text"
                    placeholder="Number of Pages"
                    onChange={(event) => setLength(event.target.value)}
                    value={length}
                ></input>
                <select 
                    id="pubSel"
                    defaultValue="--Select a Publisher--" 
                    onChange={(event) => handleSelectPub(event)}>
                        <option hidden value="--Select a Publisher--">--Select a Publisher--</option>
                        {publishers.map((pub) => {
                        return <option value={pub.id} key={pub.id}>{pub.title}</option>
                        })}
                </select>
                <select 
                    id="authSel"
                    defaultValue="--Select an Author--" 
                    onChange={(event) => handleSelectAuth(event)}>
                        <option hidden value="--Select an Author--">--Select an Author--</option>
                        {authors.map((auth) => {
                        return <option value={auth.id} key={auth.id}>{auth.first_name}, {auth.last_name}</option>
                        })}
                </select>
                <input
                    type="submit"
                    value="Add Book"
                ></input>
            </form>
                <button className="add_btn" type="button" onClick={handleClickPub}>Add Publisher</button>
                <div id="pubform" hidden={pubHidden} >
                <label>Add a New Publisher</label>
                    <form>
                        <input
                            type="text"
                            placeholder="Publisher Title"
                            onChange={event => setPubTitle(event.target.value)}
                            value={pubTitle}
                        ></input>
                        <input
                            type="text"
                            placeholder="Year of Publisher Establishment"
                            onChange={event => setPubEstYear(event.target.value)}
                            value={pubEstYear}
                        ></input>
                        <input
                            type="text"
                            placeholder="Publisher's Primary Genre"
                            onChange={event => setPubGenre(event.target.value)}
                            value={pubGenre}
                        ></input>
                    </form>
                </div>
                <button className="add_btn" type="button" onClick={handleClickAuth} >Add Author</button>
            <div id="authform">
                    <form hidden={authHidden} >
                    <label>Add a New Author</label>
                        <input
                            type="text"
                            placeholder="Author's First Name"
                            onChange={event => setAuthFirst(event.target.value)}
                            value={authFirst}
                        ></input>
                        <input
                            type="text"
                            placeholder="Author's Last Name"
                            onChange={event => setAuthLast(event.target.value)}
                            value={authLast}
                        ></input>
                        <input
                            type="text"
                            placeholder="Author's Age (in Years)"
                            onChange={event => setAuthAge(event.target.value)}
                            value={authAge}
                        ></input>
                        <input
                            type="text"
                            placeholder="Author's Best Selling Book"
                            onChange={event => setAuthBest(event.target.value)}
                            value={authBest}
                        ></input>
                        <input
                            type="text"
                            placeholder="Number of Books Author Has Published"
                            onChange={event => setAuthNum(event.target.value)}
                            value={authNum}
                        ></input>
                        <input
                            type="text"
                            placeholder="URL of a Picture of the Author"
                            onChange={event => setAuthPic(event.target.value)}
                            value={authPic}
                        ></input>
                    </form>
                </div>
        </div>
    );
};

export default NewBookForm;