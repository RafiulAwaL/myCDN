/*
 * title: Local CDN
 * author: rafi0x
 * description: practice project
 * date: 07-13-2021
 */

// dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routez = require('./cdn/cdnRoute');

// main app
const app = express();

// middleware
app.use(morgan('dev'));


// main index route
app.get('/', (req, res) => {
    res.send('nothing here, goto /cdn');
})

// the CDN route
app.use('/cdn', routez);

// error handler
app.use((err, req, res, next) => {
    switch (err.status) {
        case 404:
            return res.send('file not found or worng file name')
        default:
            return res.send('internal server error')
    }
})

// server
app.listen(process.env.CDN_PORT, () => console.log(`CDN server running no ${process.env.CDN_PORT} port`));
