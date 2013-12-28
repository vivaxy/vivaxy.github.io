var div = document.getElementsByClassName("insetText")[0];
div.style.width = window.innerWidth+"px";
div.style.height = window.innerHeight+"px";
document.addEventListener("keypress", function(key){
	var span = document.createElement("span");
	span.innerText = String.fromCharCode(key.which);
	div.appendChild(span);
});
