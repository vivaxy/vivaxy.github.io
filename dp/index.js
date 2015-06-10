/**
 * @since 150316 09:55
 * @author vivaxy
 */
var textarea = document.querySelector('textarea'),
    sign = document.querySelector('.sign'),
    check = document.querySelector('.check'),

    getQueryStringByName = function (url, name) {

        var a = document.createElement('a');
        a.href = url;
        var search = a.search || a.hash;
        var result = search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result === null || result.length < 1) {
            return '';
        }
        return result[1];

    };

sign.addEventListener('click', function () {
    var text = textarea.value,
        uuid = getQueryStringByName(text, 'uuid_token'),
        longitudeRandom = Math.random() * 200,
        latitudeRandom = Math.random() * 200,
        // http://qywx.dper.com/app/checkin/loadSign?longitude=0&latitude=0
    // 121.41460 ~ 121.41659
        longitude = ((41460 + longitudeRandom) / 100000 + 121).toFixed(5),
    // 31.21616 ~ 31.21815
        latitude = ((21616 + latitudeRandom) / 100000 + 31).toFixed(5);
    location.href = 'http://qywx.dper.com/app/checkin.html#/sign?uuid_token=' + uuid + '&longitude=' + longitude + '&latitude=' + latitude;
});

check.addEventListener('click', function () {
    var text = textarea.value,
        uuid = getQueryStringByName(text, 'uuid_token');
    location.href = 'http://qywx.dper.com/app/checkin.html#/search?uuid_token=' + uuid;

});