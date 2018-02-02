var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var shape = 1;
ctx.fillStyle = "lightsteelblue";

var clearCanvas = function(e){
    ctx.clearRect(0,0,500,500);
};

var draw = function(e){
    var x = e.clientX;
    var y = e.clientY;
    console.log(x);
    console.log(y);
    if (shape == 1){
	ctx.fillRect(x,y,20,20);
    };
    if (shape == 2){
	ctx.beginPath();
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fill();
    };
};

var changeShape = function(e){
    if (shape == 1){
	ctx.fillStyle = "goldenrod";
	shape = 2;
    }
    else {
	ctx.fillStyle = "lightsteelblue";
	shape = 1;
    }
    console.log(shape);
}

var print = function(e){
    console.log("clicked");
};

clear.addEventListener("click", clearCanvas);
canvas.addEventListener("click", draw);
toggle.addEventListener("click", changeShape);
