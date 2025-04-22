import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsJsonApi = createApi({
    reducerPath: 'productJsonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => id ? `products/${id}` : 'products?limit=10'
        }),
        createProduct: builder.mutation({
            query: (newPost)=>({
                url: 'products',
                method: 'POST',
                body: newPost,
            })
        })
    })
})

export const {useGetProductQuery, useCreateProductMutation} = productsJsonApi;