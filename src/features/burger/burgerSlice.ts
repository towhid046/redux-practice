import { createSlice } from "@reduxjs/toolkit";
import { orderPizza } from "../pizza/pizzaSlice";

const initialState = {
    burger_buns:500
}

const burgerSlice = createSlice({
    name:'burger',
    initialState,
    reducers:{
        orderBurger:(state)=>{
            state.burger_buns--;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(orderPizza, (state)=>{
            state.burger_buns--;
        })
    }
})

export default burgerSlice.reducer;
export const {orderBurger} = burgerSlice.actions;