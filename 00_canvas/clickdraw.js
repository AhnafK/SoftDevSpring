var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var shape = document.getElementById("shape");
var clear = document.getElementById("clear");

//saves other text for shape
var tango;

//switches shape and button on button click
shape.addEventListener("click",
		       function(e){
			   tango = shape.innerHTML;
			   if(tango == "draw-a-rectangle"){
			       shape.innerHTML = "draw-a-dot";
			   }
			   else{
			       shape.innerHTML = "draw-a-rectangle"
			   }
		      }
		     );

//clears canvas
clear.addEventListener("click",
		       function(e){
			   ctx.clearRect(0, 0, c.width, c.height);
		       }
		      );

//draws shape on click on canvas
c.addEventListener("click",
		   function(e){
		       if(tango == "draw-a-rectangle"){
			   ctx.fillRect(e.offsetX,e.offsetY,30,30);
		       }
		       else if(tango == "draw-a-dot"){
			   ctx.beginPath();
			   ctx.ellipse(e.offsetX, e.offsetY, 10, 10, 0, 0, 2*Math.PI);
			   ctx.fill();
		       }
		   }
		  );
