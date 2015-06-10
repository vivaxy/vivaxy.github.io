#!/usr/bin/env node
/**
 * @since 150610 10:31
 * @author vivaxy
 */

var http = require('http'),
    longitude = {
        valid: 121.41560
    },
    latitude = {
        valid: 31.21716
    },
    getUrl = function (lo, la) {
        return 'http://qywx.dper.com/app/checkin/loadSign?longitude=' + lo + '&latitude=' + la;
    },
    request = function (callback) {
        http.get(getUrl(), function (res) {
            var body = '';
            res.on('data', function (d) {
                body += d;
            });
            res.on('end', function () {
                callback && callback(JSON.parse(body).data.office);
            });
        });
    };

longitude.lowMin = 0;
longitude.lowMax = longitude.valid;
longitude.highMin = longitude.valid;
longitude.highMax = 180;
longitude.min = 0;
longitude.max = 0;

latitude.lowMin = 0;
latitude.lowMax = latitude.valid;
latitude.highMin = latitude.valid;
latitude.highMax = 90;
latitude.min = 0;
latitude.max = 0;

// get longitude min bound
request(function (isOffice) {
    if (isOffice){
        
    }
});