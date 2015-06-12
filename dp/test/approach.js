/**
 * @since 150611 13:43
 * @author vivaxy
 */

var approach = function (from, to, callback) {
    var next = (from + to) / 2;
    if (from.toFixed(5) === to.toFixed(5)) {
        return next;
    }
    if (callback(next) === callback(from)) {
        return approach(next, to, callback);
    } else {
        return approach(from, next, callback);
    }
};

var test = approach(0, 100, function (v) {
    var request = function (callback) {
        return callback(v < 12);
    };
    return request(function (res) {
        
    });
});

console.log(test);

module.exports = approach;
