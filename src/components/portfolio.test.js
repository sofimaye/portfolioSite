import '@testing-library/jest-dom';
import Portfolio from "./portfolio";
import {screen, render} from "@testing-library/react";


test('images presence on the page', () => {
    render(<Portfolio/>);
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(17);
});

