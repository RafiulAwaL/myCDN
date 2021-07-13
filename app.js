const express = require('express');
const morgan = require('morgan');
const routez = require('./cdn/cdnRoute');

// main app
const app = express();

app.use(morgan('dev'));

// main index route
app.get('/', (req, res) => {
    res.send('nothing here, goto /cdn');
})

// the CDN route
app.use('/cdn', routez);

// server
app.listen(4000, () => console.log('cdn server on 4000'));
// @TODO: host your all content in "files" dir on root otherwise make change in controller.
