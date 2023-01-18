import { Router } from 'react-router-dom';
import {createBrowserHistory} from "history";
import {App} from "./App";
import * as React from "react";
import * as ReactDOM from 'react-dom';
import './index.scss';

const history = createBrowserHistory();

const Index: React.FunctionComponent = () => {

    return (
        <Router history={history}>
            <App/>
        </Router>

    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));

