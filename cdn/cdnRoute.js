const route = require('express').Router();
const { getContentFile } = require('./cdnController')

// index route of /cdn
route.get('/', (req, res) => {
    res.send('try /yourDirName/fileName');
})

// getting dir and file by params. Ex: /dirName/fileName
route.get('^/:dir/:file?', getContentFile)


module.exports = route;
