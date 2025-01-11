import {configureStore} from "@reduxjs/toolkit";

import customerReducer from "../reducers/CustomersSlice"
import itemReducer from "../reducers/ItemSlice"
export const store = configureStore({
    reducer: {
        customer: customerReducer,
        item: itemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
