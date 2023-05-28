import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";

export const rootReducer = combineReducers({
    clients: clientReducer
})

export type RootType = ReturnType<typeof rootReducer>



