/* Author:

*/

$(document).ready(function(){
	
	var canvas = document.getElementById('curve');  
	var ctx;
	if (canvas.getContext){
		ctx = canvas.getContext('2d');  
		redraw();
	}
	$(window).resize(function(){
		if(ctx != undefined){
			ctx.canvas.width  = window.innerWidth;
			redraw();
		}
	}).resize();
	function redraw(){
		ctx.canvas.width  = window.innerWidth;
		ctx.fillStyle = "#E40241";
		ctx.strokeStyle="#E40241";
		ctx.beginPath(); 
		ctx.moveTo(0,0);
		ctx.lineTo(0,50);
		ctx.bezierCurveTo(ctx.canvas.width/2,0,0,0,ctx.canvas.width*2,0);
		ctx.lineTo(0,0);
		ctx.stroke();
		ctx.fill();
	}
});




