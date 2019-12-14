import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import Reducer from "../client/reducers";

const { withExtraArgument } = thunk;

export default req => {
  const api = axios.create({
    baseURL: "http://localhost:80/api",
    headers: { token: req.get("x-auth-token") || "" }
  });

  return createStore(Reducer, {}, applyMiddleware(withExtraArgument(api)));
};
