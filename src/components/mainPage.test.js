import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import MainPage from "./mainPage";

test('renders main page photo', () => {
    render(<MainPage/>);
    const image = screen.getByRole("img");
    expect(image).toBeTruthy()
    expect(image).toHaveAttribute("src", "/images/IMGnewsize1.JPG")
    expect(image).toHaveAttribute('alt', 'my photo')
})
