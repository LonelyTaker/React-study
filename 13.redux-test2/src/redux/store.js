import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

export default createStore(combineReducers({ count: countReducer, persons: personReducer }), applyMiddleware(thunk))
