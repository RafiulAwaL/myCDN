const fs = require('fs');
const path = require('path');

// getting root dir
const dir = path.resolve('./')

exports.getContentFile = (req, res) => {
    const fileName = req.query.file;
    fs.readdir(`${dir}/files${req.path}/`, (err, files) => {
        // if any err happen or user give wrong dir name that dosent exist.
        if (err || !files) {
            console.log(`${err}\nwrong cdn path. please try again`);
            res.send('wrong cdn path. please try again');
        }
        // if dir found, print all files
        else if (files.indexOf(fileName) === -1) {
            res.send(`Available files are: ${files}`)
        }
        // if get input with query, send the file
        else {
            res.sendFile(`${dir}/files${req.path}/${fileName}`);
        }
    })
}
