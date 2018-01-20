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
cell = null;


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
  
  
}

// Pointer events
scene.ontouchstart = scene.ontouchmove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousedown = 1;
  mousemove(cell = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = scene.onmouseover = e => {
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(cell = document.elementFromPoint(e.clientX, e.clientY), 1);
}

scene.ontouchend = scene.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
}


mousemove = (el) => {
  //console.log(move_f);
  
  if(!el) return;
  
  if(!lock){
    
    pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
    
    if(el.id == "control_r"){
      pos[0]++;
      angle = -90;
      move_r = 1;
      move_b = move_f = move_l = 0;
    }
    
    else if(el.id == "control_l"){
      pos[0]--;
      angle = 90;
      move_l = 1;
      move_b = move_f = move_r = 0;
    }
    
    else if(el.id == "control_f"){
      pos[1]--;
      angle = 180;
      move_f = 1;
      move_b = move_l = move_r = 0;
    }
    
    else if(el.id == "control_b"){
      pos[1]++;
      angle = 0;
      move_b = 1;
      move_f = move_l = move_r = 0;
    }
    
    else {
      move_b = move_f = move_l = move_r = 0;
      return;
    }
    
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

setInterval('mousemove(cell)', 100);

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

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

onload = e => {
  draw();
}