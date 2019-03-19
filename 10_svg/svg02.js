/*
  Ahnaf Kazi
  SoftDev pd7
  K #10: Ask Circles [Change || Die]
  2019-03-14
*/

var pic = document.getElementById("vimage");
var clear_but = document.getElementById('but_clear');

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
    start = false;
    c.addEventListener('click',);
}

pic.addEventListener('click', draw);
