/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */
/**
 * @since 2015-11-18 15:12
 * @author vivaxy
 */
'use strict';
var RippleButton = function (element) {

    element.style.overflow = 'hidden';
    element.addEventListener('touchstart', function (e) {
        e.stopPropagation();
        var rect = element.getBoundingClientRect();
        var ripple = document.createElement('div');
        var rippleStyle = ripple.style;
        var rippleRadius = rect.width;
        if (rect.height > rect.width) {
            rippleRadius = rect.height;
        }
        var animationDuration = 400;

        rippleStyle.position = 'absolute';
        rippleStyle.width = rippleRadius * 2 + 'px';
        rippleStyle.height = rippleRadius * 2 + 'px';
        rippleStyle.borderRadius = '50%';
        rippleStyle.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        rippleStyle.transform = 'scale(0)';

        var touches = e.touches;
        var touch = touches[0];
        var x = touch.offsetX || touch.clientX - rect.left;
        var y = touch.offsetY || touch.clientY - rect.top;
        rippleStyle.left = x - rippleRadius + 'px';
        rippleStyle.top = y - rippleRadius + 'px';

        element.appendChild(ripple);

        setTimeout(function () {
            rippleStyle.transition = 'transform ' + animationDuration + 'ms ease-out, background-color ' + animationDuration + 'ms ease-out';
            rippleStyle.transform = 'scale(1)';
            rippleStyle.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
                element.removeChild(ripple);
            }, animationDuration);
        }, 0);
    });
};

var req = new XMLHttpRequest();
req.open('GET', 'menu.json');
req.addEventListener('readystatechange', function () {
    if (req.readyState === 4 && req.status === 200) {
        JSON.parse(req.responseText).forEach(function (menu) {
            var a = document.createElement('a');
            var span = document.createElement('span');
            a.target = '_blank';
            a.href = menu.link;
            span.textContent = menu.name;
            a.appendChild(span);
            document.body.appendChild(a);
            new RippleButton(a);
        });
    }
});
req.send();
