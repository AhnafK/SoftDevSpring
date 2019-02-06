//Redchewahwah
var anim = document.getElementById("circle");
var stopbut = document.getElementById("stop");
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var id;
var radius = 1;
var growing = true;
ctx.fillStyle = "ffff00";

var clear = function(e){
    ctx.clearRect(0, 0, c.width, c.height);
}

var stop = function(){
    window.cancelAnimationFrame(id);
}

var drawDot = function(){
    //credit to theodore's qaf post
    window.cancelAnimationFrame(id);

    //clears existing frame
    clear();

    //creates circle
    ctx.beginPath();
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    //if circle is canvas size, then it will not grow
    if(c.width/2 == radius || c.height/2 == radius){
	growing = false;
    }

    //if circle is tiny size, then it will not shring
    if(radius == 1){
	growing = true;
    }

    //If circle grows, then the radius does too
    if(growing){
	radius+=1;
    }
    //If circle shrinks, then radius does too
    else{
	radius+=-1;
    }

    //loop
    id = window.requestAnimationFrame(drawDot);
}

//Animate buttom listener
anim.addEventListener("click", drawDot);

//stop listener
stopbut.addEventListener("click", stop);
