import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import App from "./App";

const history = createBrowserHistory();

const Index: React.FunctionComponent = (): ReactElement => {

    return (
        <Router history={history}>
            <App/>
        </Router>

    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
