// Clear a puzzle (remove blue and red tiles)
clearpuzzle = () => {
  
  var j;
  
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      window[`cell${currentroom}-${currentpuzzle.index}-${j}`].classList.remove("red","blue");
    }
    for(j in currentpuzzle.wall){
      window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`].classList.remove("red","blue");
    }
  }
}

// Check if a puzzle is solved
// Also, teleport
checkpuzzle = () => {

  cell = null;
  
  var i, j;
  
  
  
  // TELEPORT 1
  if(currentpuzzle.teleporter.length == 2){
  
    // Check if head is on one of the teleporters and that the second cube isn't on the other one
    if(
    
      (
           snakepos[0][0] == currentpuzzle.x + currentpuzzle.teleporter[0][0]
        && snakepos[0][1] == currentpuzzle.y + currentpuzzle.teleporter[0][1]
        && snakepos[0][2] == currentpuzzle.teleporter[0][2]
        && !(
             snakepos[1][0] == currentpuzzle.x + currentpuzzle.teleporter[1][0]
          && snakepos[1][1] == currentpuzzle.y + currentpuzzle.teleporter[1][1]
          && snakepos[1][2] == currentpuzzle.teleporter[1][2]
        )
      )
      
    ){
      snakepos.unshift([currentpuzzle.x + currentpuzzle.teleporter[1][0], currentpuzzle.y + currentpuzzle.teleporter[1][1], currentpuzzle.teleporter[1][2]]);  
      snakeangles.unshift(snakeangles[0]);
      inbounds.unshift(inbounds[0]);
      movesnake();
    }
      
    else if(
      (
           snakepos[0][0] == currentpuzzle.x + currentpuzzle.teleporter[1][0]
        && snakepos[0][1] == currentpuzzle.y + currentpuzzle.teleporter[1][1]
        && snakepos[0][2] == currentpuzzle.teleporter[1][2]
        && !(
             snakepos[1][0] == currentpuzzle.x + currentpuzzle.teleporter[0][0]
          && snakepos[1][1] == currentpuzzle.y + currentpuzzle.teleporter[0][1]
          && snakepos[1][2] == currentpuzzle.teleporter[0][2]
        )
      )
    ){
      snakepos.unshift([currentpuzzle.x + currentpuzzle.teleporter[0][0], currentpuzzle.y + currentpuzzle.teleporter[0][1], currentpuzzle.teleporter[0][2]]);  
      snakeangles.unshift(snakeangles[0]);  
      inbounds.unshift(inbounds[0]);
      movesnake();
    }
    
  }
  
  
  
  // TELEPORT 2
  if(currentpuzzle.teleporter2.length == 2){
  
    // Check if head is on one of the teleporter2s and that the second cube isn't on the other one
    if(
    
      (
           snakepos[0][0] == currentpuzzle.x + currentpuzzle.teleporter2[0][0]
        && snakepos[0][1] == currentpuzzle.y + currentpuzzle.teleporter2[0][1]
        && snakepos[0][2] == currentpuzzle.teleporter2[0][2]
        && !(
             snakepos[1][0] == currentpuzzle.x + currentpuzzle.teleporter2[1][0]
          && snakepos[1][1] == currentpuzzle.y + currentpuzzle.teleporter2[1][1]
          && snakepos[1][2] == currentpuzzle.teleporter2[1][2]
        )
      )
      
    ){
      snakepos.unshift([currentpuzzle.x + currentpuzzle.teleporter2[1][0], currentpuzzle.y + currentpuzzle.teleporter2[1][1], currentpuzzle.teleporter2[1][2]]);  
      snakeangles.unshift(snakeangles[0]); 
      inbounds.unshift(inbounds[0]);
      movesnake();
    }
      
    else if(
      (
           snakepos[0][0] == currentpuzzle.x + currentpuzzle.teleporter2[1][0]
        && snakepos[0][1] == currentpuzzle.y + currentpuzzle.teleporter2[1][1]
        && snakepos[0][2] == currentpuzzle.teleporter2[1][2]
        && !(
             snakepos[1][0] == currentpuzzle.x + currentpuzzle.teleporter2[0][0]
          && snakepos[1][1] == currentpuzzle.y + currentpuzzle.teleporter2[0][1]
          && snakepos[1][2] == currentpuzzle.teleporter2[0][2]
        )
      )
    ){
      snakepos.unshift([currentpuzzle.x + currentpuzzle.teleporter2[0][0], currentpuzzle.y + currentpuzzle.teleporter2[0][1], currentpuzzle.teleporter2[0][2]]);  
      snakeangles.unshift(snakeangles[0]); 
      inbounds.unshift(inbounds[0]);
      movesnake();
    }
    
  }
        
        
  // CHECK PUZZLE (blue/red stuff)
  if(!currentpuzzle.solved){
    for(i = 0; i < snakelength; i++){
      
      if(
        (snakepos[i][0] >= currentpuzzle.x && snakepos[i][0] < currentpuzzle.x + currentpuzzle.size)
        &&
        (
          (currentpuzzle.depth == 1 && snakepos[i][1] >= currentpuzzle.y && snakepos[i][1] < currentpuzzle.y + 1)
          ||
          ((currentpuzzle.depth != 1 || currentpuzzle.ground) && snakepos[i][1] >= currentpuzzle.y && snakepos[i][1] < currentpuzzle.y + currentpuzzle.size)
        )
      ){
        
        // Ground
        if(currentpuzzle.ground){
          cell = window[`cell${currentroom}-${currentpuzzle.index}-${(snakepos[i][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
          if(cell){
            if(cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")){
              cell.classList.add("blue");
            }
            else if(cell.classList.contains("white")){
              cell.classList.add("red");
            }

            if((cell.classList.contains("purple") || cell.classList.contains("tan")) && i == 0) {
              cell.classList.add("blue");
            }
          }
        }
        
        // wall
        if(currentpuzzle.wall){
          cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${(currentpuzzle.size - snakepos[i][2] - 1) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
          if(cell){
            if(cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")){
              cell.classList.add("blue");
            }
            else if(cell.classList.contains("white")){
              cell.classList.add("red");
            }

            if((cell.classList.contains("purple") || cell.classList.contains("tan")) && i == 0) {
              cell.classList.add("blue");
            }
          }
        }
      }
    }
  }
  
  // CHECK
  
  // Check solution
  solved = 1;
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || ((cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")) && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
    
    for(j in currentpuzzle.wall){
      cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || ((cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")) && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
  
    // Color in green, save
    if(solved && !localStorage[currentroom + "-"+currentpuzzle.index]){
      
      currentpuzzle.solved = 1;
      for(j in currentpuzzle.ground){
        cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
        if(cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")){
          cell.classList.add("green");
        }
        else {
          cell.classList.add("yellow");
        }
      }
      
      for(j in currentpuzzle.wall){
        cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`];
        if(cell.classList.contains("black") || cell.classList.contains("purple") || cell.classList.contains("tan")){
          cell.classList.add("green");
        }
        else {
          cell.classList.add("yellow");
        }
      }
      
      localStorage[currentroom + "-" + currentpuzzle.index] = 1;
      localStorage["totalpuzzles"] = totalpuzzles = +localStorage["totalpuzzles"] + 1;
      
      // Bridge
      exitopen = 1;
      bridge = levels[currentroom].bridges[1];
      for(i in levels[currentroom].puzzles){
        puzzle = levels[currentroom].puzzles[i];
        if(!puzzle.solved){
          exitopen = 0;
        }
      }
      if(exitopen){
        lock = 1;
        animation = 1;
        bridge = levels[currentroom].bridges[1];
        scene.style.transform = `rotateX(30deg) translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin)`;
        window["bridge" + 1].classList.add("open");
        bridge.open = 1;
        localStorage["bridge" + currentroom + "-" + 1] = 1;
        setTimeout(() => {
          lock = 0;
          animation = 0;
          movesnake(1,0);
        }, 2000);
      }
    }
  }
}