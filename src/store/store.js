import {configureStore} from "@reduxjs/toolkit";
import csvReducer from "../reducers/reducer";
import loginReducer from "../reducers/loginReducer";
const store = configureStore({
    reducer: {
        csv: csvReducer,
        login: loginReducer
    }
})
export default store;