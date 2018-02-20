// Move snake and animate all the elements that move at each snake move
movesnake = (movecamera = 1) => {
  
  var i;
  
  // Clear current puzzle
  clearpuzzle();
  
  // Reset current puzzle, puzzling flags
  if(!puzzling){
    currentpuzzle = null;
  }
  puzzling = 0;
    
  // For each cube, update inbounds status, currentpuzzle (determined by the snake head) and puzzling
  inbounds0 = 0;
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    if(
      snakepos[0][0] >= puzzle.x && snakepos[0][0] < puzzle.x + puzzle.size
      && snakepos[0][1] >= puzzle.y && snakepos[0][1] < puzzle.y + puzzle.size
    ){
      inbounds0 = 1;
      currentpuzzle = puzzle;
      if(!puzzle.solved){
        puzzling = 1;
      }
    }
  }
  
  if(!goingback){
    inbounds.unshift(inbounds0);
  }
  
  // Stay zoomed if one of the first 4 cubes after the head is in the puzzle
  if(
    (currentpuzzle && !currentpuzzle.solved)
    && (inbounds[0] || inbounds.slice(1, snakelength).includes(1)
    && snakepos.length > snakelength + 10)
  ){
    puzzling = 1;
  }
  else {
    puzzling = 0;
  }
  
  // Check if each cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[i][2] * 10 + .5) + "vmin) " + (snakepos[i][2] > 0 ? "rotateX(-90deg) translateY(-5vmin) translateZ(-5vmin)" : "");
    
    if(!mobile || (mobile && i == 0)){
      window["snakecube" + i].style.transform = "rotateZ(" + (snakeangles[i]) + "deg)";
    }
    
    if(!mobile){
      if(snakepos[i][2] == 0){
        window["snakegrass" + i].style.backgroundPosition = -(snakepos[i][0] * 10 + (snakepos[i][1] * 100)) + "vmin bottom";
        if(inbounds[i] || puzzling || snakepos[i][0] < 0 || snakepos[i][0] >= levels[currentroom].width){
          window["snakegrass" + i].style.opacity = 0;
          window["snakeshadow" + i].style.display = "none";
        }
        else {
          window["snakegrass"+i].style.opacity = 1;
          window["snakeshadow" + i].style.display = "block";
        }
      }
      else {
        window["snakeshadow" + i].style.display = "none";
      }
    }
  }
  
  // If the snake moves on X axis, rotate the trees to face the camera
  i = 0;
  if(!mobile){
    for(i in levels[currentroom].trees){
      tree = levels[currentroom].trees[i];
      if(!inbounds[0] && !puzzling){
        window["treecontent" + i].style.transform = `rotateY(${Math.sin((snakepos[0][0] - tree[0]) / 30)}rad)`;
      }
    }
  }
  
  if(movecamera){
    
    // Zoom in a flat puzzle
    if(puzzling && currentpuzzle && currentpuzzle.ground && !currentpuzzle.wall){
      b.classList.add("inbounds");
      scene.style.transition = "1s";
      scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateZ(" + ((currentpuzzle.size * .6) * 10) + "vmin) rotateX(10deg)";
      if(!mobile){
        b.style.backgroundPosition = sky + "px -80vmin";
      }
      checkpuzzle();
    }
    
    // Zoom in a vertical puzzle
    else if(puzzling && currentpuzzle && !currentpuzzle.ground && currentpuzzle.wall){
      if(snakepos[0][1] == currentpuzzle.y){
        b.classList.add("inbounds");
        scene.style.transition = "1s";
        scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y) * 10 + 1 + (currentpuzzle.size / 2) * 10 - 20) + "vmin) translateZ(" + ((currentpuzzle.size * .6) * 10) + "vmin) rotateX(70deg)";
        if(!mobile){
          b.style.backgroundPosition = sky + "px 80vmin";
        }
        checkpuzzle();
      }
      else {
        if(!mobile){
          b.style.backgroundPosition = sky + "px center";
        }
        setTimeout(()=>{scene.style.transition = ""}, 1000);
        scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1 + 10) + "vmin) translateZ(40vmin) rotateX(30deg)";
        }
      
    }
    
    // Dezoom when out of a puzzle
    else if(!inbounds[0] || (currentpuzzle && currentpuzzle.solved)){
      b.classList.remove("inbounds");
      if(!mobile){
        b.style.backgroundPosition = sky + "px center";
      }
      setTimeout(()=>{scene.style.transition = ""}, 1000);
      scene.style.transformOrigin = (snakepos[0][0] * 10) + "vmin " + (snakepos[0][1] * 10 + 1) + "vmin";
      scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1) + "vmin) translateZ(40vmin) rotateX(30deg)";
    }
  }
  
  // Close bridge 0 when we finish entering a room
  if(!lock && snakepos[snakelength - 1][0] > 0 && bridge0 && bridge0.classList.contains("open") && bridge0.classList.contains("angle180")){
    bridge0.classList.remove("open");
    bridge0.open = 0;
  }
  
  // Eat an apple
  for(i in levels[currentroom].apples){
    apple = levels[currentroom].apples[i];
    if(!apple.eaten && snakepos[0][0] == apple.x && snakepos[0][1] == apple.y){
      apple.eaten = 1;
      window["apple" + i].classList.add("eaten");
      if(window["appleshadow" + i]){
        window["appleshadow" + i].classList.add("eaten");
      }
      localStorage["apple_" + currentroom + "_" + i] = 1;
      snake.insertAdjacentHTML("beforeEnd",
`<div id="snakecubemove${snakelength}" class="snakecubemove" style="transform:translateX(${snakepos[snakelength][0]*10+1}vmin) translateY(${snakepos[snakelength][1]*10+1}vmin) translateZ(${snakepos[snakelength][2]*10+.6}vmin)">
  <div id="snakeshadow${snakelength}" class="snakeshadow"></div>
  <div id="snakegrass${snakelength}" class="snakegrass" style="${snakepos[snakelength][0] < 0 ? 'opacity:0' : ''}"></div>
  <div id="snakecube${snakelength}" class="cube snakecube bright">
    <div class="u"></div>
    <div class="f"></div>
    <div class="r"></div>
    <div class="l"></div>
    <div class="b"></div>
  </div>
</div>`);
      setTimeout('window["snakecube"+'+snakelength+'].classList.remove("bright")', 100);
      snakelength++;
      localStorage.snakelength = snakelength;
      
      for(j in levels[currentroom].bridges){
        bridge = levels[currentroom].bridges[j];
        if(!bridge.open && (totalpuzzles >= bridge.puzzles || snakelength >= bridge.snakelength)){
          lock = 1;
          animation = 1;
          scene.style.transformOrigin = `${bridge.x * 10}vmin ${bridge.y * 10}vmin`;
          scene.style.transform = `translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin) rotateX(30deg)`;
          window["bridge" + j].classList.add("open");
          bridge.open = 1;
          localStorage["bridge" + currentroom + "-" + j] = 1;
          setTimeout(() => {
            lock = 0;
            animation = 0;
            movesnake();
          }, 2000);
          break;
        }
        break;
      }
    }
  }
}

