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
    
    collision = 0;
    
    // Check collisions with itself
    for(i = 0; i < snakelength - 1; i++){
      if(snakepos[i][0] == pos[0] && snakepos[i][1] == pos[1] && snakepos[i][2] == pos[2]){
        collision = i;
      }
    }
    
    // Collisions with trees 
    for(i in levels[currentroom].trees){
      tree = levels[currentroom].trees[i];
      if(pos[0] == tree[0] && pos[1] == tree[1]){
          collision = "tree";
      };
    }
    
    // Collisions with bounds
    if(
         pos[0] < 0
      || pos[0] >= levels[currentroom].width
      || pos[1] < 0
      || pos[1] >= levels[currentroom].height
    ){
      collision = "bounds";
    }
    
    if(goingback > 0){
      goingback--;
    }
    
    // Go back
    if(collision == 1){
      snakepos.shift();
      snakeangles.shift();
      goingback++;
      goingback++;
    }
    
    else if(!collision){
      snakepos.unshift(pos);
      snakeangles.unshift(angle);
    }
    
    movesnake();
    lock = 1;
    setTimeout(()=> {
      lock = 0
    }, inbounds[0] ? 300 : 150);
  }
}

setInterval(() => {
  mousemove(cell);
}, 50);

movesnake = () => {
  
  var i, cell;
  
  clearpuzzle();
  
  inbounds = [];
  currentpuzzle = null;
    
  // Update inbounds status for each cube, and currentpuzzle
  for(j in snakepos){
    inbounds[j] = 0;
    for(i in levels[currentroom].puzzles){
      puzzle = levels[currentroom].puzzles[i];
      if(snakepos[j][0] >= puzzle.x - 1 && snakepos[j][0] < puzzle.x + puzzle.size + 1
      && snakepos[j][1] >= puzzle.y - 1 && snakepos[j][1] < puzzle.y + puzzle.size + 1){
        inbounds[j] = 1;
        if(j == 0){
          currentpuzzle = puzzle;
        }
      }
    }
  }
  
  if(!currentpuzzle || currentpuzzle.solved || !inbounds.slice(1).includes(1)){
    inbounds[0] = 0;
  }
  
  // Check if cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[i][2] * 10 + .5) + "vmin)";
    
    window["snakecube" + i].style.transform = "rotateZ(" + (snakeangles[i]) + "deg)";
    
    if(snakepos[i][2] == 0){
      window["snakegrass" + i].style.backgroundPosition = -(snakepos[i][0] * 10 + (snakepos[i][1] * 100)) + "vmin bottom";
      if(inbounds[i]){
        window["snakegrass" + i].style.opacity = 0;
      }
      else {
        window["snakegrass" + i].style.opacity = 1;
      }
    }
  }
  
  if(!goingback){
    for(i = 0; i < 3; i++){
      if(snakepos[snakelength + i] && snakepos[snakelength + i][2] == 0){
        window["snaketrail" + i].style.transform = "translateX(" + (snakepos[snakelength + i][0] * 10) + "vmin) translateY(" + (snakepos[snakelength + i][1] * 10) + "vmin)";
      }
      else {
        window["snaketrail" + i].style.transform = "scale(.01)";
      }
    }
  }
  
  for(i in levels[currentroom].trees){
    if(!inbounds[0]){
      window["treecontent" + i].style.transform = `rotateY(${Math.sin(snakepos[i][0] / 30)}rad)`;
    }
  }
  
  if(inbounds[0] && !currentpuzzle.solved) {
    scene.classList.add("inbounds");
    scene.style.transition = ".75s";
    scene.style.transform = "rotateX(10deg) translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateZ(" + ((currentpuzzle.size * .8) * 10) + "vmin)";
    checkpuzzle();
  }
  
  else if(!inbounds[0] || currentpuzzle.solved){
    scene.classList.remove("inbounds");
    setTimeout('scene.style.transition = ""', 750);
    scene.style.transform = "rotateX(30deg) translateX(" + (-snakepos[0][0] * 10 + 1) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1) + "vmin) translateZ(40vmin)";
  }
}

clearpuzzle = () => {
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      window[`cell${currentroom}-${currentpuzzle.index}-${j}`].classList.remove("red","blue");
    }
  }
}

checkpuzzle = () => {

  if(!currentpuzzle.solved){
    for(i = 0; i < snakelength; i++){
      if(snakepos[i][0] >= currentpuzzle.x && snakepos[i][0] < currentpuzzle.x + currentpuzzle.size){
        
        cell = window[`cell${currentroom}-${currentpuzzle.index}-${(snakepos[i][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
        if(cell){
          if(cell.classList.contains("black")){
            cell.classList.add("blue");
          }
          else {
            cell.classList.add("red");
          }
        }
      }
    }
  }
  
  solved = 1;
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || (cell.classList.contains("black") && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
  }
  
  if(solved){
    currentpuzzle.solved = 1;
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell.classList.contains("black")){
        cell.classList.add("green");
      }
    }
  }
}

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}