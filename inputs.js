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