var canvas = document.getElementById("canvas");
canvas.style.position = "relative";
canvas.style.display = "inline";
canvas.style.left = "50px";
var ctx = canvas.getContext("2d");
var body = { width : window.innerWidth - 40, height : window.innerHeight - 100,};
if (body.width > body.height) {
	canvas.width = canvas.height = body.height;
} else {
	canvas.width = canvas.height = body.width;
}
var key = {
		map : {
			37:"left",
			38:"up",
			39:"right",
			40:"down",
			65:"left",//a
			87:"up",//w
			68:"right",//d
			83:"down",//s
		},
		value : {
			left :{x:-1,y: 0,},
			up   :{x: 0,y:-1,},
			right:{x: 1,y: 0,},
			down :{x: 0,y: 1,},
		},
	};
var background = {
	size : canvas.width,
	color : "#ecf0f1",
};
background.paint = function(){
	ctx.fillStyle = background.color;
	ctx.fillRect(0,0,background.size,background.size);
}
var game = {
	level : 20,
	speed : 2,
};
game.size = background.size / game.level;
var snake = {
	dir:{x:0,y:0,},
	headColor:"#2980b9",
	bodyColor:"#3498db",
	borderColor:"#FFFFFF",
	list:[{x:Math.floor(game.level/2),y:Math.floor(game.level/2),}],
};
snake.eat = function(ate){
	snake.list.unshift({x : snake.list[0].x+snake.dir.x, y : snake.list[0].y+snake.dir.y,});
	for (var i=0;i<food.lengthCut;i++){
		snake.list.pop();
	}
	food.list.splice(ate,1);
	food.list.push(randomPoint());
};
snake.move = function(){
	snake.list.unshift({x : snake.list[0].x+snake.dir.x, y : snake.list[0].y+snake.dir.y,});
	snake.list.pop();
};
snake.paint = function(){
	draw(snake.list[0],snake.borderColor,snake.headColor);
	for (var i=1;i<snake.list.length;i++){
		draw(snake.list[i],snake.borderColor,snake.bodyColor);
	}
};
var food = {
	foodColor: "#e67e22",
	borderColor: "#FFFFFF",
	list: [],
	num: 1,
	speedDiff: 1,
	lengthCut: -1,
};
food.paint = function(){
	for (var i=0;i<food.list.length;i++){
		draw(food.list[i],food.borderColor,food.foodColor);
	}
};
var randomPoint = function(){
	var point = {};
	while (true) {
		var result = 0;
		point.x = Math.floor(Math.random()*game.level);
		point.y = Math.floor(Math.random()*game.level);
		for (var i=0;i<snake.list.length;i++){
			if (point.x == snake.list[i].x && point.y == snake.list[i].y){
				result = result + 1;
			}
		}
		for (var i=0;i<food.list.length;i++){
			if (point.x == food.list[i].x && point.y == food.list[i].y){
				result = result + 1;
			}
		}
		if (result == 0){
			break;
		}
	}
	return point;
};
game.over = function(text,color){
	clearTimeout(game.loopVar);
	ctx.fillStyle = color;
	ctx.font = "bold 1000px Microsoft YaHei";
	ctx.font = "bold " + 1000*background.size/ctx.measureText(text).width + "px Microsoft YaHei";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(text, background.size / 2, background.size / 2);
};
game.init = function(){
	clearTimeout(game.loopVar);
	game.size = background.size / game.level;
	snake.dir = {x:0,y:0,};
	snake.list = [{x:Math.floor(game.level/2),y:Math.floor(game.level/2),}];
	food.list = [];
	for (var i=0;i<food.num;i++){
		food.list.push(randomPoint());
	}
	snake.speed = game.speed;
};
game.loop = function(){
	document.getElementById("levelLabel").innerHTML = game.level;
	document.getElementById("foodNumLabel").innerHTML = food.num;
	document.getElementById("snakeLengthLabel").innerHTML = snake.list.length;
	document.getElementById("speedLabel").innerHTML = snake.speed;
  	document.getElementById("speedDiffLabel").innerHTML = food.speedDiff;
	var ate = -1;
	for (var i=0;i<food.list.length;i++){
		if (snake.list[0].x+snake.dir.x == food.list[i].x && snake.list[0].y+snake.dir.y == food.list[i].y ){
			ate = i;
			break;
		}
	}
	if (ate != -1){
		snake.eat(ate);
		snake.speed = Math.floor(snake.speed) + Math.floor(food.speedDiff);
	}else{
		snake.move();
	}
	if (snake.list[0].x < 0 || snake.list[0].y < 0 || snake.list[0].x > game.level-1 || snake.list[0].y > game.level-1){
		return game.over("游戏结束","#e74c3c");
	}
	for (var i=1;i<snake.list.length;i++){
		if (snake.list[0].x == snake.list[i].x && snake.list[0].y == snake.list[i].y){
			return game.over("游戏结束","#e74c3c");
		}
	}
	background.paint();
	food.paint();
	snake.paint();
	if (snake.list.length >= game.level*game.level-food.num){
		return game.over("你赢了","#e74c3c");
	}
	var timeout = 1000/snake.speed;
	game.loopVar = setTimeout(game.loop,timeout);
};
var draw = function (point,borderColor,fillColor){
	ctx.strokeStyle = borderColor;
	ctx.strokeRect(point.x * game.size, point.y * game.size, game.size, game.size);
	ctx.fillStyle = fillColor;
	ctx.fillRect(point.x * game.size, point.y * game.size, game.size, game.size);
};

window.addEventListener("keydown", function(e) {
	var keyCode = e.which;
	if (key.map[keyCode]){
		var dir = key.value[key.map[keyCode]];
		if ((dir.x + snake.dir.x != 0) || (dir.y + snake.dir.y != 0)) {
			snake.dir.x = dir.x;
			snake.dir.y = dir.y;
		}
	}
});
game.init();
game.loop();
