import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
