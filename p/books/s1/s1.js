document.write("<table>");
for (var i=0;i<18;i++){
	document.write("<tr><td><div><a id=\"a"+(i+1)+"\" class=\"block\" href=\"javascript:goto('a"+(i+2)+"');\"><img id=\"img"+(i+1)+"\" /></a></div></td></tr>");
}
document.write("<tr><td><div><a id=\"a"+(i+1)+"\" class=\"block\" href=\"javascript:goto('a"+(1)+"');\"><img id=\"img"+(i+1)+"\" /></a></div></td></tr>");
document.write("</table>");
for (var i=0;i<19;i++){
	document.getElementsByClassName("block")[i].style.width = window.innerWidth + "px";
	document.getElementsByClassName("block")[i].style.height = window.innerHeight + "px";
}
document.oncontextmenu = function(){return false;};
document.ondragstart = function(){return false;};
document.onselect = function(){return false;};
document.onmouseup = function(){return false;};
document.onmousedown = function(){return false;};
document.onmousewheel = function(){return false;};
goto("a1");