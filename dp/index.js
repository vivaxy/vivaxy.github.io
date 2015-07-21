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
    if (!this.hasAttribute('disabled')) {
        this.setAttribute('disabled', '');
        var text = textarea.value,
            uuid = getQueryStringByName(text, 'uuid_token'),
            req = new XMLHttpRequest();
        req.open('GET', 'data.json', true);
        req.addEventListener('readystatechange', function () {
            if (req.readyState === 4 && req.status === 200) {
                var data = JSON.parse(req.responseText),
                    getValue = function (name) {
                        return (Math.random() * (data[name].high - data[name].low) + data[name].low).toFixed(5);
                    };
                location.href = 'http://qywx.dper.com/app/checkin.html#/sign?uuid_token=' + uuid + '&longitude=' + getValue('longitude') + '&latitude=' + getValue('latitude');
            }
        });
        req.send();
    }
});

check.addEventListener('click', function () {
    if (!this.hasAttribute('disabled')) {
        this.setAttribute('disabled', '');
        var text = textarea.value,
            uuid = getQueryStringByName(text, 'uuid_token');
        location.href = 'http://qywx.dper.com/app/checkin.html#/search?uuid_token=' + uuid;
    }
});
