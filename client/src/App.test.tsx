import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import React from "react";

describe('<App/>',() => {
    it('should render text in App',  () => {
        render(<App/>);
        expect(screen.getByText('Let\'s Go')).toBeInTheDocument();
    });
});


