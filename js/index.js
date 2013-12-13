var bg = document.getElementById("bg");
var color = ["#e74c3c","#e67e22","#f1c40f","#2ecc71","#3498db","#1abc9c","#9b59b6"];
var i = 0;
var interval = 1000;
$(document).ready(function(){
	$("#bg").width(window.innerWidth + "px");
	$("#bg").height(window.innerHeight + "px");
	fade();
});
function fade(){
	$("#bg").fadeTo(interval,1).fadeTo(interval,0,function(){
		$("#bg").css("background-color",color[i]);
		i = i+1<color.length && i+1 || 0;
		fade();
	});
}