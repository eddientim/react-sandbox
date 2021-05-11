import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';


const Index: React.FunctionComponent = (): ReactElement => {

    return (
        <Router>

        </Router>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));

