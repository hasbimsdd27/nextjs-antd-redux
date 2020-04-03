const initialState = {
    classes: [],
    classesSelect: [],
    addClass: []
};

const Class = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CLASSES":
            return {
                ...state,
                classes: action.data.data
            };
        case "GET_CLASSES_SELECT":
            return {
                ...state,
                classesSelect: action.data.data
            };
        case "ADD_CLASS":
            return {
                ...state,
                addClass: action.data.data
            };
        case "GET_DETAILS_CLASS":
            return {
                ...state,
                detailsClass: action.data.data
            };
        default:
            return state;
    }
};

export default Class;
