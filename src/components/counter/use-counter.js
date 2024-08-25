import { useState } from "react";

export const useCount = ({ max, min, v}) => {
    const [value, setValue] = useState(v);


    const increment = () => {
        if (value >= max)
            return;

        setValue(value + 1);
    }

    const decrement = () => {
        if (value <= min)
            return;

        setValue(value - 1);
    }

    return {
        value,
        increment,
        decrement,
    };
};