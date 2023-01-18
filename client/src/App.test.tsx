import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import {HOME_PAGE} from "./common/routes";
import {createMemoryHistory} from 'history';
import {BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";


describe('<App/>', () => {
    it('should render homepage component in app',  () => {
        const myHistory = createMemoryHistory();
        const route = `${HOME_PAGE}`;
        myHistory.push(route);

        render(
            <BrowserRouter>
                <Homepage/>
            </BrowserRouter>
        );
        expect(screen.getByText('Homepage Welcome')).toBeInTheDocument();
    });
});


