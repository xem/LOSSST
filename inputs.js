scene.ontouchstart = scene.ontouchmove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousedown = 1;
  mousemove(cell = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = e => {
  e.preventDefault();
  e.stopPropagation();
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmouseover = e => {
  e.preventDefault();
  e.stopPropagation();
  if(mousedown){
    scene.onmousemove(e);
  }
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  if(mousedown){
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
onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}

onkeydown = e => {
  
  mousedown = 1;
  
  if(e.keyCode == 37){
    cell = control_l;
  }
  
  if(e.keyCode == 38){
    cell = control_f;
  }
  
  if(e.keyCode == 39){
    cell = control_r;
  }
  
  if(e.keyCode == 40){
    cell = control_b;
  }
}

onkeyup = e => {
  mousedown = 0;
}