var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-50;
canvas.style.cursor = "url('openhand.cur'),auto";
var fInput = document.getElementById("fInput");
var fButon = document.getElementById("fButon");
var fShowGrid = document.getElementById("fShowGrid");
var fShowCoordinate = document.getElementById("fShowCoordinate");
var fRatioChange = document.getElementById("fRatioChange");
var fGrid = document.getElementById("fGrid");
var fCoordinate = document.getElementById("fCoordinate");
var getCookie = function(c_name){
	if (document.cookie.length>0){
		var c_start = document.cookie.indexOf(c_name);
		if (c_start != -1){
			var c_end = document.cookie.indexOf(";",c_start);
			var returnInt = parseInt(document.cookie.substring(c_start+c_name.length+1,c_end));
			if (!isNaN(returnInt)){
				return returnInt;
			}
		}
	}
	return 1;
};
var exdate = new Date();
exdate.setDate(exdate.getDate()+365);
var f = {
		x : 0,
		y : 0,
		ratio : 100,
		ratioChange : 1.1,
		showGrid : getCookie("showGrid"),
		showCoordinate : getCookie("showCoordinate"),
};
var mouse = {};
var toCx = function(fx){
	return canvas.width/2+(fx+f.x)*f.ratio;
};
var toCy = function(fy){
	return canvas.height/2-(fy+f.y)*f.ratio;
};
var toFx = function(cx){
	return (cx-canvas.width/2)/f.ratio-f.x;
};
var toFy = function(cy){
	return (canvas.height/2-cy)/f.ratio-f.y;
};
var drawBackground = function(){
	ctx.fillStyle = "#ecf0f1";
	ctx.fillRect(0,0,canvas.width,canvas.height);
};
var drawGrid = function(){
	ctx.strokeStyle = "#bdc3c7";
	var gridSize = Math.pow(10,1-Math.floor(Math.log(f.ratio)/Math.LN10));
	for (var fx=Math.ceil(toFx(0)/gridSize);fx<=Math.floor(toFx(canvas.width)/gridSize);fx++){
		var cx = toCx(fx*gridSize);
		ctx.beginPath();
		ctx.moveTo(cx,0);
		ctx.lineTo(cx,canvas.height);
		ctx.stroke();
	}
	for (var fy=Math.ceil(toFy(0)/gridSize);fy>=Math.floor(toFy(canvas.height)/gridSize);fy--){
		var cy = toCy(fy*gridSize);
		ctx.beginPath();
		ctx.moveTo(0,cy);
		ctx.lineTo(canvas.width,cy);
		ctx.stroke();
	}
	fGrid.innerHTML = gridSize;
};
var drawCoordinate = function(){
	ctx.strokeStyle = "#7f8c8d";
	var cy = toCy(0);
	ctx.beginPath();
	ctx.moveTo(0,cy);
	ctx.lineTo(canvas.width,cy);
	ctx.stroke();
	var cx = toCx(0);
	ctx.beginPath();
	ctx.moveTo(cx,0);
	ctx.lineTo(cx,canvas.height);
	ctx.stroke();
};
var drawPoint = function(x,y){
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+1,y+1);
	ctx.stroke();
};
var drawF = function(){
	f.function = fInput.value;
	ctx.strokeStyle = "#000000";
	for (var cx=0;cx<canvas.width;cx++){
		var fx = toFx(cx);
		var x = fx;
		var fy = eval(f.function);
		var cy = toCy(fy);
		drawPoint(cx,cy);
	}
};
var redraw = function(){
	drawBackground();
	f.showGrid && drawGrid();
	f.showCoordinate && drawCoordinate();
	drawF();
};
var scrollFunc = function(e){
	mouse.x = e.offsetX || e.layerX - canvas.offsetLeft;
	mouse.y = e.offsetY || e.layerY - canvas.offsetTop;
	var dir = 0;
	if(e.wheelDelta){
		dir = e.wheelDelta;
	}else if(e.detail){//Firefox
		dir = -e.detail;
	}
	if (dir>0){
		f.ratio=f.ratio*f.ratioChange;
		f.x = f.x - (toFx(mouse.x)*f.ratioChange + f.x*f.ratioChange - (toFx(mouse.x) - toFx(canvas.width/2)));
		f.y = f.y - (toFy(mouse.y)*f.ratioChange + f.y*f.ratioChange - (toFy(mouse.y) - toFy(canvas.height/2)));
	}
	if (dir<0){
		f.ratio=f.ratio/f.ratioChange;
		f.x = f.x - (toFx(mouse.x)/f.ratioChange + f.x/f.ratioChange - (toFx(mouse.x) - toFx(canvas.width/2)));
		f.y = f.y - (toFy(mouse.y)/f.ratioChange + f.y/f.ratioChange - (toFy(mouse.y) - toFy(canvas.height/2)));
	}
	redraw();
};
var mouseMove = function(e){
	mouse.x = e.offsetX || e.layerX - canvas.offsetLeft;
	mouse.y = e.offsetY || e.layerY - canvas.offsetTop;
	f.x = f.startX+(mouse.x-mouse.startX)/f.ratio;
	f.y = f.startY-(mouse.y-mouse.startY)/f.ratio;
	redraw();
};
var defaultMouseMove = function(e){
	mouse.x = e.offsetX || e.layerX - canvas.offsetLeft;
	mouse.y = e.offsetY || e.layerY - canvas.offsetTop;
	fCoordinate.innerText = "("+toFx(mouse.x).toString().substring(0,5)+","+toFy(mouse.y).toString().substring(0,5)+")";
};

redraw();
fShowGrid.value = f.showGrid && "Grid" || "Grid";
fShowCoordinate.value = f.showCoordinate && "Axis" || "Axis";
fButon.onclick = function(){
	f.x = 0;
	f.y = 0;
	f.ratio = 100;
	redraw();
};
fShowGrid.onclick = function(){
	f.showGrid = 1-f.showGrid;
	document.cookie="showGrid="+f.showGrid+";expires="+exdate.toGMTString();
	fShowGrid.value = f.showGrid && "Grid" || "Grid";
	redraw();
};
fShowCoordinate.onclick = function(){
	f.showCoordinate = 1-f.showCoordinate;
	document.cookie="showCoordinate="+f.showCoordinate+";expires="+exdate.toGMTString();
	fShowCoordinate.value = f.showCoordinate && "Axis" || "Axis";
	redraw();
};
fRatioChange.onmouseup = function(){
	f.ratioChange = fRatioChange.value;
};
if(canvas.addEventListener){
	canvas.addEventListener("DOMMouseScroll",function(e){
		scrollFunc(e);
		return false;
    });//Firefox
}
canvas.onmousewheel = function(e){
	scrollFunc(e);
	return false;
};
canvas.onmousedown = function(e){
	canvas.style.cursor = "url('closedhand.cur'),auto";
	mouse.startX = e.offsetX || e.layerX - canvas.offsetLeft;
	mouse.startY = e.offsetY || e.layerY - canvas.offsetTop;
	f.startX = f.x;
	f.startY = f.y;
	canvas.onmousemove = function(e){
		mouseMove(e);
		return false;
	};
	canvas.onmouseup = function(e){
		canvas.style.cursor = "url('openhand.cur'),auto";
		canvas.onmousemove = function(e){defaultMouseMove(e);};
	};
};
canvas.onmousemove = function(e){defaultMouseMove(e);};
