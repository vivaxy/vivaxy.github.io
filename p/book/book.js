$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2'],
		anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
	});
	$("img").each(function(){
		if (this.height > window.innerHeight){
			this.height = window.innerHeight;
		}
		if (this.width > window.innerWidth){
			this.width = window.innerWidth;
		}
	})
});