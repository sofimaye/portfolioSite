import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {MobileNavBar, Navbar} from "./navbar";
import {MemoryRouter} from "react-router-dom";

afterEach(cleanup)
describe("Navbar", () => {
    test("should show main nav bar on large screen", () => {
            // given
            window.innerWidth = 900;
            // when
            render(<MemoryRouter>
                <Navbar/>
            </MemoryRouter>);
            // then
            expect(screen.getByTestId("main-nav-bar")).toBeInTheDocument();
            expect(screen.queryByText("mobile-nav-bar")).not.toBeInTheDocument();
        }
    );

    test("should show mobile nav bar on small screen", () => {
        // given
        window.innerWidth = 600;
        // when
        render(<MemoryRouter>
            <Navbar/>
        </MemoryRouter>);
        // then
        expect(screen.getByTestId("mobile-nav-bar")).toBeInTheDocument();
        expect(screen.queryByText("main-nav-bar")).not.toBeInTheDocument();
    });
});

test("should open side menu when clicked on burger button", () => {
        render(<MemoryRouter>
            <MobileNavBar/>
        </MemoryRouter>);

        //pull and click on button to open
        const clickOnMenuBtn = screen.getByTestId("mobile-nav-bar-label");
        fireEvent.click(clickOnMenuBtn);

        const menuDetails = screen.queryByText(/home/i);
        expect(menuDetails).toBeInTheDocument();

        //button closed
        fireEvent.click(clickOnMenuBtn);
        expect(menuDetails).not.toBeInTheDocument();
    })