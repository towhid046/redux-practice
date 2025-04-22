import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./pizzaSlice";

const PizzaView = () => {
    const pizzaBase = useSelector((state) => state?.pizza);
    const dispatch = useDispatch()

    return (
        <div className="w-full rounded-md border p-12 flex justify-center items-center flex-col mx-auto border-gray-300">
            <h2 className="text-2xl font-semibold">Pizza Base- {pizzaBase.pizza_base || 0}</h2>
            <button onClick={() => dispatch(orderPizza())} className="cursor-pointer py-2.5 px-4 bg-blue-400 mt-5 text-white text-center rounded-md">Order Pizza</button>
        </div>
    )
}

export default PizzaView