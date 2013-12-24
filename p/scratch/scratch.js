var paintings = {
	list: [
		{type:"text",content:"谢谢惠顾",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"},
		{type:"text",content:"你真蛋疼",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"},
		{type:"text",content:"为何放弃治疗",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"},
		{type:"text",content:"智商捉急",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"},
		{type:"text",content:"累觉不爱",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"},
		{type:"text",content:"我勒个去",fontFamily:"Microsoft YaHei",fontWeight:"bold",fillStyle:"black"}
	],
	devideTo:50,
};
var random = Math.floor(Math.random() * paintings.list.length);
var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 100;
if (paintings.list[random].type == "image"){
	var img = new Image();
	img.src = paintings.list[random].content;
	img.onload = function (){
		if (img.width/img.height > canvas.width/canvas.height){
			paintings.width = canvas.width;
			paintings.height = img.height/img.width*paintings.width;
		}else{
			paintings.height = canvas.height;
			paintings.width = img.width/img.height*paintings.height;
		}
		paintings.clearSize = Math.sqrt(paintings.width*paintings.height)/paintings.devideTo;
		ctx.drawImage(img, canvas.width/2-paintings.width/2, canvas.height/2-paintings.height/2, paintings.width, paintings.height);
		paintLayer();
	}
}
if (paintings.list[random].type == "text"){
	var text = {
		content : paintings.list[random].content,
		height : 1000,
		fillStyle : paintings.list[random].fillStyle,
		align : "center",
		baseline : "middle",
		fontFamily : paintings.list[random].fontFamily,
		fontWeight : paintings.list[random].fontWeight,
	};
	ctx.font = text.fontWeight + " " + text.height + "px " + text.fontFamily;
	ctx.textAlign = text.align;
	ctx.textBaseline = text.baseline;
	text.width = ctx.measureText(text.content).width;
	if (text.width / text.height > canvas.width / canvas.height) {
		text.height = canvas.width / text.width * text.height;
	} else {
		text.height = canvas.height;
	}
	ctx.font = text.fontWeight + " " + text.height + "px " + text.fontFamily;
	text.width = ctx.measureText(text.content).width;
	paintings.clearSize = Math.sqrt(text.width*text.height)/paintings.devideTo;
	ctx.fillStyle = text.fillStyle;
	ctx.fillText(text.content, canvas.width / 2, canvas.height / 2);
	paintLayer();
}
function paintLayer(){
	var layerCanvas = document.getElementById("layerCanvas"), layerCtx = layerCanvas.getContext("2d");
	width = document.getElementById("canvas").width;
	height = document.getElementById("canvas").height;
	layerCanvas.width = width;
	layerCanvas.height = height;
	layerCtx.fillStyle = "#ffffff";
	layerCtx.fillRect(0, 0, layerCanvas.width, layerCanvas.height);
	layerCanvas.onmousemove = function(e) {
		var mouseX = e.offsetX || e.layerX - this.offsetLeft;
		var mouseY = e.offsetY || e.layerY - this.offsetTop;
		layerCtx.clearRect(mouseX-paintings.clearSize, mouseY-paintings.clearSize, paintings.clearSize*2, paintings.clearSize*2);
		layerCtx.fill();
	};
}