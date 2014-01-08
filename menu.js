var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","menu.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
var menu = "";
var menuList = xmlDoc.getElementsByTagName("menu")[0].getElementsByTagName("name");
for (var i=0;i<menuList.length;i++){
	menu = menu +
		"<div><a href='" +
		xmlDoc.getElementsByTagName("menu")[0].getElementsByTagName("link")[i].childNodes[0].nodeValue +
		"'>" +
		menuList[i].childNodes[0].nodeValue +
		"</a></div>";
}
document.write(menu);