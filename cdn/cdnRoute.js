const route = require('express').Router();
const { getContentFile } = require('./cdnController')

// index route
route.get('/', (req, res) => {
    res.send('try /css?file=filename || /js?file=filename || /image?file=filename');
})

// getting file by param. Ex: cdn/dirName/fileName
route.get('^/:dir/:file?', getContentFile)


module.exports = route;
