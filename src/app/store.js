import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../components/counter/CounterSlice";


//create a store
export default configureStore({
    reducer: {
        //add reducer here
            counter: counterSlice.reducer
        }
});
