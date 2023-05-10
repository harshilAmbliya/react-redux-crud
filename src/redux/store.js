import { configureStore } from "@reduxjs/toolkit";
import userslice from "./slices/userslice";
const store = configureStore({
    reducer :{
        users : userslice,
    }
});

export default store;