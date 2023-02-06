import { createSlice } from "@reduxjs/toolkit";

// The slice is the component that keeps track of the app’s state. In it, You should define the initial state and the functions that will be needed to change the state when necessary.

const initialState = {
    count: 0,
    todos: [],
}

/*
createSlice()'s three arguments:

- Name of the slice (in this case todo)

- Initial state (defined above)

- reducers (the functions that will be used to change the state values)

*/

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Math.random() * 100,
                text: action.payload,
            };
            state.todos.push(todo);
            state.count += 1;
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
        }
    }
});

// Export the functions to be able to use them in the app. You can do so by accessing todoSlice.actions.

export const { addTodo, removeTodo } = todoSlice.actions;

// The reducer will be used in the store to give your app state

export default todoSlice.reducer;