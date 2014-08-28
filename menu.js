var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "menu.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;
var menu = "";
var menuItemList = xmlDoc.getElementsByTagName("menu")[0].getElementsByTagName("item");
for (var i = 0; i < menuItemList.length; i++) {
    menu = menu +
        "<div><a target='_blank' href='" +
        menuItemList[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
        "'>" +
        menuItemList[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</a></div>";
}
document.write(menu);