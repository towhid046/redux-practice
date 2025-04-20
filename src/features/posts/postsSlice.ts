import { createSlice } from "@reduxjs/toolkit";
import { fetchDeletePost, fetchPosts, fetchSinglePost, fetchUpdatePost } from "./fetchPosts";


const initialState = {
    loading:false,
    posts:[],
    post:{},
    error:'',
    deletedId:'',
    updatedId:''
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
              // fetch single post cases;
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
              //fetch single post delete cases;
              .addCase(fetchDeletePost.pending, (state)=>{
                state.loading = true;
              })
              .addCase(fetchDeletePost.fulfilled, (state, action)=>{
                state.loading = false;
                state.posts = state.posts.filter(post=> post.id !== action.payload)
              })
              .addCase(fetchDeletePost.rejected, (state)=>{
                state.error = 'Something went wrong to delete post!';
              })
              //fetch single post update cases;
              .addCase(fetchUpdatePost.pending, (state)=>{
                state.loading=true
              })
              .addCase(fetchUpdatePost.fulfilled, (state, action)=>{
                state.loading=false;
                state.updatedId = action.payload
              })
              .addCase(fetchUpdatePost.rejected, (state)=>{
                state.loading=false;
                state.error= 'Something went wrong!'
              })
            }

          
})

export default postsSlice.reducer;