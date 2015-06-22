#!/usr/bin/env node
/**
 * @since 150622 13:34
 * @author vivaxy
 */
var fs = require('fs'),
    getRange = require('./data/get-range'),
    filePath = './data.json';

getRange(function (rangeData) {
    fs.writeFile(filePath, JSON.stringify(rangeData), function (err) {
        if (err) throw err;
        console.log('saved to ' + filePath);
    });
});
