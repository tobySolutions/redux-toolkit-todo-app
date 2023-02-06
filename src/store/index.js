import { configureStore } from "@reduxjs/toolkit";
import todoReducer from ".././slices/TodoSlice";


//  This will make the store listen to our reducer and that’s how we’ll be able to access the variables and the functions inside our slice. We’ll name our reducer “todo”

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;