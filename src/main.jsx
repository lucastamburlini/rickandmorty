import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";

// axios.defaults.baseURL = http://localhost:3001
axios.defaults.baseURL = "https://rickandmorty-api-production-e3c7.up.railway.app"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
