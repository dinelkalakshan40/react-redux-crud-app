import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Item} from "../models/Item";


const initialState = {
    items: [] as Item[], // List of customers
    currentItem: null as Item | null,
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<Item>) => {
            const index = state.items.findIndex((item) => item.code === action.payload.code);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.code !== action.payload);
        },
        setCurrentItem: (state, action: PayloadAction<Item>) => {
            state.currentItem = action.payload; // Set or clear the current item
        },
    },
});

export const { addItem, updateItem, removeItem,setCurrentItem } = itemSlice.actions;
export default itemSlice.reducer;
