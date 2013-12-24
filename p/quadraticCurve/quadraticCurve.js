var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 80;
function draw() {
	var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < imgData.data.length; i += 4) {
		imgData.data[i + 3] = imgData.data[i + 3] - 10;
	}
	ctx.putImageData(imgData, 0, 0);
	setTimeout(draw, 1000);
}
canvas.addEventListener('mousemove', function(e) {
	ctx.beginPath();
	ctx.moveTo(0, 0);
	var mouseX = e.offsetX || e.layerX - this.offsetLeft;
	var mouseY = e.offsetY || e.layerY - this.offsetTop;
	ctx.strokeStyle = "black";
	ctx.shadowBlur = 10;
	ctx.shadowColor = "black";
	ctx.quadraticCurveTo(mouseX, mouseY, canvas.width, 0);
	ctx.stroke();
});
draw();