import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Slice/Slice";
  // Import the reducer, not the whole slice

const store = configureStore({
    reducer: {
        userInfo: userReducer,  // Correct way to use the reducer
    }
})

export default store;

