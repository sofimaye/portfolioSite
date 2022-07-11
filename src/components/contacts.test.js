import Contacts from "./contacts";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';


test('renders contacts', () => {
    render(<Contacts/>);
    expect(screen.queryByText(/Hi, my name is Sofi./i)).toHaveTextContent("Hi, my name is Sofi.")
})
