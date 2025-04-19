
import BurgerView from './features/burger/burgerView';
import PizzaView from './features/pizza/pizzaView';
import PostView from './features/posts/PostView';
const App = () => {

  return (
    <>
      <header>
        <h2 className='text-4xl font-bold text-center py-5'>Redux Practice</h2>
      </header>
      <main className='mx-auto px-6 '>
        <div className='grid grid-cols-2 gap-8 '>
          <PizzaView />
          <BurgerView />
        </div>
        <div className='mt-10'>
          <PostView />
        </div>
      </main>
    </>
  )
}

export default App;