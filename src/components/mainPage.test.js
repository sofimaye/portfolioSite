import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import MainPage from "./mainPage";

test('renders main page photo', () => {
    let {getByRole} = render(<MainPage/>);
    const image = getByRole("img");
    expect(image).toBeTruthy()
    expect(image).toHaveAttribute("src", "/images/IMGnewsize1.JPG")
    expect(image).toHaveAttribute('alt', 'my photo')
})
