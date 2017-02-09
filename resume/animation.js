var url = new Url();
var style = url.parameter('style') || 'opacity';

Array.prototype.slice.call(document.querySelectorAll('.card')).forEach(function(card, index) {
    card.classList.remove('hide');
    card.classList.add(style);
    setTimeout(function() {
        card.classList.remove(style);
    }, (index + 1) * 200);
});
