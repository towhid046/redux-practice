import React from 'react';
import { useDeleteBookMutation, useGetBookQuery, useUpdateBookMutation } from './bookJsonApi';

const BooksView = () => {
  const { data, isLoading, error, isError, refetch } = useGetBookQuery()
  const [deleteBookFn] = useDeleteBookMutation();
  const [updateBookFn] = useUpdateBookMutation()

  const deleteBookHandler = async (id) => {
    await deleteBookFn(id)
    refetch()
  }
  
  const updateBookHandler = async (id) => {
    const updatedBook = { title: 'Book Updated' }
    await updateBookFn({ id, updatedData:updatedBook })
    refetch()
  }
  
  let render;

  if (isLoading) {
    render = <p>Loading...</p>
  }
  if (isError) {
    render = <p>{error.message || 'Something went wrong'}</p>
  }
  if (!isError && !isLoading && data.length > 1) {
    render = data.map(item => (
      <div key={item.id} className="p-5 border rounded-md border-gray-200 flex flex-col justify-between gap-4">
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>{item.title}</h2>
          <p>{item.body?.split('')?.slice(0, 100)?.join('')}...</p>
        </div>
        <div className='flex items-center gap-5'>
          <button onClick={() => deleteBookHandler(item.id)} className="cursor-pointer hover:bg-red-500 duration-300 py-2.5 text-m px-4 text-white bg-red-400 rounded-md ">
            Delete
          </button>
          <button onClick={()=>updateBookHandler(item.id)} className="cursor-pointer hover:bg-green-500 duration-300 py-2.5 text-m px-4 text-white bg-green-400 rounded-md ">
            Update
          </button>
        </div>
      </div>
    ))
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-center underline mb-5">Books View</h2>
      <section className="border border-gray-300 p-5 rounded-md grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {render}
      </section>
    </>
  )
}

export default BooksView;