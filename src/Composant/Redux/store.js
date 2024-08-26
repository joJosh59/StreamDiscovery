import { configureStore } from "@reduxjs/toolkit";
import {ReducerF, ReducerS} from "./reducer";


const store = configureStore({
    reducer: {
        film: ReducerF,
        serie: ReducerS,
    },
});

export default store;