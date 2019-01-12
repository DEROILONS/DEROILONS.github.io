var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = "1300";
canvas.height = "600";

alert("Правила: Одно правило - не отпускай клавиши управления, а то будет бак и игра аллах-бабахнет. Играйте строго за компьютером. Управляйте стрелками клавиатуры!!!СТЕНЫ ПОД НАПРЯЖЕНИЕМ!!!")
alert("Бывает, что Ребус съедает учеников, но потом выплёвывает. (На самом деле это баг). Адам, сори.");
alert("Если вы слишком много еъедите, то ученик от вас может сбежать через сетку, которая под напряжением. Лол, да?");
alert("Удачи!");

var paddleX = 200;
var paddleY = 200;
var rightPressed = false;
var leftPressed = false;
var topPressed = false;
var bottomPressed = false;
var meteor = new Image();
var ball = new Image();

var lo;

ball.src = "img/dorp.png";

var one = 11;
var two = 11;
var red = 7;

var x = 0;
var y = canvas.height / 2;
var dx = 10;
var dy = 10;
var num = document.getElementById("num");

var bg = document.getElementById("myCanvas");

meteor.src = "img/meteor.png";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
     else if(e.keyCode == 38) {
        topPressed = true;
    }
     else if(e.keyCode == 40) {
        bottomPressed = true;
    }

}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
     else if(e.keyCode == 38) {
        topPressed = false;
    }
     else if(e.keyCode == 40) {
        bottomPressed = false;
    }
}

function drawPaddle() {
    ctx.drawImage(meteor, paddleX, paddleY, 70, 120);
}

function drawBall() {
	ctx.drawImage(ball, x, y, 80, 80);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    //ball and Canvas
    if (x > canvas.width - 60 || x < 0) {
    	dx = -dx;
    }
    else if (y > canvas.height - 60 || y < 0) {
    	dy = -dy;
    }
    //meteor
    if (paddleX > canvas.width - 60 || paddleX < 0) {
    	paddleX = -paddleX;
    }
    else if (paddleY > canvas.height - 60 || paddleY < 0) {
    	paddleY = -paddleY;
    }
    //logic
    else if (x > paddleX - one && y > paddleY - two && x < paddleX + 70 && y < paddleY + 70) {
    	dx = -dx;
    	dy = -dy;
    	++num.innerHTML;
    	if (num.innerHTML == 20) {
    		ball.src = "img/pasha.png";
    		bg.style.background = "url(img/1.png)";
    		alert("Уровень 2" +"Повышен радиус столкновения с 10 до 20");
  			one = 20;
  			two = 20;
  			paddleX = 10;
  			paddleY = 10;
    	}
    	else if (num.innerHTML == 40) {
    		ball.src = "img/eldar.png";
    		bg.style.background = "url(img/2.jpg)";
    		alert("Уровень 3" +"Повышен радиус столкновения с 20 до 50");
  			one = 50;
  			two = 50;
  			paddleX = 700;
  			paddleY = 400;
    	} 
    	else if (num.innerHTML == 100) {
    		ball.src = "img/grisha.png";
    		bg.style.background = "url(img/3.jpg)";
    		alert("Уровень 4" +"Повышен радиус столкновения с 50 до 100");
  			one = 100;
  			two = 100;
  			paddleX = 400;
    	} 
    	else if (num.innerHTML == 150) {
    		ball.src = "img/tolstysasha.png";
    		bg.style.background = "url(img/4.jpg)";
    		alert("Уровень 5" +"Повышен радиус столкновения с 100 до 150");
  			one = 150;
  			two = 150;
  			paddleX = 200;
    	} 
    	else if (num.innerHTML == 200) {
    		ball.src = "img/miska.png";
    		bg.style.background = "url(img/5.jpg)";
    		alert("Уровень 6" +"Повышена скорость передвижения с 5 до 8");
  			red = 5;
  			paddleY = 300;
    	} 
    	else if (num.innerHTML == 250) {
    		ball.src = "img/misha.png";
    		bg.style.background = "url(img/6.jpg)";
    		alert("Уровень 7" +"Повышена скорость передвижения с 8 до 10");
  			red = 8;
  			paddleY = 500;
    	} 
    	else if (num.innerHTML == 300) {
    		ball.src = "img/korol.png";
    		bg.style.background = "url(img/7.jpg)";
    		alert("Уровень 8" +"Понижена скорость передвижения противника с 10 до 6");
  			dx = 6;
  			dy = 6;
  			paddleY = 200;
    	} 
    	else if (num.innerHTML == 500) {
    		ball.src = "img/gera.png";
    		bg.style.background = "url(img/8.jpg)";
    		alert("Уровень 9" +"Повышена скорость передвижения с 10 до 13");
  			red = 13;
  			paddleY = 100;
    	}
    	else if (num.innerHTML == 700) {
    		ball.src = "img/synergy.png";
    		bg.style.background = "url(img/9.jpg)";
    		alert("Уровень 10" +"Повышена скорость передвижения с 13 до 15");
  			red = 15;
  			paddleX = 200;
    	} 
    	else if (num.innerHTML == 1000) {
    		ball.src = "img/sasha.png";
    		bg.style.background = "url(img/10.jpg)";
    		alert("Уровень 11" +"Ничего не повышено, зато ты почти прошел игру)");
    		paddleX = 1200;
    	} 
    	else if (num.innerHTML == 1500) {
    		ball.src = "img/erlan.png";
    		bg.style.background = "url(img/10.jpg)";
    		alert("Уровень 12" +"Мы так лючим нашу учительницу по РЭПу, поэтому она начала стрелять в нас из АК. Шутка, ха-ха. КАК всегда не смешно). Ты ничего не получаешь. ЛОХ!");
    		paddleX = 10;
    	}
    	else if (num.innerHTML == 2000) {
    		ball.src = "img/adam.png";
    		bg.style.background = "url(img/10.jpg)";
    		alert("Уровень 13" +"ЫЫЫ. Я опять хер чё тебе дам. Лузер");
    		paddleX = 300;
    		paddleY = 500;
    	}
    	else if (num.innerHTML == 3000) {
    		ball.src = "img/meteor.png";
    		bg.style.background = "url(img/10.jpg)";
    		alert("Уровень 14" +"Последний уровень. Я дам тебе безбожную скорость, но тебе придётся постараться не врезаться в стены");
    		red = 200;
    		paddleY = 10;
		}
		else if (num.innerHTML == 5000) {
    		ball.src = "img/meteor.png";
    		bg.style.background = "url(img/10.jpg)";
    		alert("Уровень 15" +"Победа, победа, вместо амлета.");
    		paddleX = 200;
    		paddleY = 500;
    	}

}
    //keyboard
    if(rightPressed) {
    	paddleX += red;
	}
	else if(leftPressed) {
    	paddleX -= red;
	}
	else if(topPressed) {
    	paddleY -= red;
	}
	else if(bottomPressed) {
    	paddleY += red;
	}
	//position ball
	x += dx;
	y += dy;
	requestAnimationFrame(draw);
}

draw();