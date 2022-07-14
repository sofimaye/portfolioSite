// import React from "react";
import '@testing-library/jest-dom';
import Portfolio from "./portfolio";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


test('images presence on the page', () => {
    render(<Portfolio/>);
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(17);

    for (let image of images){
        expect(image.src).toBeTruthy()
        expect(image.alt).toBeTruthy()
        expect(image.onClick).toBeFalsy()
    }
});

