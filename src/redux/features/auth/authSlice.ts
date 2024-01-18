import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {
    user: null | object,
    token: null | object | string
}
const initialState: TInitialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.token = token
            state.user = user

        },
        logout: (state) => {
            state.token = null
            state.user = null
        }
    }
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer