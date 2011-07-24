
var canvasT = null; 
var canvasM = null;
var video = null;  
var ctx = null; 

function start() {
  drawMask();
  play(); 
  animate(); 
}

function animate() { 
 	var scale=.51;
	document.getElementById("reflectionmask").setAttribute("style","-moz-transition-property: -moz-transform; -moz-transform-origin: 0 0; -moz-transform:scale("+scale+"); -moz-transition-duration:3s;  -webkit-transition-property: -webkit-transform; -webkit-transform:scale("+scale+"); -webkit-transition-duration:3s;  -o-transition-property: -o-transform; -o-transform:scale("+scale+"); -o-transition-duration:3s;");

} 

function divein() { 

	var scale=44;
	document.getElementById("maskbound").setAttribute("style","-moz-transition-property: -moz-transform; -moz-transform-origin: 320 180; -moz-transform:scale("+scale+") rotate(180deg) translate(22px); -moz-transition-duration:3s;  -webkit-transition-property: -webkit-transform; -webkit-transform:scale("+scale+"); -webkit-transition-duration:3s;  -o-transition-property: -o-transform; -o-transform:scale("+scale+"); -o-transition-duration:3s;");
} 

function play() { 
//  drawFromVideo(); 
  setTimeout("play()",50); 
} 


function drawMask() { 
	var elm = 'Brazil';
	var canvas = document.getElementById("reflection");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgba(255, 255, 255, 1)";
	ctx.font = "320px Verdana"; 
	var ww = ctx.measureText(elm);
	ctx.fillText(elm, parseInt(1280/2)-parseInt(ww.width/2),420);
 	ctx.save();
	ctx.translate(0, 0);
	//ctx.fillText(elm,0,220);
	ctx.restore();


  var canvas2 = document.getElementById('reflectionmask')
  var ctx2 = canvas2.getContext('2d');

  blend(canvas, canvas2, 1280, 720);

}



