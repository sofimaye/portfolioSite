import Contacts from "./contacts";
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';


test('renders contacts', () => {
    let { queryByText } = render(<Contacts/>);
    expect(queryByText(/Hi, my name is Sofi./i)).toHaveTextContent("Hi, my name is Sofi.")
})
