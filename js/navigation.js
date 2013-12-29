var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","/conf/navigation.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
document.write("<div id='navigation'>");
document.write("<div class='btn'>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='text'>MENU</div>");
document.write("</div>");
document.write("<div class='list'>");
document.write("<ul>");
var naviList = xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName('name');
for (var i=0;i<naviList.length;i++){
	document.write("<li><a href='");
	document.write(xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName('link')[i].childNodes[0].nodeValue);
	document.write("'>");
	document.write(naviList[i].childNodes[0].nodeValue);
	document.write("</a></li>");
}
document.write("</ul>");
document.write("</div>");
document.write("</div>");

$(document).ready(function () {
	$("#body").css({
		position : "absolute",
		width : window.innerWidth,
		height : window.innerHeight,
	});
	var ns = 0;
	$("#navigation").click(function () {
		if (ns == 0) {
			$("#navigation").css({
				width : 300,
				height : window.innerHeight,
			});
			$("#body").css({zIndex:100}).animate({left : 300}, 300, function () {
				$("#navigation .list").css({display:"block"});
				$("#navigation .text").css({display:"block"});
				var listC = 0;
				$("#navigation .list ul li").each(function(){
					$(this).delay(listC*40).animate({left : 0},100);
					listC = listC + 1;
					$("#body").css({zIndex:0});
				});
				ns = 1;
			});
		} else {
			$("#body").css({zIndex:100}).animate({left : 0}, 300, function () {
				ns = 0;
				$("#navigation .text").css({display:"none"});
				$("#navigation .list").css({display:"none"});
				$("#navigation .list ul li").css({left : -300});
				$("#navigation").css({width : 50,height : 50});
				$(this).css({zIndex:0});
			});
		}
	});
	$("#body").click(function () {
		if (ns == 1) {
			$("#body").css({zIndex:100}).animate({left : 0}, 300, function () {
				ns = 0;
				$("#navigation .text").css({display:"none"});
				$("#navigation .list").css({display:"none"});
				$("#navigation .list ul li").css({left : -300});
				$("#navigation").css({width : 50,height : 50});
				$(this).css({zIndex:0});
			});
		}
	});
});
