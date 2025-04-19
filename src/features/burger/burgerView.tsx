import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerChoice, orderBurger } from "./burgerSlice";

const BurgerView = () => {
    const burgerBuns = useSelector((state) => state?.burger);
    const dispatch = useDispatch()
    const [inputCount, setInputCount] = useState<number>(1)

    return (
        <div className="w-full rounded-md border p-12 flex justify-center items-center flex-col mx-auto border-gray-300">
            <h2 className="text-2xl font-semibold">Burger Buns- {burgerBuns.burger_buns || 0}</h2>
            <button onClick={() => dispatch(orderBurger())} className="cursor-pointer py-2.5 px-4 bg-blue-400 mt-5 text-white text-center rounded-md">Order Burger- (1 pis)</button>

            <div className="flex flex-col gap-2 justify-center items-center mt-5">
                <input min={1} value={inputCount} onChange={(e) => setInputCount(Number(e.target.value))} type="number" className="border-2 border-blue-300 rounded-md py-2.5 px-4 focus:outline-none" />
                <button onClick={() => dispatch(customerChoice(inputCount))} className="cursor-pointer py-2.5 px-4 bg-red-400 mt-5 text-white text-center rounded-md">Customer Choice</button>
            </div>
        </div>
    )
}

export default BurgerView