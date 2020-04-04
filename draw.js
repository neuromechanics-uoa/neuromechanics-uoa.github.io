var i = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 40) {
    	downPressed = true;
    }
    else if(event.keyCode == 38) {
    	upPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
    }
    if(event.keyCode == 40) {
    	downPressed = false;
    }
    else if(event.keyCode == 38) {
    	upPressed = false;
    }
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.strokeRect(10, 10, 100, 480);
    ctx.strokeRect(130, 10, 100, 480);
    
    ctx.beginPath();
    ctx.moveTo(5, 75);
    ctx.lineTo(115, 75);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(125, 75);
    ctx.lineTo(235, 75);
    ctx.closePath();
    ctx.stroke();
    
    ctx.fillRect(10, 490 - i, 100, i);
    ctx.fillRect(130, 490 - i, 100, i);
    
    if (!rightPressed) {
        i = i + 2;
    }
    if (i > 480) {
        i = 0;
        ctx.clearRect(0,0,480, 480);
    }
    
    setTimeout(draw, 1);
  }
}