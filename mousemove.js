mobile = 0;

if(
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
){
  mobile = 1;
}


// When the player tries to go in a direction (finger/keyboard)
mousemove = (dir) => {
  
  var i, j;
  
  // Nothing happens is the element doesn't exist or the controls are locked
  if(dir === null || lock) return;
    
  // Save current head position and angle
  pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
  angle = snakeangles[0];
  
  // Go to the right
  if(dir == 2){
    
    // Vertical puzzles bounds
    if(currentpuzzle && currentpuzzle.wall && pos[0] >= currentpuzzle.x + currentpuzzle.size - 1 && pos[1] == currentpuzzle.y && pos[2] > 0){
      return;
    }
    
    // Floor
    else {
      
      // Update head x
      pos[0]++;
      
      // Update angle
      
      // From top
      if(angle % 360 == 180 || angle % 360 == -180){
        angle += 90;
      }
      
      // From bottom
      else if(angle % 360 == 0){
        angle -= 90;
      }
      
      // From left
      if(angle % 360 == 90 || angle % 360 == -270){
        angle += 180;
      }
      
      // Save the current move
      move_r = 1;
      move_b = move_f = move_l = 0;
    }
  }
  
  // Go left
  else if(dir == 0){
    
    // Vertical puzzles bounds
    if(currentpuzzle && currentpuzzle.wall && pos[0] <= currentpuzzle.x && pos[1] == currentpuzzle.y && pos[2] > 0){
      return;
    }
    
    else {
      
      // Update head x
      pos[0]--;
      
      // Update angle
      
      // From top
      if(angle % 360 == 180 || angle % 360 == -180){
        angle -= 90;
      }
      
      // From bottom
      else if(angle % 360 == 0){
        angle += 90;
      }
      
      // From right
      else if(angle % 360 == -90 || angle % 360 == 270){
        angle -= 180;
      }
      
      // Save the current move
      move_l = 1;
      move_b = move_f = move_r = 0;
    }
  }
  
  // Go forward
  else if(dir == 1){
    
    
    // Vertical puzzle: go upward
    if(currentpuzzle && currentpuzzle.wall && pos[0] >= currentpuzzle.x && pos[0] <= currentpuzzle.x + currentpuzzle.size - 1 && pos[1] == currentpuzzle.y){
      
      if(pos[2] < currentpuzzle.size - 1){
        pos[2]++;
        
        // From left
        if(angle % 360 == 90 || angle % 360 == -270){
          angle += 90;
        }
        
        // From right
        else if(angle % 360 == -90 || angle % 360 == 270){
          angle -= 90;
        }
      
      }
      

      
      // Bounds
      else {
        return;
      }
    }

    // Go forward
    else {

      // Update head y
      pos[1]--;
      
      // Update angle
      
      // From left
      if(angle % 360 == 90 || angle % 360 == -270){
        angle += 90;
      }
      
      // From right
      else if(angle % 360 == -90 || angle % 360 == 270){
        angle -= 90;
      }
      
      // From bottom
      else if(angle % 360 == 0){
        angle = 180;
      }
      
      // Save the current move
      move_f = 1;
      move_b = move_l = move_r = 0;
    }
  }
  
  // Go backward
  else if(dir == 3){
    
    // Walk on a rock cube
    /*onacube = 0;
    for(i in levels[currentroom].cubes){
      var cube = levels[currentroom].cubes[i];
      if(snakepos[0][0] == cube[0] && snakepos[0][1] == cube[1] && snakepos[0][2] == 1){
        onacube = 1;
      }
    }*/
    
    // Vertical puzzle: go downward
    if(/*!onacube && */currentpuzzle && currentpuzzle.wall && pos[0] >= currentpuzzle.x && pos[0] <= currentpuzzle.x + currentpuzzle.size && pos[1] == currentpuzzle.y && pos[2] > 0){
      pos[2]--;
    }
    
    else{
      
      // Update head y
      pos[1]++;
    }
      
    // Update angle
    
    // From right
    if(angle % 360 == -90 || angle % 360 == 270){
      angle += 90;
    }
    
    // From left
    else if(angle % 360 == 90 || angle % 360 == -270){
      angle -= 90;
    }
    
    // From top
    else if(angle % 360 == 180 || angle % 360 == -180){
      angle += 180;
    }
    
    // Save the current move
    move_b = 1;
    move_f = move_l = move_r = 0;

  }
  
  // If no control is pressed, cancel all moves
  else {
    move_b = move_f = move_l = move_r = 0;
    return;
  }
  
  // Reset collision flag
  collision = 0;
  
  // Check collisions with the snake itself
  for(i = 0; i < snakelength - 1; i++){
    if(snakepos[i][0] == pos[0] && snakepos[i][1] == pos[1] && snakepos[i][2] == pos[2]){
      collision = i;
    }
  }
  
  // Check collisions with trees 
  for(i in levels[currentroom].trees){
    tree = levels[currentroom].trees[i];
    if(pos[0] == tree[0] && pos[1] == tree[1]){
        collision = "tree";
    };
  }
  
  // Check collisions with rock cubes 
  for(i in levels[currentroom].cubes){
    cube = levels[currentroom].cubes[i];
    if(pos[2] == 0 && pos[0] == cube[0] && pos[1] == cube[1]){
        collision = "cube";
    };
  }
  
  // Collisions with room bounds
  if(
       pos[0] < 0
    || pos[0] >= levels[currentroom].width
    || pos[1] < 0
    || pos[1] >= levels[currentroom].height
  ){
    collision = "bounds";
  }
  
  // Collision with back of vertical puzzle (from outside), if it has a wall
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    if(puzzle.wall && pos[0] >= puzzle.x && pos[0] < puzzle.x + puzzle.size && pos[1] == puzzle.y && snakepos[0][1] == puzzle.y - 1){
        collision = "puzzle";
    };
  }
  
  // Allow going on bridges
  for(i in levels[currentroom].bridges){
    bridge = levels[currentroom].bridges[i];
    if(bridge.open && bridge.angle == 0){
      if(pos[0] >= bridge.x + 1 && pos[1] >= bridge.y - 1 && pos[1] <= bridge.y + 1){
        offset = bridge.y - pos[1];
        collision = 0;
        inbounds[0] = 1;
        lock = 1;
        scene.style.transformOrigin = `${bridge.x * 10}vmin ${bridge.y * 10}vmin`;
        scene.style.transform = `translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 10}vmin) translateZ(10vmin) rotateX(10deg)`;
        angle = snakeangles[0];
        if(angle % 360 == 180 || angle % 360 == -180){
          angle += 90;
        }
        
        else if(angle % 360 == 0){
          angle -= 90;
        }
        
        // Autopilot
        autopilot = (bounds = 1) => {
          snakeangles.unshift(angle);
          snakepos.unshift([snakepos[0][0] + 1, snakepos[0][1], snakepos[0][2]]);
          inbounds.unshift(bounds);
          movesnake(0);
          lock = 1;
          animation = 1;
        };
        
        autopilot();
        
        interval = setInterval(()=>{
          autopilot();
          if(music.volume > .15){
            music.volume = +music.volume - .15;
          }
          else {
            music.volume = 0;
          }
        }, 200);
        
        // Change room
        setTimeout(() => {
          puzzling = 1;
          scene.innerHTML = "";
          scene.style.transition = "0s";
          currentroom = bridge.to;
          localStorage.currentroom = currentroom;
          snakepos = [];
          snakeangle = [];
          inbounds = [];
          for(j = bridge.to_x - snakelength + 3; j < bridge.to_x + 3; j++){
            snakepos.unshift([j, bridge.to_y - offset, bridge.to_z]);
            snakeangle.unshift(90);
            inbounds.unshift(1);
          }
          scene.style.transformOrigin = `${(bridge.to_x + 4) * 10 + 1}vmin ${(bridge.to_y - offset) * 10 + 1}vmin`;
          console.log(scene.style.transform = `translateX(${-(bridge.to_x + 4) * 10 - 4}vmin) translateY(${-(bridge.to_y - offset) * 10 + 1}vmin) translateZ(10vmin) rotateX(30deg)`);

          inbounds[0] = 0;
          render();
          puzzling = 0;
          movesnake(0);
        }, snakelength * 200);
        
        // Stop autopilot in the next room
        setTimeout(() => {
          scene.style.transition = "";
          clearInterval(interval);
          music.volume = 1;
          lock = 0;
          animation = 0;
          puzzling = 0;
          
          inbounds = [];
          for(j = 0; j < snakelength; j++){
            inbounds.push(0);
          }
          
          movesnake(0);
        }, snakelength * 200 + 3 * 200);
        
        return;
      }
    }
  }
  
  
  // If collision with cube 1, go back
  goingback = 0;
  if(collision == 1){
    snakepos.shift();
    snakeangles.shift();
    inbounds.shift();
    goingback = 1;
  }
  
  // If no collision happens, move (add the new head position/angle at the beginning of snakepos/snakeangle)
  else if(!collision){
    snakepos.unshift(pos);
    snakeangles.unshift(angle);
  }
  
  else if(collision){
    return;
  }
  
  // Do all the move animations
  try{
    movesnake();
  }
  catch(e){
   console.log(e);
  }
  
  // Lock the controls for 200ms
  lock = 1;
  
  if(!animation){
    setTimeout(() => {
      lock = 0
    }, mobile ? 250 : 200);
  }
}

// If mouse is down, call mousemove every 55ms to continue current move if possible

setInterval(() => {
  if(mousedown && (!puzzling || !mobile)){
    try{
      mousemove(dir);
    }
    catch(e){
      console.log(e);
    }
  }
}, mobile ? 155 : 55);