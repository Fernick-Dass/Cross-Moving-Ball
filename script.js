var ball = document.getElementById('ball');
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = true;

// YOUR CODE 
function moveBall() {
  let xmin =0;
  let ymin =0;
  let xmax =500;
  let ymax =500;
  if(reverse==true){
    positionX = positionX + velocity;
    ball.style.left = positionX+"px";
    ball.style.top = positionX+"px"
    if(positionX>=xmax) {
      reverse = false;
    }  
  }else{
  positionX = positionX - velocity;
  ball.style.left = positionX+"px";
  ball.style.top = positionX+"px"
  if(positionX===xmin) {
    reverse = true
  }
}
}
setInterval(moveBall, 1000);
// ----------------