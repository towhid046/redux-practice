import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../features/pizza/pizzaSlice";
import burgerReducer from "../features/burger/burgerSlice";
import postReducer from '../features/posts/postsSlice';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    posts: postReducer
  }
})


export default store;
