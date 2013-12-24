var div = document.getElementsByClassName("insetText")[0];
div.style.width = window.innerWidth-40+"px";
div.style.height = window.innerHeight-120+"px";
document.getElementById("space").style.height = window.innerHeight-100 +"px"
document.addEventListener("keypress", function(key){
	var span = document.createElement("span");
	span.innerText = String.fromCharCode(key.which);
	div.appendChild(span);
});