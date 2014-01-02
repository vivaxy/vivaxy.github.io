var getCookie = function(c_name){
	if (document.cookie.length>0){
		var c_start = document.cookie.indexOf(c_name);
		if (c_start != -1){
			var c_end = document.cookie.indexOf(";",c_start);
			if (c_end == -1){
				c_end = document.cookie.length;
			}
			return document.cookie.substring(c_start+c_name.length+1,c_end);
		}
	}
};
var setCookie = function(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
};
var placeC = function(classN,x,y){
	var t = document.createElement("div");
	t.className = classN;
	t.style.opacity = 1;
	var chessPad = document.getElementById("chessPad");
	chessPad.appendChild(t);
	if (ifWin(classN.substring(1,2),x,y)){
			chessPad.style.backgroundColor = "rgba(255,255,255,0.8)";
			chessPad.style.zIndex = "2";
			chessPad.onclick = function(){
				restart();
				return 0;
			};
		};
	t.style.left = x*22+1;
	t.style.top = y*22+1;
	return 0;
};
var restart = function(){
	var b = "";
	for (var i=0;i<225;i++){
		b = b+"0";
	}
	setCookie("renju",b,365);
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("chessPad"));
	var t = document.createElement("div");
	t.id = "chessPad";
	document.getElementsByTagName("body")[0].appendChild(t);
	return 0;
};
var loadB = function(){
	var cBlack = 0;
	var cWhite = 0;
	var b = getCookie("renju");
	if (b == undefined || b.length != 225){
		restart();
	}
	for (var i in b){
		if (b[i] == 1){
			var cX = Math.floor(i/15);
			var cY = i - cX*15;
			placeC("c1",cX,cY);
			cBlack = cBlack + 1;
		}
		if (b[i] == 2){
			var cX = Math.floor(i/15);
			var cY = i - cX*15;
			placeC("c2",cX,cY);
			cWhite = cWhite + 1;
		}
	}
	if (cBlack != cWhite && cBlack != cWhite+1){
		restart();
	}
	return cBlack == cWhite && "c1" || "c2";
};
var ifWin = function(num,x,y){
	var b = getCookie("renju");
	var xF = x-4 > 0 && x-4 || 0;
	var xT = x+4 > 14 && 14 || x+4;
	var yF = y-4 > 0 && y-4 || 0;
	var yT = y+4 > 14 && 14 || y+4;
	// -
	var t = "";
	var iF = xF-x;
	var iT = xT-x;
	for (var i=iF;i<=iT;i++){
		t = t + b[(x+i)*15+y];
	}
	if (t.match(new RegExp(num+"{5}","g"))){
		return num+"win";
	}
	// \ 
	t = "";
	iF = xF-x;
	if (iF < yF-y){
		iF = yF-y;
	}
	iT = yT-y;
	if (iT > xT-x){
		iT = xT-x;
	}
	for (var i=iF;i<=iT;i++){
		t = t + b[(x+i)*15+(y+i)];
	}
	if (t.match(new RegExp(num+"{5}","g"))){
		return num+"win";
	}
	// |
	t = "";
	iF = yF-y;
	iT = yT-y;
	for (var i=iF;i<=iT;i++){
		t = t + b[x*15+(y+i)];
	}
	if (t.match(new RegExp(num+"{5}","g"))){
		return num+"win";
	}
	// /
	t = "";
	iF = xF-x;
	if (iF < y-yT){
		iF = y-yT;
	}
	iT = y-yF;
	if (iT > xT-x){
		iT = xT-x;
	}
	for (var i=iF;i<=iT;i++){
		t = t + b[(x+i)*15+(y-i)];
	}
	if (t.match(new RegExp(num+"{5}","g"))){
		return num+"win";
	}
	return false;
};
var mousePad = document.getElementById("mousePad");
var c = document.createElement("div");
c.className = loadB();
document.getElementsByTagName("body")[0].appendChild(c);
for (var i=0;i<14;i++){
	for (var j=0;j<14;j++){
		var t = document.createElement("div");
		t.className = "grid";
		document.getElementsByClassName("board")[0].appendChild(t);
	}
	var t = document.createElement("br");
	document.getElementsByClassName("board")[0].appendChild(t);
}
mousePad.onmousemove = function(e) {
	var mouseX = e.pageX-this.offsetLeft;
	var mouseY = e.pageY-this.offsetTop;
	c.style.left = Math.floor(mouseX/22)*22+10;
	c.style.top = Math.floor(mouseY/22)*22+10;
};
mousePad.onclick = function(e){
	var mouseX = e.pageX-this.offsetLeft;
	var mouseY = e.pageY-this.offsetTop;
	var cX = Math.floor(mouseX/22);
	var cY = Math.floor(mouseY/22);
	var p = cX*15+cY;
	var b = getCookie("renju");
	if (b.substring(p,p+1) == 0){
		b = b.substring(0,p) + c.className.substring(1,2) + b.substring(p+1,b.length);
		setCookie("renju",b,365);
		placeC(c.className,cX,cY);
		c.className = "c" + (3 - c.className.substring(1,2));
	}else{
		console.log("not blank");
	}
};