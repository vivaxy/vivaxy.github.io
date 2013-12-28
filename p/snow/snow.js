$(document).ready(function(){
	var snow = function(){
		var b = $("<div></div>");
		b.css({
			borderRadius:"100%",
			padding:50,
			zIndex:9999,
			top:Math.random()*window.innerHeight,
			right:Math.random()*window.innerWidth,
			position:"fixed",
		});
		$("body").append(b);
		var s = $("<div></div>");
		b.append(s);
		var h = Math.random()*10+4;
		s.css({
			borderRadius:"100%",
			backgroundColor:"#ffffff",
			opacity:0.5,
			width:3,
			height:h,
		});
		b.fadeOut(h*10000);
		b.hover(function(){
			b.dequeue().fadeOut(200);
		});
		setTimeout(snow,Math.random()*200+400);
	};
	setTimeout(snow,1);
});
