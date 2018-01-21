//console.log(move_f);

mousemove = (el) => {
  
  if(!el) return;
  
  if(!lock){
    
    pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
    angle = snakeangles[0];
    
    // Turn right
    if(el.id == "control_r"){
      pos[0]++;
      
      // From top
      if(angle % 360 == 180 || angle % 360 == -180) angle += 90;
      // From bottom
      else if(angle % 360 == 0) angle -= 90;
      
      move_r = 1;
      move_b = move_f = move_l = 0;
    }
    
    // Turn left
    else if(el.id == "control_l"){
      pos[0]--;
      
      // From top
      if(angle % 360 == 180 || angle % 360 == -180) angle -= 90;
      // From bottom
      else if(angle % 360 == 0) angle += 90;

      move_l = 1;
      move_b = move_f = move_r = 0;
    }
    
    // Turn top
    else if(el.id == "control_f"){
      pos[1]--;
      
      // From left
      if(angle % 360 == 90 || angle % 360 == -270) angle += 90;
      // From right
      else if(angle % 360 == -90 || angle % 360 == 270) angle -= 90;
      
      move_f = 1;
      move_b = move_l = move_r = 0;
    }
    
    // Turn bottom
    else if(el.id == "control_b"){
      pos[1]++;
      
      // From right
      if(angle % 360 == -90 || angle % 360 == 270) angle += 90;
      // From left
      else if(angle % 360 == 90 || angle % 360 == -270) angle -= 90;
      
      move_b = 1;
      move_f = move_l = move_r = 0;
    }
    
    else {
      move_b = move_f = move_l = move_r = 0;
      return;
    }
    
    // Check collisions
    found = 0;
    for(i = 0; i < snakelength - 1; i++){
      if(snakepos[i][0] == pos[0] && snakepos[i][1] == pos[1] && snakepos[i][2] == pos[2]){
        found = i;
      }
    }
    if(!found){
      snakepos.unshift(pos);
      snakeangles.unshift(angle);
    }
    
    // Go back
    if(found == 1){
      snakepos.shift();
      snakeangles.shift();
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
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[i][2] * 10 + .5) + "vmin)";
    
    window["snakecube" + i].style.transform = "rotateZ(" + (snakeangles[i]) + "deg)";
    
    if(i == 0){
      scene.style.transform0rigin = (snakepos[i][0] * 10 + 1) + "vmin " + (snakepos[i][1] * 10 + 1) + "vmin";
      
      scene.style.transform = "rotateX(30deg) translateX(" + (-snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (-snakepos[i][1] * 10 + 1) + "vmin) translateZ(40vmin)";
    }
  }
}

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}