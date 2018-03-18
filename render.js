// Render the scene

render = () => {

  var i, j;
  
  if(currentroom > 0) {
    try {
      music.src = currentroom + ".mp3?v=4";
      music.play();
    }
    catch(e){}
  }

  scene.style.transformOrigin = `${levels[currentroom].hole[0] * 10}vmin ${levels[currentroom].hole[1] * 10}vmin`;
  scene.style.transform = `translateX(-${levels[currentroom].hole[0] * 10}vmin) translateY(-${levels[currentroom].hole[1] * 10}vmin) translateZ(-50vmin) rotateX(0deg)`;
  
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
<div id=boss></div>
<div id=mask></div>`;

  for(i = 0; i < snakelength; i++){
    snake.innerHTML +=
`<div id="snakecubemove${i}" class="snakecubemove">
  <div id="snakeshadow${i}" class="snakeshadow"></div>
  <div id="snakegrass${i}" class="snakegrass"></div>
  ${i?'':'<div class="headcontrol left" data-dir=0></div>'}
  ${i?'':'<div class="headcontrol top" data-dir=1></div>'}
  ${i?'':'<div class="headcontrol right" data-dir=2></div>'}
  ${i?'':'<div class="headcontrol bottom" data-dir=3></div>'}
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
  <div id="puzzleground${i}" class="d"></div>
  ${puzzle.wall ? '<div id="puzzleback'+i+'" class="b"></div>' : ''}
  ${puzzle.wall2 ? '<div id="puzzlebackback'+i+'" class="bb"></div>' : ''}
  <div class="puzzlegrass"></div>
</div>`;

    if(puzzle.ground){
      for(j in puzzle.ground){
          window["puzzleground" + i].innerHTML +=
          `<div id="cell${currentroom}-${i}-${j}" data-x=${puzzle.x + ((+j) % puzzle.size)} data-y=${puzzle.y + ~~((+j)/puzzle.size)} class="cell ${+(puzzle.ground[j])>1 ? "purple" : +(puzzle.ground[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }
    
    else if(!puzzle.depth) {
      window["puzzleground" + i].style.backgroundImage = "url(images/grass2.png)";
    }
    
    else {
       window["puzzleground" + i].style.background = 'url("images/grass.png") 0 10vmin repeat-x, url("images/grass2.png") 0 0 repeat-x';
       window["puzzleground" + i].style.backgroundSize = '70vmin, 70vmin';
       document.querySelector(`#puzzle${currentroom}-${i} .puzzlegrass`).style.opacity = "0";
    }
    
    if(puzzle.wall){
      for(j in puzzle.wall){
        window["puzzleback" + i].innerHTML +=
        `<div id="cell${currentroom}-wall-${i}-${j}" data-x=${puzzle.x + ((+j) % puzzle.size)} data-z=${puzzle.size - ~~((+j)/puzzle.size) - 1} class="cell ${+(puzzle.wall[j]) > 1 ? "purple" : +(puzzle.wall[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }
  }
  
  if(levels[currentroom].boss){
    for(i = 0; i < 5; i++){
      for(j = 0; j < 6; j++){
        for(k = 0; k < 6; k++){
          console.log(levels[currentroom].boss[i]);
          
          if(+levels[currentroom].boss[i][k * 6 + j]){
            boss.innerHTML +=
            `<div class="cube bosscube" style="left:0;top:0;transform:translateX(${(5+j)*10}vmin)translateY(${(5+k)*10}vmin)translateZ(${(6-i)*10}vmin)">
              <div class="u"></div>
              <div class="f"></div>
              <div class="r"></div>
              <div class="l"></div>
              <div class="d"></div>
            </div>`;
          }
        }
      }
    }
    boss.style.transform = `translateZ(1000vmin)`;
  }
  
  
  
  for(i in levels[currentroom].cubes){
    cube = levels[currentroom].cubes[i];
    cubes.innerHTML +=
`<div class="cube rockcube" style="left:${cube[0]*10}vmin;top:${cube[1]*10}vmin">
  <div class="u"></div>
  <div class="f"></div>
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
      `<div id="apple${j}" class="apple ${localStorage["apple_" + currentroom + "_" + j] ? "eaten" : ""}" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"><div class="applecontent"></div></div>`+
      (localStorage["apple_" + currentroom + "_" + j] ? "" : `<div id="appleshadow${j}" class="appleshadow" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"></div>`);
    }
  }
  
  scene.style.width = levels[currentroom].width * 10 + 2 + "vmin";
  scene.style.height = levels[currentroom].height * 10 + 2 + "vmin";

  movesnake(0);
  
  // BOSS CINEMATIC
  b.style.backgroundImage = "url(images/space.jpg)";
  perspective.style.perspective = "130vmin";
  if(levels[currentroom].boss){
    setTimeout(function(){
      b.style.transition = "2s";
      scene.style.transition = "2s";
      b.style.backgroundPositionY = "200vmin";
      scene.style.transform = `translateX(-74vmin) translateY(-18vmin) translateZ(126vmin) rotateX(170deg)`;
    }, 1000);
    
    setTimeout(function(){
      b.style.transition = "2s";
      scene.style.transition = "2s";
      b.style.backgroundPositionY = "0vmin";
      scene.style.transform = "translateX(-83vmin) translateY(-34vmin) translateZ(27vmin) rotateX(91deg)";
    }, 4500);
    
    setTimeout(function(){
      boss.style.transition = "4s";
      boss.style.transform = `translateY(0vmin)`;
      boss.style.transformOrigin = `80vmin 80vmin`;
    }, 2000);
    
    setTimeout(function(){
      boss.style.transition = ".5s";
      boss.style.transform = `rotateZ(-45deg)`;
    }, 6000);
    
    setTimeout(function(){
      boss.style.transition = ".5s";
      boss.style.transform = `rotateZ(45deg)`;
    }, 7000);
    
    setTimeout(function(){
      boss.style.transition = ".5s";
      boss.style.transform = `rotateZ(0)`;
    }, 8000);
  }
  
  snakepos[0][2] = 0;
  
  //b.style.backgroundPosition = sky + "px -80vmin";
  skyintro = 1;
  setTimeout(movesnake, 500);
  setTimeout("mask.remove()", 300);
  setTimeout("b.classList.remove('intro')", 2500);
}