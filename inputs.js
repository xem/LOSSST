// Direction
dir = null;

// Pad coordinates
px = py = 0;

// Mobile controls
scene.ontouchstart = scene.ontouchmove = e => {
  if(lock || animation) return;
  
  mousedown = 1;
  
  var cell = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  
  if(cell && cell.dataset && cell.dataset.x){
    var x = cell.dataset.x;
    var y = cell.dataset.y || null;
    var z = cell.dataset.z || null;
      
    if(z === null){
      
      if(x - snakepos[0][0] < 0 && y - snakepos[0][1] == 0){
        mousemove(0);
      }
      if(x - snakepos[0][0] == 0 && y - snakepos[0][1] < 0){
        mousemove(1);
      }
      if(x - snakepos[0][0] > 0 && y - snakepos[0][1] == 0){
        mousemove(2);
      }
      if(x - snakepos[0][0] == 0 && y - snakepos[0][1] > 0){
        mousemove(3);
      }
    }
    
    if(y === null){
      
      if(x - snakepos[0][0] < 0 && z - snakepos[0][2] == 0){
        mousemove(0);
      }
      if(x - snakepos[0][0] == 0 && z - snakepos[0][2] < 0){
        mousemove(3);
      }
      if(x - snakepos[0][0] > 0 && z - snakepos[0][2] == 0){
        mousemove(2);
      }
      if(x - snakepos[0][0] == 0 && z - snakepos[0][2] > 0){
        mousemove(1);
      }
    }
  }
  
  if(cell && cell.dataset && cell.dataset.dir){
    dir = cell.dataset.dir;
    mousemove(dir);
  }
  
  e.preventDefault();
}

scene.ontouchend = e => {
  grabbed = 0;
  mousedown = 0;
  cell = null;
  move_b = move_f = move_l = move_r = 0;
  dir = null;
}

// Keyboard controls
k_left = k_right = k_up = k_down = 0;
animation = 0;

onkeydown = e => {

  if(animation) return;
  
  if(e.keyCode != 123 && e.keyCode != 116 && e.keyCode != 82) e.preventDefault();
  
  // Reset = R
  if(e.keyCode == 82){
    reset_puzzle();
  }
  
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

reset_puzzle = e => {
  if(inbounds[0]){
    for(var i = 0; i < movessincelatestpuzzle; i++){
      snakepos.shift();
      snakeangles.shift();
      inbounds.shift();
    }
    movesnake();
    movessincelatestpuzzle = 0;
    latestpuzzle = null;
    
    for(var i = 0; i < levels[currentroom].puzzles.length; i++){
      window["puzzlereset" + currentroom + "-" + i].style.opacity = 0;
    }
  
    return;
  }
}

onkeyup = e => {
  
  if(e.keyCode != 123 && e.keyCode != 116 && e.keyCode != 82) e.preventDefault();
  
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

// Avoid all default event behaviors
onmousedown = onmousemove = onmouseup = ontouchmove = ondblclick = onscroll = onkeypress = function(e){
  e.preventDefault();
}