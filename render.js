render = () => {

  if(currentroom > 0) {
    music.src = currentroom + ".mp3?v=2";
    music.play();
  }

  scene.style.transform = `rotateX(0deg) translateX(-${levels[currentroom].hole[0] * 10}vmin) translateY(-${levels[currentroom].hole[1] * 10}vmin) translateZ(80vmin)`;
  
  scene.innerHTML =
`<div id=scenedepth style="width:${levels[currentroom].width * 10 - 5}vmin; transform: translateY(${levels[currentroom].height * 10}vmin) rotateX(-45deg)"></div>
<div id=holes></div>
<div id=bridges></div>
<div id=puzzles></div>
<div id=grass></div>
<div id=stones></div>
<div id=trees></div>
<div id=apples></div>
<div id=cubes></div>
<div id=snake></div>
<div id=mask></div>`;

  for(i = 0; i < snakelength; i++){
    snake.innerHTML +=
`<div id="snakecubemove${i}" class="snakecubemove">
  <div class="snakeshadow"></div>
  <div id="snakegrass${i}" class="snakegrass"></div>
  <div id="snakecube${i}" class="cube snakecube">
    ${i?'':'<div class="tongue">Y</div>'}
    ${i?'<div class="u"></div>':'<div class="u eyes"></div>'}
    ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
    <div class="r"></div>
    <div class="l"></div>
    <div class="b"></div>
  </div>
</div>`;
  }
  
  for(i = 0; i < 4; i++){
    snake.innerHTML += `<div id="snaketrail${i}" class="snaketrail" style="display: none"></div>`;
  }
  
  if(levels[currentroom].hole){
    hole = levels[currentroom].hole;
    holes.innerHTML += `<div class="hole" style="margin-left:${hole[0] * 10 - 2}vmin;margin-top:${hole[1] * 10 - 4}vmin"></div>`;
  }
  
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    puzzle.index = i;
    if(+localStorage[currentroom + "-" + puzzle.index]){
      puzzle.solved = 1;
    }
    puzzles.innerHTML +=
`<div id="puzzle${currentroom}-${i}" class="cube puzzlecube" style="width:${puzzle.size*10}vmin;height:${puzzle.size*10}vmin;left:${puzzle.x*10}vmin;top:${puzzle.y*10}vmin">
  <!--div class="u"></div-->
  <div id="puzzleground${i}" class="d"></div>
  <!--div class="f"></div>
  <div class="r"></div>
  <div class="l"></div-->
  <div id="puzzleback${i}" class="b"></div>
  <div class="puzzlegrass"></div>
</div>`;

    if(puzzle.ground){
      for(j in puzzle.ground){
        window["puzzleground" + i].innerHTML +=
        `<div id="cell${currentroom}-${i}-${j}" class="cell ${+(puzzle.ground[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }
    
    else {
      window["puzzleground" + i].style.filter = "brightness(.85)";
    }
    
    if(puzzle.wall){
      for(j in puzzle.wall){
        window["puzzleback" + i].innerHTML +=
        `<div id="cell${currentroom}-wall-${i}-${j}" class="cell ${+(puzzle.wall[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }

  }
  
  
  for(i in levels[currentroom].cubes){
    cube = levels[currentroom].cubes[i];
    cubes.innerHTML +=
`<div class="cube rockcube" style="left:${cube[0]*10}vmin;top:${cube[1]*10}vmin">
  <div class="u"></div>
  <div class="f"></div>
  <div class="b"></div>
  <div class="r"></div>
  <div class="l"></div>
</div>`;
  }
  
  for(j in levels[currentroom].trees){
    tree = levels[currentroom].trees[j];
    trees.innerHTML +=
    `<div id="tree${j}" class="tree" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"><div id="treecontent${j}" class="treecontent"></div></div>
    <div class="treeshadow" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"></div>`;
  }
  
  
  for(j in levels[currentroom].bridges){
    bridge = levels[currentroom].bridges[j];
    if(+localStorage["bridge" + currentroom + "-" + j]){
      bridge.open = 1;
    }
    bridges.innerHTML +=
    `<div id="bridge${j}" class="bridge ${bridge.open ? "open" : ""} angle${bridge.angle}" style="margin-left:${bridge.x * 10}vmin;margin-top:${bridge.y * 10 - 10}vmin;"><div class="bridgedepth"></div></div>`;
  }
  
  for(j in levels[currentroom].stones){
    stone = levels[currentroom].stones[j];
    stones.innerHTML +=
    `<div class="stone" style="margin-left:${stone[0] * 10}vmin;margin-bottom:-${stone[1] * 10}vmin"></div>`;
  }
  
  for(j in levels[currentroom].apples){
    apple = levels[currentroom].apples[j];
    if(!apple.eaten){
      apples.innerHTML +=
      `<div id="apple${j}" class="apple" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"><div class="applecontent"></div></div>`+
      `<div id="appleshadow${j}" class="appleshadow" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"></div>`;
    }
  }
  
  scene.style.width = levels[currentroom].width * 10 + 2 + "vmin";
  scene.style.height = levels[currentroom].height * 10 + 2 + "vmin";

  movesnake(0);
  
  snakepos[0][2] = 0;
  
  setTimeout("mask.remove()", 300);
  setTimeout(movesnake, 500);
  setTimeout("b.classList.remove('intro')", 2500);
}