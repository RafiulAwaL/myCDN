// dependencies
const fs = require('fs');
const path = require('path');

// getting root dir
const dir = path.resolve('./')

exports.getContentFile = (req, res) => {
    // regex for find file name from given path
    const fileNameregx = /\w*\.\w*(\.\w*)*/ig;
    const fileName = req.path.match(fileNameregx);

    if (!fileName) {
        fs.readdir(`${dir}/files/${req.path}`, (err, data) => {
            // if any err happen or user give wrong dir name that dosent exist.
            if (err || !data) {
                console.log(err);
                res.send('wrong cdn path. please try again');
            }
            else {
                res.send(`Available: ${data}`)
            }
        })
    } else {
        res.sendFile(`${dir}/files/${req.path}`);
    }

}
