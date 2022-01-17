import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
    notesReducer, formReducer
})