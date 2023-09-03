import { createStore, combineReducers } from "redux";
import { commonReducer } from "../Reducer/commonReducer";

export const configStore = () => {
    const store = createStore(
        combineReducers({commonReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}