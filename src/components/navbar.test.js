import React from "react";
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {MobileNavBar, Navbar} from "./navbar";
import {MemoryRouter} from "react-router-dom";

afterEach(cleanup)

describe("Navbar", () => {
    test("should show main nav bar on large screen", () => {
            // given
            window.innerWidth = 900;
            // when
            const {getByTestId, queryByText} = render(<MemoryRouter>
                <Navbar/>
            </MemoryRouter>);
            // then
            expect(getByTestId("main-nav-bar")).toBeInTheDocument();
            expect(queryByText("mobile-nav-bar")).not.toBeInTheDocument();
        }
    );

    test("should show mobile nav bar on small screen", () => {
        // given
        window.innerWidth = 600;
        // when
        const {getByTestId, queryByText} = render(<MemoryRouter>
            <Navbar/>
        </MemoryRouter>);
        // then
        expect(getByTestId("mobile-nav-bar")).toBeInTheDocument();
        expect(queryByText("main-nav-bar")).not.toBeInTheDocument();
    });
});

describe("MobileNavBar", () => {
    test("should open side menu when clicked on burger button", () => {
        const {getByTestId, queryByText} = render(<MemoryRouter>
            <MobileNavBar/>
        </MemoryRouter>);

        //pull and click on button to open
        const clickOnMenuBtn = getByTestId("mobile-nav-bar-label");
        fireEvent.click(clickOnMenuBtn);
        const menuDetails = queryByText(/home/i);
        expect(menuDetails).toBeInTheDocument();

        //button closed
        fireEvent.click(clickOnMenuBtn);
        expect(menuDetails).not.toBeInTheDocument();
    })
})