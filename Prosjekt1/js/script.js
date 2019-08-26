
// HTML Canvas 
// code bellow inspired by https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function draw() {
  var c = document.getElementById("myCanvas");
  
  if (c.getContext) {
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 150, 115, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = "gold";
    ctx.fill();
    ctx.moveTo(225, 150);
    ctx.arc(150, 150, 75, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(135, 125);
    ctx.arc(120, 125, 15, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(180, 125);
    ctx.arc(165, 125, 15, 0, Math.PI * 2, true);  // Right eye

    ctx.lineWidth = 2;
    
    ctx.stroke();
 
  }

}
