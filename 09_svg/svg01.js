var pic = document.getElementById("vimage");
var clear_but = document.getElementById('but_clear');
var prev_x = -1;
var prev_y = -1;
var x = -1;
var y = -1;
var start = true
var clear = () => {
    pic.innerHTML='';
    start = true;
}

clear_but.addEventListener('click',clear);

var draw = (e) => {
    x = e.offsetX;
    y = e.offsetY;
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("cx",x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    if(!start){
	connect_dots(x,y);
    }
    prev_x = x;
    prev_y = y;
    start = false;
}

var connect_dots = (x,y) => {
    var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('x1', prev_x);
    l.setAttribute('y1', prev_y);
    l.setAttribute('x2', x);
    l.setAttribute('y2', y);
    l.setAttribute('stroke', 'black');
    pic.appendChild(l);
}

pic.addEventListener('click',draw)
