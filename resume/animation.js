var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
function getQueryStringByName(name){
	var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
	if(result == null || result.length < 1){
		return "";
	}
	return result[1];
}
var style = getQueryStringByName("style");
if (style == "") style = "opacity";
var show = function(i){
	cards[i].classList.remove(style);
};
for (var i in cards){
	cards[i].classList.add(style);
	setTimeout(show, i*200, i);
}