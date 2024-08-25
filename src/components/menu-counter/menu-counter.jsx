import { useState } from "react"
import { useCount } from "../counter/use-counter.js"
import { Counter } from "../counter/counter.jsx";

export const MenuCounter = () => {
    const { value, increment, decrement } = useCount({max: 5, min: 0, v: 0});

    return (
        <Counter
            value={value}
            onIncrease={increment}
            onDecrease={decrement}/>
    );
}