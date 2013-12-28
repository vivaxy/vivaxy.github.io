var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","/conf/navigation.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
document.write("<div id='navigation'>");
document.write("<div id='btn'>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='line'></div>");
document.write("<div class='text'>MENU</div>");
document.write("</div>");
document.write("<div id='list'>");
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
	$("#navigation").css({
		width : 300,
		height : window.innerHeight,
	});
	$("#body").css({
		position : "absolute",
		width : window.innerWidth,
		height : window.innerHeight,
	});
	var ns = 0;
	$("#navigation").click(function () {
		if (ns == 0) {
			$("#body").animate({left : 300}, 300, function () {
				$("#navigation #list").css({display : "block"}).animate({left : 0}, 300, function () {
					$("#navigation .text").css({display : "block"});
					ns = 1;
				});
			});
		} else {
			$("#navigation .text").css({display : "none"});
			$("#navigation #list").animate({left : -300}, 300, function () {
				$(this).css({display : "none"});
				$("#body").animate({left : 0}, 300, function () {
					ns = 0;
				});
			});
		}
	});
	$("#body").click(function () {
		if (ns == 1) {
			$("#navigation .text").css({display : "none"});
			$("#navigation #list").animate({left : -300}, 300, function () {
				$(this).css({display : "none"});
				$("#body").animate({left : 0}, 300, function () {
					ns = 0;
				});
			});
		}
	});
});
