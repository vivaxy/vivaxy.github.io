var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","/conf/navigation.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
var left = xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName("left")[0];
document.write("<div class=\"navigation\"><ul>");
var list = left.getElementsByTagName("list");
for (var i=0;i<list.length;i++){
	var head = list[i].getElementsByTagName("head")[0];
	var n = head.getElementsByTagName("name")[0];
	document.write("<li><a class=\"a\">");
	document.write(n.childNodes[0].nodeValue);
	document.write("<span class=\"arrow\"></span></a>");
	var body = list[i].getElementsByTagName("body");
	document.write("<ul>");
	for (var j=0;j<body.length;j++){
		document.write("<li><a href=\"");
		l = body[j].getElementsByTagName("link")[0];
		n = body[j].getElementsByTagName("name")[0];
		document.write(l.childNodes[0].nodeValue);
		document.write("\">");
		document.write(n.childNodes[0].nodeValue);
		document.write("</a></li>");
	}
	document.write("</ul></li>");
}
var right = xmlDoc.getElementsByTagName("navigation")[0].getElementsByTagName("right")[0];
document.write("<li class=\"right a\"><a href=\"");
document.write(right.getElementsByTagName("link")[0].childNodes[0].nodeValue);
document.write("\" style=\"width:30px;\"><img src=\"");
document.write(right.getElementsByTagName("src")[0].childNodes[0].nodeValue);
document.write("\" height=\"30px\"></a></li>");
document.write("</ul>");
document.write("</div>");