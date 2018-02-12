scene.ontouchstart = scene.ontouchmove = e => {
  music.play();
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  mousemove(cell = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = e => {
  music.play();
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmouseover = e => {
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  if(mousedown){
    scene.onmousemove(e);
  }
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  if(lock) return;
  if(mousedown && !keydown){
    mousemove(cell = document.elementFromPoint(e.clientX, e.clientY), 1);
  }
}

b.onmouseover = b.ontouchstart = scene.ontouchend = scene.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
}

// Avoid all default event behaviors
/*
onmousedown = onmousemove = onmouseup = oncontextmenu = ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  music.play();
  e.preventDefault();
}
*/

k_left = k_right = k_up = k_down = 0;

onkeydown = e => {
  
  mousedown = 1;
  keydown = 1;
  
  if(e.keyCode == 37 || e.keyCode == 65 ||e.keyCode == 81){
    k_left = 1;
    cell = control_l;
  }
  
  if(e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87){
    k_up = 1;
    cell = control_f;
  }
  
  if(e.keyCode == 39 || e.keyCode == 68){
    k_right = 1;
    cell = control_r;
  }
  
  if(e.keyCode == 40 || e.keyCode == 83){
    k_down = 1;
    cell = control_b;
  }
  
  mousemove(cell);
}

onkeyup = e => {
  if(e.keyCode == 37 || e.keyCode == 65 ||e.keyCode == 81){
    k_left = 0;
    if(cell == control_l){
      cell = null;
    }
  }
  
  if(e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87){
    k_up = 0;
    if(cell == control_f){
      cell = null;
    }
  }
  
  if(e.keyCode == 39 || e.keyCode == 68){
    k_right = 0;
    if(cell == control_r){
      cell = null;
    }
  }
  
  if(e.keyCode == 40 || e.keyCode == 83){
    k_down = 0;
    if(cell == control_b){
      cell = null;
    }
  }

  if(cell === null){
      cell = k_left ? control_l : k_up ? control_f : k_right ? control_r : k_down ? control_b : null;
  }

  if(cell === null){
    mousedown = 0;
    keydown = 0;
  }
}