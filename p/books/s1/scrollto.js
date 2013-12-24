function goto(id) {
	var idnum = id.substring(1,id.length);
	$("#" + id).ScrollTo(1000);
	loadImg(idnum);
	document.getElementById("minions").style.right = -60-idnum*30+"px";
}
function loadImg(idnum){
	var image = document.getElementById("img"+idnum);
	image.style.position = "relative";
	image.src = "../comment-j-ai-rate-ma-vie/"+idnum+".PNG";
	image.onload = function(){
		if (image.height/image.width > (window.innerHeight-60)/window.innerWidth){
			image.height = (window.innerHeight-60);
			image.style.left = (window.innerWidth-image.width)/2 +"px";
			image.style.top = "30px";
		}else{
			image.width = window.innerWidth;
			image.style.left = "0px";
			image.style.top = ((window.innerHeight-60)-image.height)/2+30 +"px";
		}
	}
}