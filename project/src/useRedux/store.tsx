import { combineReducers, legacy_createStore } from "redux";
import { QuotesReducer } from "./QuotesReducer";

const combine = combineReducers({
    QuotesReducer,
})

export type StateType = ReturnType<typeof combine>

export const store = legacy_createStore(combine)