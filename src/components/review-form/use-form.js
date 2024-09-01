import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rate: 1
};

const reducer = (state, { type, payload }) => {

    switch (type) {
        case "SET_NAME":
            return { ...DEFAULT_FORM_VALUE, name: payload.target.value };
        case "SET_TEXT":
            return { ...state, text: payload.target.value };
        case "SET_RATE":
            return { ...state, rate: payload };
        case "CLEAR":
            return { ...DEFAULT_FORM_VALUE };
        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const setName = (event) => dispatch({ type: "SET_NAME", payload: event });
    const setRate = (rate) =>
        dispatch({ type: "SET_RATE", payload: rate });
    const setText = (event) => dispatch({ type: "SET_TEXT", payload: event });
    const clear = (event) => dispatch({ type: "CLEAR", payload: event });

    return {
        form,
        setName,
        setText,
        setRate,
        clear
    };
};