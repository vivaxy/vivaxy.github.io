/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */
// send ajax
var req = new XMLHttpRequest();
req.open("GET", "menu.json", false);
req.send();

// get data
var json = req.responseText;
var menuList = JSON.parse(json).menu;

// append to html
var frag = document.createDocumentFragment();
for (var i = 0; i < menuList.length; i++) {
    var menu = menuList[i];
    var a = document.createElement('a'),
        span = document.createElement('span');
    a.target = '_blank';
    a.href = menu.link;
    span.innerText = menu.name;
    a.appendChild(span);
    frag.appendChild(a);
}
document.body.appendChild(frag);