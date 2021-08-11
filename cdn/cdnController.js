// dependencies
const fs = require('fs');
const path = require('path');

// getting root dir
const dir = path.resolve('./')

exports.getContentFile = (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        // regex for find file name from given path
        const fileNameregx = /\w*\.\w*(\.\w*)*/ig;
        const fileName = req.path.match(fileNameregx);

        if (!fileName) {
            fs.readdir(`${dir}/${process.env.CDN_FOLDER}/${req.path}`, (err, data) => {
                // if any err happen or user give wrong dir name that dosent exist.
                if (err || !data) {
                    res.send('wrong cdn path. please try again');
                }
                else {
                    res.send(`Available: ${data}`)
                }
            })
        } else {
            // show file in response
            res.sendFile(`${dir}/${process.env.CDN_FOLDER}/${req.path}`);
        }
    } catch (error) {
        next(error)
    }
}
