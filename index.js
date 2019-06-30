/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */
const req = new XMLHttpRequest();
req.open('GET', 'menu.json');
req.addEventListener('readystatechange', function() {
  if (req.readyState === 4 && req.status === 200) {
    JSON.parse(req.responseText).forEach(function(menu) {
      const a = document.createElement('a');
      a.href = menu.link;
      a.textContent = menu.name;
      document.body.appendChild(a);
    });
  }
});
req.send();
