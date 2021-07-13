const route = require('express').Router();
const { getContentFile } = require('./cdnController')

// index route
route.get('/', (req, res) => {
    res.send('try /css?file=filename || /js?file=filename || /image?file=filename');
})

// getting dir and file by params. Ex: /dirName/fileName
route.get('^/:dir/:file?', getContentFile)


module.exports = route;