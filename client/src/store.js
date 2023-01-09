import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import usersReducer from './features/users/usersSlice';
import authorsReducer from './features/authors/authorsSlice';
import publishersReducer from './features/publishers/publishersSlice';


const store = configureStore({
    reducer: {
        books: booksReducer,
        users: usersReducer,
        authors: authorsReducer,
        publishers: publishersReducer
    },
});

export default store;