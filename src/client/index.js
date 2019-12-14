import 'babel-polyfill'
import React from "react";
import ReactDom from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";
import './index.scss';

ReactDom.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
