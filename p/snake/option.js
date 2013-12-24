var divStyle = document.getElementById("option").style;
divStyle.position = "fixed";
divStyle.top = "40px";
divStyle.left = canvas.width + 26 + "px";

var restartButton = document.getElementById("restartButton");
restartButton.addEventListener("mouseup", function(){
	game.init();
	game.loop();
});

var levelInput = document.getElementById("levelInput");
var levelButton = document.getElementById("levelButton");
var foodNumInput = document.getElementById("foodNumInput");
var foodNumButton = document.getElementById("foodNumButton");
var speedInput = document.getElementById("speedInput");
var speedButton = document.getElementById("speedButton");
var speedDiffInput = document.getElementById("speedDiffInput");
var speedDiffButton = document.getElementById("speedDiffButton");

levelButton.onclick = function(){
	var v = levelInput.value;
	if (v*v <= food.num){
		v = Math.ceil(Math.sqrt(food.num));
	}
	if (parseInt(v) != v){
		v = Math.ceil(v);
	}
  	if (v < 2){
		v = 2;
    }
  	if (v > 999){
		v = 999;
    }
	levelInput.value = v;
	game.level = v;
	game.init();
	game.loop();
};
foodNumButton.onclick = function(){
	var v = foodNumInput.value;
	if (v >= game.level*game.level){
		v = game.level*game.level-1;
	}
	if (parseInt(v) != v){
		v = Math.floor(v);
	}
  	if (v < 0){
		v = 0;
    }
  	if (v > 999999){
		v = 999999;
    }
	foodNumInput.value = v;
	food.num = v;
	game.init();
	game.loop();
};
speedButton.onclick = function(){
	var v = speedInput.value;
	if (parseInt(v) != v){
		v = Math.floor(v);
	}
	if (v < 1){
		v = 1;
	}
  	if (v > 999999){
		v = 999999;
    }
	speedInput.value = v;
	game.speed = v;
	game.init();
	game.loop();
};
speedDiffButton.onclick = function(){
	var v = speedDiffInput.value;
	if (parseInt(v) != v){
		v = Math.floor(v);
	}
  	if (v > 999999){
		v = 999999;
    }
  	if (v < -99999){
		v = -99999;
    }
	speedDiffInput.value = v;
	food.speedDiff = v;
	game.loop();
};