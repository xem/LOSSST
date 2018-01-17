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
  ${i?'':'<div class="snakecontrol front">f</div>'}
  ${i?'':'<div class="snakecontrol back">b</div>'}
  ${i?'':'<div class="snakecontrol left">l</div>'}
  ${i?'':'<div class="snakecontrol right">r</div>'}
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
  mousemove(document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = e => {
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(document.elementFromPoint(e.clientX, e.clientY), 1);
}

scene.ontouchend = scene.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
}

mousemove = (cell) => {
  if(!lock){
    
    pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
    
    if(cell.classList.contains("right")){
      pos[0]++;
      angle = -90;
    }
    
    else if(cell.classList.contains("left")){
      pos[0]--;
      angle = 90;
    }
    
    else if(cell.classList.contains("front")){
      pos[1]--;
      angle = 180;
    }
    
    else if(cell.classList.contains("back")){
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
    with(new AudioContext)with(createOscillator())connect(destination),frequency.value=440*1.06**(13-(z>12?z--:z)),start(0),stop(.1);
    lock = 1;
    setTimeout("lock = 0", 100);
  }
}

movesnake = () => {
  var i, cell;
  
  // Check if cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(.5vmin)";
    window["snakecube" + i].style.transform = "rotateZ(" + (i ? 0 : snakeangles[0]) + "deg)";
  }
    
}

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

onload = e => {
  draw();
}