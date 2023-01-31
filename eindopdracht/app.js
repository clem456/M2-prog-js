class content
{
    constructor(){

    }
}

var canvas = document.getElementById("canvasId");
var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 1000);
ctx.lineTo(1000, 1000);
ctx.lineTo(1000, 0);
ctx.lineTo(0, 0);
ctx.fillStyle = "lightblue";
ctx.fill();