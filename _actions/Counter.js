import { useDispatch } from "react-redux";

const useCounter = () => {
    const dispatch = useDispatch();
    const increment = () => {
        console.log("Ditambah");
        dispatch({
            type: "INCREMENT"
        });
    };
    const decrement = () => {
        console.log("Dikurang");
        dispatch({
            type: "DECREMENT"
        });
    };
    const reset = () => {
        console.log("Direset");
        dispatch({
            type: "RESET"
        });
    };
    return { increment, decrement, reset };
};

export default useCounter;
