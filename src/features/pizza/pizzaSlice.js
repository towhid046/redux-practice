import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizza_base:300
}

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        orderPizza:(state)=>{
            state.pizza_base --;
        }
    }
})

export const {orderPizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;