import React from "react";
import { useSelector } from "react-redux";
import useCounter from "../_actions/Counter";

const Counter = () => {
    const { count, title } = useSelector(state => state.coba);
    const { increment, decrement, reset } = useCounter();
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
                <span>{title}</span>
            </h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
