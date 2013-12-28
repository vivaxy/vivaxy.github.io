document.write("<div id=\"canvas\"></div>");
document.write("<div id=\"note\"></div>")
var canvas = document.getElementById("canvas");
var bg = {
		x : canvas.offsetLeft,
		y : canvas.offsetTop,
		width : window.innerWidth,
		height : window.innerHeight,
		color : "#9b59b6",
};
canvas.style.width = bg.width +"px";
canvas.style.height = bg.height +"px";
canvas.style.position = "absolute";
canvas.style.backgroundColor = bg.color;
var note = document.getElementById("note");
note.style.position = "absolute";
note.style.left = "50px";
note.style.top = "0px";
note.innerHTML = " 左键加球，右键减球";
var ballList = [];
var ball = function(id,pos,dir,speed,radius,color){
	this.id = id;
	this.pos = pos;
	this.dir = dir;
	this.speed = speed;
	this.radius = radius;
	this.color = color;
	this.move = function() {
		this.pos.x = this.pos.x + this.dir.x * this.speed;
		this.pos.y = this.pos.y + this.dir.y * this.speed;
		var ballDiv = document.getElementById(this.id);
		ballDiv.style.left = this.pos.x-this.radius+bg.x+"px";
		ballDiv.style.top = this.pos.y-this.radius+bg.y+"px";
	};
	this.init = function(){
		var ballDiv = document.createElement("div");
		ballDiv.id = this.id;
		ballDiv.style.borderRadius = "100%";
		ballDiv.style.backgroundColor = this.color;
		ballDiv.style.width = this.radius*2+"px";
		ballDiv.style.height = this.radius*2+"px";
		ballDiv.style.position = "absolute";
		ballDiv.style.left = this.pos.x-this.radius+bg.x+"px";
		ballDiv.style.top = this.pos.y-this.radius+bg.y+"px";
		canvas.appendChild(ballDiv);
		ballList.push(this);
	};
};
function loopFunc() {
	for (var e=0;e<ballList.length;e++){
		if (ballList[e].pos.x - ballList[e].radius < 0){
			ballList[e].dir.x = -ballList[e].dir.x;
			ballList[e].pos.x = ballList[e].radius;
		}
		if (ballList[e].pos.x + ballList[e].radius > bg.width){
			ballList[e].dir.x = -ballList[e].dir.x;
			ballList[e].pos.x = bg.width - ballList[e].radius;
		}
		if (ballList[e].pos.y - ballList[e].radius < 0){
			ballList[e].dir.y = -ballList[e].dir.y;
			ballList[e].pos.y = ballList[e].radius;
		}
		if (ballList[e].pos.y + ballList[e].radius > bg.height){
			ballList[e].dir.y = -ballList[e].dir.y;
			ballList[e].pos.y = bg.height - ballList[e].radius;
		}
		for (var f=e+1;f<ballList.length;f++){
			var distance = Math.sqrt((ballList[e].pos.x - ballList[f].pos.x) * (ballList[e].pos.x - ballList[f].pos.x) + (ballList[e].pos.y - ballList[f].pos.y) * (ballList[e].pos.y - ballList[f].pos.y));
			if (distance < ballList[e].radius + ballList[f].radius){
				
				var b1vxn = ballList[e].dir.x*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b1vyn = ballList[e].dir.y*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var v1 = b1vxn+b1vyn;
				
				var b2vxn = ballList[f].dir.x*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b2vyn = ballList[f].dir.y*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var v2 = b2vxn+b2vyn;
				
				var m1 = Math.pow(ballList[e].radius,3);
				var m2 = Math.pow(ballList[f].radius,3);
				
				var v1z = (v1*(m1-m2)+2*m2*v2)/(m1+m2);
				var v2z = (v2*(m2-m1)+2*m1*v1)/(m1+m2);
				
				var v1zx = v1z*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var v1zy = v1z*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var v2zx = v2z*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var v2zy = v2z*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				
				var b1vxt = ballList[e].dir.x*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b1vxtx = b1vxt*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b1vxty = -b1vxt*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b1vyt = ballList[e].dir.y*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b1vytx = -b1vyt*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b1vyty = b1vyt*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				
				var b2vxt = ballList[f].dir.x*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b2vxtx = b2vxt*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b2vxty = -b2vxt*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b2vyt = ballList[f].dir.y*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				var b2vytx = -b2vyt*(ballList[f].pos.y - ballList[e].pos.y)/distance;
				var b2vyty = b2vyt*(ballList[f].pos.x - ballList[e].pos.x)/distance;
				
				ballList[e].dir.x = b1vytx + b1vxtx + v1zx;
				ballList[e].dir.y = b1vyty + b1vxty + v1zy;
				ballList[f].dir.x = b2vytx + b2vxtx + v2zx;
				ballList[f].dir.y = b2vyty + b2vxty + v2zy;
				
				var xDiff = (ballList[e].radius+ballList[f].radius)*(ballList[f].pos.x-ballList[e].pos.x)/distance-(ballList[f].pos.x-ballList[e].pos.x);
				var yDiff = (ballList[e].radius+ballList[f].radius)*(ballList[f].pos.y-ballList[e].pos.y)/distance-(ballList[f].pos.y-ballList[e].pos.y);
				ballList[e].pos.x = ballList[e].pos.x-xDiff/2;
				ballList[e].pos.y = ballList[e].pos.y-xDiff/2;
				ballList[f].pos.x = ballList[f].pos.x+xDiff/2;
				ballList[f].pos.y = ballList[f].pos.y+xDiff/2;
				
			}
		}
		ballList[e].move();
	}
	setTimeout(loopFunc, 1);
};
function newBall(){
	eval("b"+ballList.length+" = new ball(\"b"+ballList.length+"\","+
			"{x:"+(Math.random()*bg.width-15)+",y:"+(Math.random()*bg.height-15)+",},"+
			"{x:"+Math.cos(Math.random()*2*Math.PI)+",y:"+Math.sin(Math.random()*2*Math.PI)+",},"+
			Math.random()+","+
			(Math.random()*10+5)+","+
			"\"rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")\");");
	eval("b"+ballList.length+".init();");
};

canvas.onclick = function(e) {
	newBall();
};
canvas.oncontextmenu = function(e) {
	var ball = ballList.pop();
	var ballDiv = document.getElementById(ball.id);
	canvas.removeChild(ballDiv);
	return false;
};
loopFunc();
