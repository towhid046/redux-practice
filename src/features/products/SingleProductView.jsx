import React from 'react';
import { useGetProductQuery } from './productsJsonApi';

const SingleProductView = ({productId, setProductId}) => {
    const { data: item, isLoading, error, isError } = useGetProductQuery(productId)
    let render;

    if (isLoading) {
        render = <p>Loading...</p>
    }
    if (isError) {
        render = <p>{error}</p>
    }
    if (!isError && !isLoading && typeof(item) === 'object') {
        render = <div key={item.id} className="max-w-xl mx-auto p-5 border rounded-md border-gray-200 flex flex-col justify-between gap-4">
            <figure className='rounded-md flex justify-center items-center'>
                <img className='h-48 w-auto ' src={item.image} alt={item.title} />
            </figure>
            <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <strong className='text-red-400'>Price: ${item.price}</strong>
                <p>{item.description}</p>
                <p>Rating: {item.rating?.rate}</p>
            </div>
            <button onClick={()=>setProductId(null)} className="cursor-pointer py-2.5 text-m px-4 text-white bg-blue-400 rounded-md ">
                Close
            </button>
        </div>
    }

    return (
        <section className="items-center fixed z-50 inset-0 bg-gray-900 opacity-90 text-white flex flex-col justify-center border border-gray-300 p-5 rounded-md">
            {render}
        </section>
    )
}

export default SingleProductView