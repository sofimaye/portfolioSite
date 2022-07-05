import React from "react";
import '@testing-library/jest-dom';
import Portfolio from "./portfolio";
import {render} from "@testing-library/react";


test('images presence on the page', () => {
        const {getAllByRole} = render(<Portfolio/>);
        const images = getAllByRole('img');
        expect(images.length).toEqual(17);
    })