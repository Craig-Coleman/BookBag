import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPublishers = createAsyncThunk("publishers/fetchPublishers", () => {
    return fetch('/publishers')
    .then(res => res.json())
    .then(publishers => publishers)
});

const initialState = {
    entities: [],
    status: "idle",
    error: [],
};

const publishersSlice = createSlice({
    name: "publishers",
    initialState,
    reducers: {
        addBookPublisher(state, action) {
            state.entities.push(action.payload);
        },
        deleteBookPublisher(state, action) {
            state.entities = state.entities.filter(publisher => publisher.id !== action.payload.id);
        }
    },
    extraReducers: {
        [fetchPublishers.pending](state) {
            state.status = "loading";
        },
        [fetchPublishers.fulfilled](state, action) {
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

export const { addBookPublisher, deleteBookPublisher } = publishersSlice.actions;

export default publishersSlice.reducer;