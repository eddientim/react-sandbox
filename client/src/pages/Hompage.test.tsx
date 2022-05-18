import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Homepage from "./Homepage";
import * as React from "react";

describe('<Homepage/>', () => {
    it('Should render the homepage title', () => {
        render(<Homepage/>);
        expect(screen.getByText('Homepage Welcome')).toBeInTheDocument();
    })
});
