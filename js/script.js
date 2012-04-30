/* Author:

*/

$(document).ready(function(){
    //get the element to be curved
    var ele = document.getElementById('curve');
    //new canvas element
    var canvas = document.createElement('canvas');
    canvas.width=ele.offsetWidth;
    canvas.width='50';
    //add the canvas element
    insertAfter(ele, canvas);
    var ctx;
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        redraw();
    }
    $(window).resize(function(){
        if(ctx != undefined){
            //resize the canvas with the element width
            ctx.canvas.width = ele.offsetWidth;
            redraw();
        }
    }).resize();
    
    function redraw(){
        //don't need to double resize the canvas element
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

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



