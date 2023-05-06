import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import movieReducer from "./movies/movies.reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  moviesManager: movieReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
