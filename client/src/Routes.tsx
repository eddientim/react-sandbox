import {BrowserRouter} from 'react-router-dom';
import {App} from "./App";
import React from 'react';

export function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}




