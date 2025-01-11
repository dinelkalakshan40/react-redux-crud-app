import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Customer} from "../models/Customer";

// The initial state will directly define the structure of the state
const initialState = {
    customers: [] as Customer[], // List of customers
    currentCustomer: null as Customer | null, // Customer being edited
};

const customerSlice = createSlice({
    name: "customer",
    initialState ,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.customers = state.customers.filter(c => c.id !== action.payload);
        },
        setCustomerForEdit: (state, action: PayloadAction<Customer>) => {
            state.currentCustomer = action.payload; // Set the current customer data for editing
        },
        updateCustomer: (state, action: PayloadAction<Customer>) => {
            const index = state.customers.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
    },
});

export const { addCustomer, removeCustomer,updateCustomer,setCustomerForEdit } = customerSlice.actions;
export default customerSlice.reducer;
