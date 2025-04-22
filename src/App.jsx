import { useState } from 'react';
import BooksView from './features/books/BooksView';
import BurgerView from './features/burger/burgerView';
import PizzaView from './features/pizza/pizzaView';
import PostView from './features/posts/PostView';
import SingleProductView from './features/products/SingleProductView';
import ProductView from './features/products/productView';
const App = () => {
  const [productId, setProductId] = useState(null);

  return (
    <>
      <header>
        <h2 className='text-4xl font-bold text-center py-5'>Redux Practice</h2>
      </header>
      <main className='mx-auto px-6 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5'>
          <PizzaView />
          <BurgerView />
        </div>
        <div className='mt-10'>
          <PostView />
        </div>
        <div className='mt-10'>
          <ProductView setProductId={setProductId} />
          {productId && <SingleProductView productId={productId} setProductId={setProductId} />}
        </div>
        <div className='mt-10'>
          <BooksView />
        </div>
      </main>
    </>
  )
}

export default App;