import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"

import Route from "./Routes"

ReactDOM.hydrate(
    <BrowserRouter>
    <Route/>
    </BrowserRouter>
, document.querySelector('#root'));
