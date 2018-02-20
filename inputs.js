// Direction
dir = null;

// Pad coordinates
px = py = 0;

// Mobile controls
controls.ontouchstart = controls.ontouchmove = e => {
  try{
    music.play();
  }
  catch(error){}
  
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  
  
  px2 = e.targetTouches[0].clientX;
  py2 = e.targetTouches[0].clientY;
  
  dx = px2 - px;
  dy = py2 - py;
  
  // Left
  if(dx < -30 && Math.abs(dx) > Math.abs(dy)) {
    dir = 0;
  }
  
  // Right
  else if(dx > 30 && Math.abs(dx) > Math.abs(dy)) {
    dir = 2;
  }
  
  // Left
  else if(dy < -30 && Math.abs(dy) > Math.abs(dx)) {
    dir = 1;
  }
  
  // Left
  else if(dy > 30 && Math.abs(dy) > Math.abs(dx)) {
    dir = 3;
  }
  
  else {
    dir = null;
  }
  try {
    mousemove(dir, 1);
  }
  catch(e){
    b.innerHTML = JSON.stringify(e);
  }
}

controls.ontouchend = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
  dir = null;
}

// Avoid all default event behaviors
onmousedown = onmousemove = onmouseup = zoncontextmenu = ontouchstart = ontouchmove = zontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

// Keyboard controls
k_left = k_right = k_up = k_down = 0;

onkeydown = e => {
  
  mousedown = 1;
  keydown = 1;
  
  if(e.keyCode == 37 || e.keyCode == 65 ||e.keyCode == 81){
    k_left = 1;
    dir = 0;
  }
  
  if(e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87){
    k_up = 1;
    dir = 1;
  }
  
  if(e.keyCode == 39 || e.keyCode == 68){
    k_right = 1;
    dir = 2;
  }
  
  if(e.keyCode == 40 || e.keyCode == 83){
    k_down = 1;
    dir = 3;
  }
  
  mousemove(dir);
}

onkeyup = e => {
  if(e.keyCode == 37 || e.keyCode == 65 ||e.keyCode == 81){
    k_left = 0;
    if(dir == 0){
      dir = null;
    }
  }
  
  if(e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87){
    k_up = 0;
    if(dir == 1){
      dir = null;
    }
  }
  
  if(e.keyCode == 39 || e.keyCode == 68){
    k_right = 0;
    if(dir == 2){
      dir = null;
    }
  }
  
  if(e.keyCode == 40 || e.keyCode == 83){
    k_down = 0;
    if(dir == 3){
      dir = null;
    }
  }

  if(dir === null){
      dir = k_left ? 0 : k_up ? 1 : k_right ? 2 : k_down ? 3 : null;
  }

  if(dir === null){
    mousedown = 0;
    keydown = 0;
  }
}

// Mobile controls (pad)
placecontrols = onresize = onorientationchange = function(e){
  if(innerWidth > innerHeight){
    px = innerWidth - 30 - 80;
    py = innerHeight / 2;
  }
  
  else {
    px = innerWidth - 30 - 80;
    py = innerHeight - 30 - 80;
  }
  controls.style.backgroundPosition = (px - 80) + "px " + (py - 80) + "px";
}

placecontrols();