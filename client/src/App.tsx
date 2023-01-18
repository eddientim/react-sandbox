import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import {HOME_PAGE} from "./common/routes";


export function App(): JSX.Element {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={HOME_PAGE} component={Homepage}/>
        </Switch>
        </BrowserRouter>
    );
}
