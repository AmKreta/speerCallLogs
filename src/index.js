import React from "react";
import ReactDOM from "react-dom";
import './css/body.css';
import './css/app.css';
import './css/header.css';

import { Provider } from "react-redux";
import { store } from "../store/configureStore";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>, document.getElementById("app"));

export default App;

