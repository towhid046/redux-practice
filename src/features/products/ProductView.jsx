import React from 'react';
import { useGetProductQuery } from './productsJsonApi';

const ProductView = ({ setProductId }) => {
  const { data, isLoading, error, isError } = useGetProductQuery()
  let render;

  if (isLoading) {
    render = <p>Loading...</p>
  }
  if (isError) {
    render = <p>{error}</p>
  }
  if (!isError && !isLoading && data.length > 1) {
    render = data.map(item => (
      <div key={item.id} className="p-5 border rounded-md border-gray-200 flex flex-col justify-between gap-4">
        <figure className='rounded-md flex justify-center items-center'>
          <img className='h-48 w-auto ' src={item.image} alt={item.title} />
        </figure>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>{item.title}</h2>
          <strong className='text-red-400'>Price: ${item.price}</strong>
          <p>{item.description?.split('')?.slice(0, 100)?.join('')}...</p>
          <p>Rating: {item.rating?.rate}</p>
        </div>
        <button onClick={() => setProductId(item.id)} className="cursor-pointer hover:bg-blue-500 duration-300 py-2.5 text-m px-4 text-white bg-blue-400 rounded-md ">
          View Details
        </button>
      </div>
    ))
  }



  return (
    <>
      <h2 className="text-2xl font-semibold text-center underline mb-5">Product View</h2>
      <section className="border border-gray-300 p-5 rounded-md grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {render}
      </section>
    </>
  )
}

export default ProductView;