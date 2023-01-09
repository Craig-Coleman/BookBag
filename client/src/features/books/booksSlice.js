import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk("books/fetchBooks", () => {
    return fetch('/books')
    .then(res => res.json())
});

export const addBook = createAsyncThunk("books/createBook", (newBook) => {
    return fetch('/books', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook),
    })
    .then(res => res.json())
});

export const updateBook = createAsyncThunk("books/updateBook", (bookInfo) => {
    return fetch(`/books/${bookInfo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookInfo),
    })
    .then(res => res.json())
});

export const deleteBook = createAsyncThunk("books/deleteBook", (id) => {
    return fetch(`books/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
});

const initialState = {
    entities: [],
    status: "idle",
    error: {errors: []},
    newBook: false,
    deleteBook: false,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        resetNewBook(state) {
            state.newBook = false;
        },
        resetDeleteBook(state) {
            state.deleteBook = false;
        }
    },
    extraReducers: {
        [fetchBooks.pending](state) {
            state.status = "loading";
        },
        [fetchBooks.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.entities = action.payload;
                state.error = {errors: []};
            }
            state.status = "idle";
        },
        [addBook.pending](state) {
            state.status = "loading";
        },
        [addBook.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.entities.push(action.payload);
                state.newBook = action.payload;
                state.error = {errors: []};
            }
            state.status = "idle";
        },
        [updateBook.pending](state) {
            state.status = "loading";
        },
        [updateBook.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.entities = state.entities.filter(book => book.id !== action.payload.id);
                state.entities.push(action.payload);
                state.error = {errors: []};
            }
            state.status = "idle";
        },
        [deleteBook.pending](state) {
            state.status = "loading";
        },
        [deleteBook.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.entities = state.entities.filter(book => book.id !== action.payload.id);
                state.deleteBook = action.payload;
                state.error = {errors: []};
            }
            state.status = "idle";
        },
    }
});

export const { resetNewBook, resetDeleteBook } = booksSlice.actions;

export default booksSlice.reducer;