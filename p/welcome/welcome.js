var $ = function (id){
	return document.getElementsByClassName(id)[0];
}
$("textArea").style.top = window.innerHeight/2-100 + "px";
$("textArea").style.width = window.innerWidth + "px";