import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";

const reducers = combineReducers({
    favorite: favoriteReducer
});

export default reducers