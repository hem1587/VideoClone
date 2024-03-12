import {  combineReducers, legacy_createStore } from "redux"
import videosReducer from "./Reducer"


const store = legacy_createStore (videosReducer);
export default store;