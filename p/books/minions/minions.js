var html = "<div class=\"menu\">" +
		"<ul>" +
		"<li><a><img id=\"minions\" /></a>" +
		"<ul>" + 
		"<li><a id=\"spe\" href=\"../../../index.html\">返回首页</a></li>";
for (var i=0;i<19;i++){
	html = html + "<li><a href=\"javascript:goto('a"+(i+1)+"');\">"+(i+1)+"</a></li>";
}
html = html + 
		"</ul>" +
		"</li>" +
		"</ul>" +
		"</div>";
document.write(html);
var image = document.getElementById("minions");
image.src = "../minions/Cute_Dave.png";
image.height = "30";