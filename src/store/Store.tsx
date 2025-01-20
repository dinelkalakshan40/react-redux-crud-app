import {configureStore} from "@reduxjs/toolkit";

import customersSlice from "../reducers/CustomersSlice";
import itemSlice from "../reducers/ItemSlice";
export const store = configureStore({
    reducer: {
        customer: customersSlice,
        item: itemSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
