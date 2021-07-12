const fs = require('fs');

exports.getContentFile = (req, res) => {
    const fileName = req.query.file;
    fs.readdir(`${__dirname}/files${req.path}/`, (err, files) => {
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
            res.sendFile(`${__dirname}/files${req.path}/${fileName}`);
        }
    })
}