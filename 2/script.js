// Globals
snakelength = 7;
snakepos = [];
snakeangles = [];
wrap = [];
headangle = 0;
lastcell = null;
inbounds = [];
mousedown = 0;
grabbed = 0;
nextlevelwait = 0;
won = 0;
goingback = 0;
currentpuzzle = 0;
lock = 0;
z = 24;
move_b = 
move_f = 
move_l = 
move_r = 0;


// Draw scene
draw = e => {
  // snake
  snakepos = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
  inbounds = 0;
  snakeangles = [-90];
  headangle = -90;
  if(snake.innerHTML == ""){
    for(i = 0; i < snakelength; i++){
      snake.innerHTML +=
`<div id="snakecubemove${i}" class="snakecubemove">
  <div class="snakeshadow"></div>
  ${i?'':'<div id="control_f" class="snakecontrol front"></div>'}
  ${i?'':'<div id="control_b" class="snakecontrol back"></div>'}
  ${i?'':'<div id="control_l" class="snakecontrol left"></div>'}
  ${i?'':'<div id="control_r" class="snakecontrol right"></div>'}
  <div id="snakecube${i}" class="cube snakecube">
    ${i?'':'<div class="tongue">Y</div>'}
    ${i?'<div class="u"></div>':'<div class="u eyes">👀</div>'}
    ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
    <div class="r"></div>
    <div class="l"></div>
    <div class="b"></div>
  </div>
</div>`;
    }
  }
  
  
  movesnake();
  
  control_f.ontouchstart = control_f.ontouchmove = control_f.onmouseover = control_f.onmousedown = control_f.onmousemove = e => {
    move_f = 1;
    mousemove();
  }

  control_f.ontouchend = control_f.onmouseout = e => {
    move_f = 0;
  }
  
  
  control_b.ontouchstart = control_b.ontouchmove = control_b.onmouseover = control_b.onmousedown = control_b.onmousemove = e => {
    move_b = 1;
    mousemove();
  }

  control_b.ontouchend = control_b.onmouseout = e => {
    move_b = 0;
  }
  
  
  control_l.ontouchstart = control_l.ontouchmove = control_l.onmouseover = control_l.onmousedown = control_l.onmousemove = e => {
    move_l = 1;
    mousemove();
  }

  control_l.ontouchend = control_l.onmouseout = e => {
    move_l = 0;
  }
  
  
  control_r.ontouchstart = control_r.ontouchmove = control_r.onmouseover = control_r.onmousedown = control_r.onmousemove = e => {
    move_r = 1;
    mousemove();
  }

  control_r.ontouchend = control_r.onmouseout = e => {
    move_r = 0;
  }
}

mousemove = (cell) => {
  //console.log(move_f);
  
  if(!lock){
    
    pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
    
    if(move_r){
      pos[0]++;
      angle = -90;
    }
    
    else if(move_l){
      pos[0]--;
      angle = 90;
    }
    
    else if(move_f){
      pos[1]--;
      angle = 180;
    }
    
    else if(move_b){
      pos[1]++;
      angle = 0;
    }
    
    else return;
    
    found = 0;
    for(i=0; i<snakelength - 1; i++){
      if(snakepos[i][0] == pos[0] && snakepos[i][1] == pos[1] && snakepos[i][2] == pos[2]){
        found = 1;
      }
    }
    if(!found){
      snakepos.unshift(pos);
      snakeangles.unshift(angle);
    }
    movesnake();
    lock = 1;
    setTimeout("lock = 0", 100);
  }
}

setInterval(mousemove, 100);

movesnake = () => {
  var i, cell;
  
  // Check if cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(.5vmin)";
    
    window["snakecube" + i].style.transform = "rotateZ(" + (i ? 0 : snakeangles[0]) + "deg)";
    
    if(i == 0){
      scene.style.transform0rigin = (snakepos[i][0] * 10 + 1) + "vmin " + (snakepos[i][1] * 10 + 1) + "vmin";
      
      scene.style.transform = "rotateX(30deg) translateX(" + (-snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (-snakepos[i][1] * 10 + 1) + "vmin)";
    }
  }
}

onmousedown = onmousemove = onmouseup = ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

onload = e => {
  draw();
}