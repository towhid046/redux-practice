import { configureStore } from "@reduxjs/toolkit";
import { bookJsonApi } from "../features/books/bookJsonApi";
import burgerReducer from "../features/burger/burgerSlice";
import pizzaReducer from "../features/pizza/pizzaSlice";
import postReducer from '../features/posts/postsSlice';
import { productsJsonApi } from "../features/products/productsJsonApi";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    posts: postReducer,
    [productsJsonApi.reducerPath]: productsJsonApi.reducer,
    [bookJsonApi.reducerPath]:bookJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
        productsJsonApi.middleware, 
        bookJsonApi.middleware
      )
})


export default store;
