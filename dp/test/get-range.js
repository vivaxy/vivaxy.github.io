#!/usr/bin/env node
/**
 * @since 150610 10:31
 * @author vivaxy
 */

var http = require('http'),

    approach = require('./approach'),

    longitude = {
        valid: 121.41560
    },
    latitude = {
        valid: 31.21716
    },
    getUrl = function (lo, la) {
        return 'http://qywx.dper.com/app/checkin/loadSign?longitude=' + lo + '&latitude=' + la;
    },
    request = function (lo, la, callback) {
        setTimeout(function () {
            http.get(getUrl(lo, la), function (res) {
                var body = '';
                res.on('data', function (d) {
                    body += d;
                });
                res.on('end', function () {
                    return callback && callback(JSON.parse(body).data.office);
                });
            });
        }, Math.random() * 10000);
    };

longitude.lowMin = 0;
longitude.lowMax = longitude.valid;
longitude.highMin = longitude.valid;
longitude.highMax = 180;
longitude.min = 0;
longitude.max = 0;
longitude.get = function (value, callback) {
    request(value, latitude.valid, callback);
};

latitude.lowMin = 0;
latitude.lowMax = latitude.valid;
latitude.highMin = latitude.valid;
latitude.highMax = 90;
latitude.min = 0;
latitude.max = 0;
latitude.get = function (value, callback) {
    request(longitude.valid, value, callback);
};

// get longitude min bound
approach(longitude.lowMin, longitude.lowMax, longitude.get, 'longitude low');
approach(longitude.highMin, longitude.highMax, longitude.get, 'longitude high');
approach(latitude.lowMin, latitude.lowMax, latitude.get, 'latitude low');
approach(latitude.highMin, latitude.highMax, latitude.get, 'latitude high');
