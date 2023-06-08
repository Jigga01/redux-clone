import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
    count: 0,
};

// create slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

// export actions
export const {increment, decrement} = counterSlice.actions;

//export reducer
export default counterSlice.reducer;