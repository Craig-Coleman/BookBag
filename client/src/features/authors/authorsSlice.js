import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthors = createAsyncThunk("authors/fetchAuthors", () => {
    return fetch('/authors')
    .then(res => res.json())
    .then(authors => authors)
});

const initialState = {
    entities: [],
    status: "idle",
    error: [],
};

const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {
        addBookAuthor(state, action) {
            state.entities.push(action.payload);
        },
        deleteBookAuthor(state, action) {
            state.entities = state.entities.filter(author => author.id !== action.payload.id);
        }
    },
    extraReducers: {
        [fetchAuthors.pending](state) {
            state.status = "loading";
        },
        [fetchAuthors.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.entities = action.payload;
                state.error = {errors: []};
            }
            state.status = "idle";
        },
    }
});

export const { addBookAuthor, deleteBookAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;