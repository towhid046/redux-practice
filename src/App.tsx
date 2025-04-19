
import BurgerView from './features/burger/burgerView';
import PizzaView from './features/pizza/pizzaView';
const App = () => {

  return (
    <div className='space-y-4'>
      <h2 className='text-4xl font-bold text-center py-5'>Redux Practice</h2>
      <PizzaView />
      <BurgerView />
    </div>
  )
}

export default App;