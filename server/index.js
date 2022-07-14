import React from "react";
import ReactDOMServer from 'react-dom/server';
import {Navbar} from "../src/components/navbar";
import MainPage from "../src/components/mainPage";
import Contacts from "../src/components/contacts";

import express from 'express';
import * as path from "path";
import * as fs from "fs";
const app = express();

app.use(express.static("./build"));
const PORT = process.env.PORT || 4000;

app.get('/*', (req, res) => {
    console.log("Received request:", req)
    const app = ReactDOMServer.renderToString(
        <>
            <Navbar/>
            <MainPage/>
            <Contacts/>
        </>
    );

    const indexFile = path.resolve(
        "./build/index.html"
    )
    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        return res.send(
            data.replace(
                `<div id="root"></div>`,
                `<div id="root">${app}</div>`
            )
        )
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening ${PORT}`)
})


