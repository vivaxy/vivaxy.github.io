/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */
var req = new XMLHttpRequest();
req.open('GET', 'menu.json', true);
req.addEventListener('readystatechange', function () {
    if (req.readyState === 4 && req.status === 200) {
        var frag = document.createDocumentFragment();
        JSON.parse(req.responseText).forEach(function (menu) {
            var a = document.createElement('a'),
                span = document.createElement('span');
            a.target = '_blank';
            a.href = menu.link;
            a.dataset.text = menu.name;
            span.textContent = menu.name;
            a.appendChild(span);
            frag.appendChild(a);
        });
        document.body.appendChild(frag);
    }
});
req.send();
