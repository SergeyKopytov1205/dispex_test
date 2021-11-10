import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { clientsReducer } from "./clientsReducer";
import { housesReducer } from "./housesReducer";


const rootReducer = combineReducers({
   houses: housesReducer,
   clients: clientsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))