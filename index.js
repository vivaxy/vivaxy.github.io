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
    var ripple = document.createElement('div');
    var animationDuration = 400;

    var startHandler = function (e) {
        e.stopPropagation();
        var rect = element.getBoundingClientRect();
        var rippleStyle = ripple.style;
        var rippleRadius = Math.sqrt(rect.width * rect.width + rect.height * rect.height);

        rippleStyle.position = 'absolute';
        rippleStyle.width = rippleRadius * 2 + 'px';
        rippleStyle.height = rippleRadius * 2 + 'px';
        rippleStyle.borderRadius = '50%';
        rippleStyle.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        rippleStyle.opacity = '1';
        rippleStyle.transform = 'scale(0)';

        var touch = e && e.touches && e.touches.length ? e.touches[0] : e;
        var x = touch.clientX - rect.left;
        var y = touch.clientY - rect.top;
        rippleStyle.left = x - rippleRadius + 'px';
        rippleStyle.top = y - rippleRadius + 'px';

        element.appendChild(ripple);

        setTimeout(function () {
            rippleStyle.transition = 'transform ' + animationDuration + 'ms ease-out, opacity ' + animationDuration + 'ms ease-out';
            rippleStyle.transform = 'scale(1)';
        }, 0);
    };

    element.addEventListener('touchstart', startHandler);
    element.addEventListener('MSPointerDown', startHandler);
    element.addEventListener('pointerdown', startHandler);
    element.addEventListener('mousedown', startHandler);

    var endHandler = function () {
        ripple.style.opacity = '0';
        setTimeout(function () {
            if (~Array.prototype.indexOf.call(element.children, ripple)) {
                element.removeChild(ripple);
            }
        }, animationDuration);
    };

    element.addEventListener('touchcancel', endHandler);
    element.addEventListener('touchend', endHandler);
    element.addEventListener('pointerup', endHandler);
    element.addEventListener('MSPointerUp', endHandler);
    element.addEventListener('mouseup', endHandler);
    element.addEventListener('mouseout', endHandler);

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
