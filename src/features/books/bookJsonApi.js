import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookJsonApi = createApi({
    reducerPath: 'bookJsonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_URL + '/'
    }),
    endpoints: (builder) => ({
        getBook: builder.query({
            query: (id) => id ? `books/${id}` : 'books' 
        }),
        createBook : builder.mutation({
            query: (newBook)=>({
                url: 'books',
                method: 'POST',
                body: newBook,
            })
        }),
        deleteBook : builder.mutation({
            query: (id)=>({
                url: `books/${id}`,
                method: 'DELETE',
            })
        }),
        updateBook : builder.mutation({
            query: ({id, updatedData})=>({
                url: `books/${id}`,
                method: 'PATCH',
                body: updatedData
            })
        })
    })
})

export const {useGetBookQuery, useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation} = bookJsonApi;