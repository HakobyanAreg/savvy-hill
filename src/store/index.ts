import { applyMiddleware, createStore, Store } from "redux";
import {rootReducer, RootState} from "./reducers";
import thunk from "redux-thunk";

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
