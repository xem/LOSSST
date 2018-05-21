// Move snake and animate all the elements that move at each snake move
movesnake = (movecamera = 1, movesnake = 1) => {
  
  var i;
  
  // Clear current puzzle
  clearpuzzle();
  
  // CURRENT PUZZLE & STATUS
  
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
      snakepos[0][0] >= puzzle.x - 1 && snakepos[0][0] < puzzle.x + puzzle.size + 1
      && snakepos[0][1] >= puzzle.y - 1 && snakepos[0][1] < puzzle.y + puzzle.size
    ){
      inbounds0 = 1;
      currentpuzzle = puzzle;
      if(currentpuzzle != latestpuzzle){
        latestpuzzle = currentpuzzle;
        movessincelatestpuzzle = 0;
      }
      if(!puzzle.solved){
        puzzling = 1;
      }
    }
  }
  
  // DISTANCE FROM RESET POINT
  
  if(movesnake){
    if(goingback){
      movessincelatestpuzzle--;
    }
    else {
      inbounds.unshift(inbounds0);
      movessincelatestpuzzle++;
    }
  
    document.title = movessincelatestpuzzle;
  }
  
  // PUZZLING
  
  // Stay zoomed if cube 0 is inbounds (puzzle + 1-square margin)
  if(currentpuzzle && !currentpuzzle.solved && inbounds0){
    puzzling = 1;
  }
  else {
    puzzling = 0;
  }
  
  // MOVE CUBE, GRASS, SHADOW
  for(i = 0; i < snakelength; i++){
    
    
    // TELEPORT
    //if(i == 0){
    //  console.log(3, snakepos[i][0] - snakepos[i+1][0], snakepos[i][1] - snakepos[i+1][1], snakepos[i][2] - snakepos[i+1][2]);
    //}
    
    if(currentroom != 12 && snakepos[i+1] && Math.hypot(snakepos[i][0] - snakepos[i+1][0], snakepos[i][1] - snakepos[i+1][1], snakepos[i][2] - snakepos[i+1][2]) > 1){
      window["snakecubemove" + i].style.transition = "0s";
      window["snakecube" + i].style.transition = ".2s";
      
      setTimeout(`
        window["snakecube${i}"].style.transform = "rotateZ(" + (snakeangles[${i}]) + "deg) scale(.3) scaleZ(.3)";
      `, 10);

      setTimeout(`
        window["snakecubemove${i}"].style.transform = "translateX(" + (snakepos[${i}][0] * 10 + 1) + "vmin) translateY(" + (snakepos[${i}][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[${i}][2] * 10 + .5) + "vmin) " + (snakepos[${i}][2] > 0 ? "rotateX(-90deg) translateY(-5vmin) translateZ(-3vmin)" : "");
      `, 180);
      
      setTimeout(`
        window["snakecubemove${i}"].style.transition = "";
        window["snakecube${i}"].style.transition = "";
        window["snakecube${i}"].style.transform = "rotateZ(" + (snakeangles[${i}]) + "deg)";
      `, 250);
      
    }
    
    // NORMAL MOVE
    else {
      
      window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[i][2] * 10 + .5) + "vmin) " + (snakepos[i][2] > 0 ? "rotateX(-90deg) translateY(-5vmin) translateZ(-3vmin)" : "");
    
      // ROTATE
      if(!mobile || (mobile && i == 0)){
        window["snakecube" + i].style.transform = "rotateZ(" + (snakeangles[i]) + "deg)";
      }
    
    }
    
    if(!mobile){
      if(snakepos[i][2] == 0){
        window["snakegrass" + i].style.backgroundPosition = -(snakepos[i][0] * 10 + (snakepos[i][1] * 100)) + "vmin bottom";
        if(inbounds[i] || snakepos[i][0] < 0 || snakepos[i][0] > levels[currentroom].width - 1){
          window["snakegrass" + i].style.opacity = 0;
          //window["snakeshadow" + i].style.display = "none";
        }
        else {
          window["snakegrass" + i].style.opacity = 1;
          //window["snakeshadow" + i].style.display = "block";
        }
      }
      else {
        //window["snakeshadow" + i].style.display = "none";
      }
    }
  }
  
  // If the snake moves on X axis, rotate the trees to face the camera
  var l = 0;
  if(!mobile){
    for(l in levels[currentroom].trees){
      tree = levels[currentroom].trees[l];
      if(!inbounds[0] && !puzzling){
        window["treecontent" + l].style.transform = `rotateY(${Math.sin((snakepos[0][0] - tree[0]) / 30)}rad)`;
      }
    }
  }
  
  // MOVE CAMERA
  
  if(movecamera){
    
    // Zoom on scene wall (boss fight)
    if(scenewallvisible && snakepos[0][2] > 0){
      scene.style.transform = "translateX(-76vmin) translateY(28vmin) translateZ(-30vmin) rotateX(63deg)";
    }
    
    // Zoom in a flat puzzle
    else if(puzzling && currentpuzzle && currentpuzzle.ground && !currentpuzzle.wall){
      b.classList.add("inbounds");
      if(!mobile) scene.style.transition = "1s";
      scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateZ(" + ((currentpuzzle.size * .6 - 2) * 10) + "vmin) rotateX(10deg)";
      if(!mobile){
        b.style.backgroundPosition = sky + "px -80vmin";
      }
      checkpuzzle();
    }
    
    // See behind a vertical puzzle
    else if (currentpuzzle && !currentpuzzle.ground && currentpuzzle.wall && snakepos[0][1] == currentpuzzle.y - 1){
      if(snakepos[0][2] == 0){
        scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1 + 10) + "vmin) translateZ(10vmin) rotateX(8deg)";
      }
      checkpuzzle();
    }

    // Zoom in a horizontal + vertical puzzle
    else if(currentpuzzle && currentpuzzle.ground && currentpuzzle.wall){
      b.classList.add("inbounds");
      scene.style.transformOrigin = ((currentpuzzle.x + currentpuzzle.size / 2) * 10) + "vmin " + ((currentpuzzle.y) * 10) + "vmin";
      
      // Ground side
      if(snakepos[0][2] > 0){
        scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2 - 4) * 10) + "vmin) translateZ(" + ((currentpuzzle.size - 5) * 10) + "vmin) rotateX(60deg)";
      }

      // Wall side
      else {
        scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2 - 2) * 10) + "vmin) translateZ(" + ((currentpuzzle.size - 5) * 10) + "vmin) rotateX(30deg)";
      }
      if(!mobile){
        b.style.backgroundPosition = sky + "px -80vmin";
      }
      checkpuzzle();
    }

    // Zoom in a vertical puzzle
    else if(currentpuzzle && !currentpuzzle.ground && currentpuzzle.wall){
      if(snakepos[0][1] == currentpuzzle.y){
        b.classList.add("inbounds");
        if(!mobile) scene.style.transition = "1s";
        
        if(snakepos[0][2] > 0){
          scene.style.transformOrigin = ((currentpuzzle.x + currentpuzzle.size / 2) * 10) + "vmin " + ((currentpuzzle.y) * 10) + "vmin";
          scene.style.transform = "translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y) * 10 + 1 + (currentpuzzle.size / 2) * 10) + "vmin) translateZ(" + ((currentpuzzle.size - 4) * 10) + "vmin) rotateX(80deg)";
        }

        else {
          scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1 + 10) + "vmin) translateZ(10vmin) rotateX(30deg)";
        }

        if(!mobile){
          b.style.backgroundPosition = sky + "px 80vmin";
        }
        checkpuzzle();
      }
      else {
        if(!mobile){
          b.style.backgroundPosition = sky + "px center";
        }
        if(!mobile) setTimeout(()=>{scene.style.transition = ""}, 1000);
        scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1 + 10) + "vmin) translateZ(10vmin) rotateX(30deg)";
        
        if(!currentpuzzle.depth) checkpuzzle();
      }
      
    }
    
    // Dezoom when out of a puzzle
    else if(!inbounds[0] || (currentpuzzle && currentpuzzle.solved)){
      b.classList.remove("inbounds");
      if(!mobile){
        b.style.backgroundPosition = sky + "px center";
      }
      if(!mobile) setTimeout(()=>{scene.style.transition = ""}, 1000);
      scene.style.transformOrigin = (snakepos[0][0] * 10) + "vmin " + (snakepos[0][1] * 10 + 1) + "vmin";
      scene.style.transform = "translateX(" + (-snakepos[0][0] * 10 + 1 - 5) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1) + "vmin) translateZ(10vmin) rotateX(30deg)";
      if(inbounds[1] && (currentpuzzle && !currentpuzzle.solved)) checkpuzzle();
    }
  }
  
  // Close bridge 0 when we finish entering a room
  if(window["bridge0"]){
    if(!lock && snakepos[snakelength - 1][0] > 0 && bridge0 && bridge0.classList.contains("open") && bridge0.classList.contains("angle180")){
      bridge0.classList.remove("open");
      bridge0.open = 0;
      setTimeout("bridge0.innerHTML=''", 2000);
    }
  }
  
  // Eat an apple
  for(var l in levels[currentroom].apples){
    apple = levels[currentroom].apples[l];
    if(!apple.eaten && !localStorage["apple_" + currentroom + "_" + l] && snakepos[0][0] == apple.x && snakepos[0][1] == apple.y){
      apple.eaten = 1;
      window["apple" + l].classList.add("eaten");
      if(window["appleshadow" + l]){
        window["appleshadow" + l].classList.add("eaten");
      }
      localStorage["apple_" + currentroom + "_" + l] = 1;
      snake.insertAdjacentHTML("beforeEnd",
`<div id="snakecubemove${snakelength}" class="snakecubemove" style="transform:translateX(${snakepos[snakelength][0]*10+1}vmin) translateY(${snakepos[snakelength][1]*10+1}vmin) translateZ(${snakepos[snakelength][2]*10+.6}vmin)">
  <!--div id="snakeshadow${snakelength}" class="snakeshadow"></div-->
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
        if(bridge){
          
          if(!bridge.open && totalpuzzles >= bridge.puzzles){
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
              movesnake(1,0);
            }, 2000);
            break;
          }
          break;
        }
      }
    }
  }
  
  // HINT
  if(levels[currentroom].hint){
    hint = levels[currentroom].hint;
    var dist = Math.hypot(snakepos[0][0] - hint[0], snakepos[0][0] - hint[1]);
    if(currentroom != 0 && dist < 10){
      if(hint0) hint0.style.opacity = 1;
    }
    if(dist > 10){
      if(hint0) hint0.style.opacity = 0;
    }
  }
  
  // RESET
  for(var l = 0; l < levels[currentroom].puzzles.length; l++){
  
    if(currentpuzzle && currentpuzzle.index == l){
      window["puzzlereset" + currentroom + "-" + l].style.opacity = 1;
    }
    
    else {
      window["puzzlereset" + currentroom + "-" + l].style.opacity = 0;
    }
  }
}

