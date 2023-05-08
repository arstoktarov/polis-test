import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider} from 'react-redux';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from 'react-router-dom';
import "./style.css";

import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <CookiesProvider>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </CookiesProvider>
);