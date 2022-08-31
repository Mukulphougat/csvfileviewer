import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.isLoggedIn = true;
            state.userName = action.payload.name;
            state.loginTime = action.payload.loginTime;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.userName = "";
        }
    }
})
export const {login, logout} = loginSlice.actions;
export const loggedIn = state => state.login.isLoggedIn;
export const userName = state => state.login.userName;
export const loginTime = state => state.login.loginTime;
export default loginSlice.reducer;