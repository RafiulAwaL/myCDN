const route = require('express').Router();
const { viewDirFiles, getContentFile } = require('./cdnController')
const fs = require('fs');

// index route
route.get('/', (req, res) => {
    res.send('try /css?file=filename || /js?file=filename || /image?file=filename');
})

// getting file by url query. Ex: cdn/css?file=style.css
route.get('/:file', getContentFile)


module.exports = route;