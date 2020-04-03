const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
                title: "Ditambah"
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
                title: "Dikurang"
            };
        case "RESET":
            return {
                ...state,
                count: initialState.count,
                title: "Direset"
            };
        default:
            return state;
    }
};

export default reducer;
