var _hmt = _hmt || [];
(function () {
    var hm = document.createElement('script');
    hm.src = '//hm.baidu.com/hm.js?1907e318e2efbb82d9cd8bb2265f715d';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
})();

// window.addEventListener('error', function (e) {
//     var prettify = function (o) {
//         var output = '\n';
//         for (var i in o) {
//             if (o.hasOwnProperty(i)) {
//                 output += '"' + i + '": ' + JSON.stringify(o[i], null, '    ') + ',\n';
//             }
//         }
//         return output;
//     };
//     var dateFormat = function (date) {
//         var pad = function (number, length) {
//             var numberString = number.toString();
//             while (numberString.length < length) {
//                 numberString = '0' + numberString;
//             }
//             return numberString;
//         };
//         var timezoneOffset = date.getTimezoneOffset();
//         return date.getFullYear() + '-' +
//             pad(date.getMonth() + 1, 2) + '-' +
//             pad(date.getDate(), 2) + ' ' +
//             pad(date.getHours(), 2) + ':' +
//             pad(date.getMinutes(), 2) + ':' +
//             pad(date.getSeconds(), 2) + '.' +
//             pad(date.getMilliseconds(), 3) + ' ' +
//             (timezoneOffset > 0 ? '-' : '+') + pad(Math.floor(Math.abs(timezoneOffset) / 60) * 100 + Math.abs(timezoneOffset) % 60, 4);
//     };
//     var owner = 'vivaxy';
//     var repo = 'vivaxy.github.io';
//     var number = 1;
//     var token = 'c1c31b9b66a9e409569c473cb91f80ff3afa9304'.split('').reverse().join('');
//     var window$screen = window.screen;
//     var window$screen$orientation = window$screen.orientation || {};
//     var screen = {
//         'height': window$screen.height,
//         'width': window$screen.width,
//         'avail-height': window$screen.availHeight,
//         'avail-width': window$screen.availWidth,
//         'avail-top': window$screen.availTop,
//         'avail-left': window$screen.availLeft,
//         'color-depth': window$screen.colorDepth,
//         'pixel-depth': window$screen.pixelDepth,
//         'orientation': {
//             'angle': window$screen$orientation.angle,
//             'type': window$screen$orientation.type
//         }
//     };
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/comments', true);
//     xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//     xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
//     xhr.setRequestHeader('Authorization', 'token ' + token);
//     xhr.send(JSON.stringify({
//         body: '```json' +
//         '\n' +
//         prettify({
//             'time': dateFormat(new Date()),
//             'platform': navigator.platform,
//             'user-agent': navigator.userAgent,
//             'location': location.href,
//             'referrer': document.referrer,
//             'devicePixelRatio': window.devicePixelRatio,
//             'screen': screen,
//             'language': navigator.language,
//             'languages': navigator.languages,
//             'max-touch-points': navigator.maxTouchPoints
//         }) +
//         prettify({
//             'error': e.error.stack.split('\n')
//         }).slice(0, -2) +
//         '\n' +
//         '```'
//     }));
// }, false);
