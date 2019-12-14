import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import Reducer from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const initialState = window.INITIAL_STATE;
const { withExtraArgument } = thunk;
const middleware = [withExtraArgument(axiosInstance)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  Reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
