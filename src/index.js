import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Navbar} from "./components/navbar";
import {MainPage} from "./components/mainPage";
import {Portfolio} from "./components/portfolio";
import {Contacts} from "./components/contacts";
import './css/main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();