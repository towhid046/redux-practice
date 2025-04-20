import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}`)
    const data = await res.json()
    return data;
});

export const fetchSinglePost = createAsyncThunk('posts/fetchSinglePost', async(id:number)=>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`)
    const data = await res.json()
    return data;
})

export const fetchDeletePost = createAsyncThunk('posts/fetchDeletePost', async(id:number)=>{
    await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`, {
        method:'DELETE',
    })
    return id;
})

export const fetchUpdatePost = createAsyncThunk('posts/fetchUpdatePost', async({id, data}:{id:number })=>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`, {
        method:'PATCH',
        body:JSON.stringify(data),
    })
    const finalData = await res.json()
    return finalData;
})

