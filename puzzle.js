// Clear a puzzle (remove blue and red tiles)
clearpuzzle = () => {
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
  
  // Color cells in red/blue
  if(!currentpuzzle.solved){
    for(i = 0; i < snakelength; i++){
      if(snakepos[i][0] >= currentpuzzle.x && snakepos[i][0] < currentpuzzle.x + currentpuzzle.size){
        
        if(currentpuzzle.ground){
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
        
        if(currentpuzzle.wall && !currentpuzzle.ground && snakepos[i][1] == currentpuzzle.y){
          cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${(currentpuzzle.size - snakepos[i][2] - 1) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
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
  }
  
  // Check solution
  solved = 1;
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || (cell.classList.contains("black") && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
    
    for(j in currentpuzzle.wall){      
      cell = window[`cell${currentroom}-wall-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || (cell.classList.contains("black") && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
  
    // Color in green, save
    if(solved){
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
          },2000);
        }
      }
    }
  }
}