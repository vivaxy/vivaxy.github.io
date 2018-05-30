/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */

var req = new XMLHttpRequest();
req.open('GET', 'menu.json');
req.addEventListener('readystatechange', function() {
  if (req.readyState === 4 && req.status === 200) {
    JSON.parse(req.responseText).forEach(function(menu) {
      var a = document.createElement('a');
      a.target = '_blank';
      a.href = menu.link;
      a.textContent = menu.name;
      document.body.appendChild(a);
    });
  }
});
req.send();
