dir = null;

ox = oy = 0;
px = py = 0;
dx = dy = 0;


controls.ontouchstart = e => {
  music.play();
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  px = e.targetTouches[0].clientX;
  py = e.targetTouches[0].clientY;
  
  /*
  if(px < innerWidth * 1/3){
    dir = 0;
  }
  
  else if(px > innerWidth * 2/3){
    dir = 2;
  }
  
  else if(py < innerHeight * 1/2){
    dir = 1;
  }
  
  else if(py > innerHeight * 1/2){
    dir = 3;
  }
  
  else {
    dir = null;
  }*/
  
  controls.style.backgroundPosition = (px - 128) + "px " + (py - 128) + "px";
  controls.style.opacity = 1;
  
  //mousemove(dir, 1);
}

controls.ontouchmove = e => {
  music.play();
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  px2 = e.targetTouches[0].clientX;
  py2 = e.targetTouches[0].clientY;
  
  dx = px2 - px;
  dy = py2 - py;
  
  // Left
  if(dx < -40 && Math.abs(dx) > Math.abs(dy)) {
    dir = 0;
  }
  
  // Right
  else if(dx > 40 && Math.abs(dx) > Math.abs(dy)) {
    dir = 2;
  }
  
  // Left
  else if(dy < -40 && Math.abs(dy) > Math.abs(dx)) {
    dir = 1;
  }
  
  // Left
  else if(dy > 40 && Math.abs(dy) > Math.abs(dx)) {
    dir = 3;
  }
  
  else {
    dir = null;
  }
  
  /*if(dir !== null){
    px = px2;
    py = py2;
  }*/
  
  console.log(dx, dy);
  mousemove(dir, 1);
}

controls.onmousedown = e => {
  music.play();
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  controls.onmousemove(e);
}

controls.onmouseover = e => {
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  if(mousedown){
    controls.onmousemove(e);
  }
}

controls.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  if(mousedown && !keydown){
    mousemove(cell = document.elementFromPoint(e.clientX, e.clientY), 1);
  }
}

b.onmouseover = b.ontouchstart = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
  px = innerWidth / 2;
  py = innerHeight / 2;
  //controls.style.left = px  + "px";
  //controls.style.top = py + "px";;
}

controls.ontouchend = controls.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
  px = innerWidth / 2;
  py = innerHeight / 2;
  dir = null;
  //controls.style.left = px  + "px";
  //controls.style.top = py + "px";
  
  controls.style.backgroundPosition = "-500px -500px";
  controls.style.opacity = 0.01;
}

// Avoid all default event behaviors
onmousedown = onmousemove = onmouseup = zoncontextmenu = ontouchstart = ontouchmove = zontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

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
  
  mousemove(cell);
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