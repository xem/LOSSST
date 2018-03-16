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
checkpuzzle = () => {

  cell = null;
  
  var i, j;
  
  // Color cells in red/blue/none
  if(!currentpuzzle.solved){
    for(i = 0; i < snakelength; i++){
      if(snakepos[i][0] >= currentpuzzle.x && snakepos[i][0] < currentpuzzle.x + currentpuzzle.size){
        
        if(currentpuzzle.ground){
          cell = window[`cell${currentroom}-${currentpuzzle.index}-${(snakepos[i][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
          if(cell){
            if(cell.classList.contains("black") || cell.classList.contains("purple")){
              cell.classList.add("blue");
            }
            else if(cell.classList.contains("white")){
              cell.classList.add("red");
            }

            // Teleport from ground to wall
            if(cell.classList.contains("purple") && i == 0) {
              cell.classList.add("blue");
              if(currentpuzzle.wall){
                
                targetx = targetz = 0;
                for(j = 0; j < currentpuzzle.size; j++){
                  for(k = 0; k < currentpuzzle.size; k++){
                    if(currentpuzzle.wall[j * currentpuzzle.size + k] == 2){
                      targetx = currentpuzzle.x + k;
                      targetz = currentpuzzle.size - j - 1;
                    }
                  }
                }
                
                snakepos.unshift([targetx, currentpuzzle.y, targetz]);  
                snakeangles.unshift(snakeangles[0]);  
                inbounds.unshift(inbounds[0]);
                console.log(snakepos[0]);
                movesnake();
              }
              
              // Teleport from ground to ground
              else {
                cell.classList.add("blue");
                targetx = targety = 0;
                console.log(currentpuzzle.ground[(snakepos[1][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[1][0] - currentpuzzle.x)]);
                if(currentpuzzle.ground[(snakepos[1][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[1][0] - currentpuzzle.x)] != 2){
                  
                  for(j = 0; j < currentpuzzle.size; j++){
                    for(k = 0; k < currentpuzzle.size; k++){
                      
                      
                      
                      if(
                        (currentpuzzle.x + k != snakepos[0][0] || currentpuzzle.y + j != snakepos[0][1])
                        && currentpuzzle.ground[j * currentpuzzle.size + k] == 2
                      ){
                        console.log(snakepos[0], j, k, currentpuzzle.ground[j * currentpuzzle.size + k]);
                        targetx = currentpuzzle.x + k;
                        targety = currentpuzzle.y + j;
                        console.log(targetx, targety);
                      }
                    }
                  }
                  
                  if(targetx || targety){
                  
                    snakepos.unshift([targetx, targety, 0]);  
                    snakeangles.unshift(0);  
                    inbounds.unshift(inbounds[0]);
                  }
                  
                  movesnake();
                }
              }
            }
          }
        }
        
        if(currentpuzzle.wall && snakepos[i][1] >= currentpuzzle.y - 1 && snakepos[i][1] < currentpuzzle.y + currentpuzzle.size && (!currentpuzzle.depth || (currentpuzzle.depth && (currentpuzzle.y == snakepos[i][1] || currentpuzzle.y - 1 == snakepos[i][1])))){
          cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${(currentpuzzle.size - snakepos[i][2] - 1) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
          if(cell){
            if(cell.classList.contains("black")){
              cell.classList.add("blue");
            }
            else if(cell.classList.contains("white")){
              cell.classList.add("red");
            }

            // Teleport from wall to ground
            else {
              /*snakepos.unshift([snakepos[0][0], snakepos[0][1] - 1, snakepos[0][2]]);  
              snakeangles.unshift(snakeangles[0]);  
              inbounds.unshift(inbounds[0]);
              movesnake();*/
            }
          }
        }
        
      }
    }
  }
  
  // Check solution
  solved = 1;
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || ((cell.classList.contains("black") || cell.classList.contains("purple")) && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
    
    for(j in currentpuzzle.wall){
      cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || ((cell.classList.contains("black") || cell.classList.contains("purple")) && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
  
    // Color in green, save
    if(solved && !localStorage[currentroom+"-"+currentpuzzle.index]){
      currentpuzzle.solved = 1;
      for(j in currentpuzzle.ground){
        cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
        if(cell.classList.contains("black")){
          cell.classList.add("green");
        }
        else {
          cell.classList.add("yellow");
        }
      }
      
      for(j in currentpuzzle.wall){
        cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`];
        if(cell.classList.contains("black")){
          cell.classList.add("green");
        }
        else {
          cell.classList.add("yellow");
        }
      }
      
      localStorage[currentroom+"-"+currentpuzzle.index] = 1;
      localStorage["totalpuzzles"] = totalpuzzles = +localStorage["totalpuzzles"] + 1;
      
      for(i in levels[currentroom].bridges){
        bridge = levels[currentroom].bridges[i];
        if(!bridge.open && (totalpuzzles >= bridge.puzzles || snakelength >= bridge.snakelength)){
          lock = 1;
          animation = 1;
          scene.style.transform = `rotateX(30deg) translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin)`;
          window["bridge" + i].classList.add("open");
          bridge.open = 1;
          localStorage["bridge" + currentroom + "-" + i] = 1;
          setTimeout(()=>{
            lock = 0;
            animation = 0;
            movesnake();
          }, 2000);
        }
      }
    }
  }
}