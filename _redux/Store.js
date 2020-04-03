import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";

import classes from "../_reducers/Class";
import coba from "../_reducers/Coba";

const rootReducers = combineReducers({
    classes,
    coba
});

export const initializeStore = () => {
    return createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(logger))
    );
};
