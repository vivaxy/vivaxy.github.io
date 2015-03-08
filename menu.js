/**
 * @since 2014/9/9 9:11
 * @author vivaxy
 */
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "menu.xml", false);
xmlHttp.send();
var xmlDoc = xmlHttp.responseXML;
var menu = "";
var menuItemList = xmlDoc.getElementsByTagName("menu")[0].getElementsByTagName("item");
for (var i = 0; i < menuItemList.length; i++) {
    menu = menu +
    "<a target='_blank' href='" +
    menuItemList[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
    "'>" +
    menuItemList[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</a>";
}
document.write(menu);