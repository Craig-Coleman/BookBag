import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk("users/signUp", (userInfo) => {
    return fetch('/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo),
    })
    .then(res => res.json())
});

export const login = createAsyncThunk("users/login", (userInfo) => {
    return fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo),
    })
    .then(res => res.json())

});

export const updateUser = createAsyncThunk("users/updateUser", (userInfo) => {
    return fetch(`users/${userInfo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo),
    })
    .then(res => res.json())
});

export const deleteUser = createAsyncThunk("users/deleteUser", (id) => {
    fetch(`/users/${id}`, {
        method: "DELETE",
    });
});

const initialState = {
    user: null,
    loggedIn: false,
    status: "idle",
    error: {errors: []},
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
            state.loggedIn = false;
        }
    },
    extraReducers: {
        [signUp.pending](state) {
            state.status = "loading";
        },
        [signUp.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
                state.user = action.payload;
                state.loggedIn = true;
                state.error = {errors: []};
        };
            state.status = "idle";
        },
        [login.pending](state) {
            state.status = "loading";
        },
        [login.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
            state.user = action.payload;
            state.loggedIn = true;
            state.error = {errors: []};
        };
            state.status = "idle";
        },
        [updateUser.pending](state) {
            state.status = "loading";
        },
        [updateUser.fulfilled](state, action) {
            if (Object.keys(action.payload).includes('errors')){
                state.error = action.payload;
            } else {
            state.user = action.payload;
            state.error = {errors: []};
        };
            state.status = "idle";
        },
        [deleteUser.pending](state) {
            state.status = "loading";
        },
        [deleteUser.fulfilled](state) {
            state.user = null;
            state.status = "idle";
        }
    }
});

export const { userAdded, logout } = usersSlice.actions;

export default usersSlice.reducer;