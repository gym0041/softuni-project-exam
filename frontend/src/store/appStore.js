
import { configureStore, createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: undefined,
        isLogged: false
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload;
            state.isLogged = true
        },
        removeUser(state) {
            state.user = undefined,
                state.isLogged = false
        }
    }
})

export const { addUser, removeUser } = authSlice.actions

let store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store