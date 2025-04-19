import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchSinglePost } from "./fetchPosts";


const initialState = {
    loading:false,
    posts:[],
    post:{},
    error:'',
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
        extraReducers: (builder) => {
            builder
              .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
              })
              .addCase(fetchPosts.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch posts';
              })
              // single post cases;
              .addCase(fetchSinglePost.pending, (state)=>{
                state.loading = true;
              })
              .addCase(fetchSinglePost.fulfilled, (state, action)=>{
                state.loading = false;
                state.post = action.payload;
              })
              .addCase(fetchSinglePost.rejected, (state)=>{
                state.error = 'Something went wrong!';
              })
            }

          
})

export default postsSlice.reducer;