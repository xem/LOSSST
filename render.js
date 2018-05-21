// Render the scene

render = () => {
  
  // World
  b.classList.remove("world1");
  b.classList.remove("world2");
  b.classList.remove("world3");
  b.classList.add(currentroom <= 12 ? "world1" : currentroom <= 20 ? "world2" : "world3");
  
  var i, j;
  
  try {
    
    var mp3 = currentroom;
    if(currentroom > 13 && currentroom <= 20){
      mp3 = 13;
    }
    if(!music.src.includes("13.mp3")){
      music.src = mp3 + ".mp3?v=4";
      music.play();
    }
  }
  catch(e){}

  // Scene
  scene.style.transformOrigin = `${levels[currentroom].hole[0] * 10}vmin ${levels[currentroom].hole[1] * 10}vmin`;
  scene.style.transform = `translateX(-${levels[currentroom].hole[0] * 10}vmin) translateY(-${levels[currentroom].hole[1] * 10}vmin) translateZ(-50vmin) rotateX(0deg)`;
  
  // Containers
  scene.innerHTML =
`<div id=scenedepth style="width:${levels[currentroom].width * 10 - 5}vmin; transform: translateY(${levels[currentroom].height * 10}vmin) rotateX(-45deg)"></div>
<div id=scenewall style="width:${levels[currentroom].width * 10 - 5}vmin; transform: rotateX(-90deg)"></div>
<div id=hints></div>
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
<div id=egg></div>
<div id=bossground style="display:none"></div>
<div id=bosswall style="display:none;transform:translateX(40vmin) translateY(-60vmin) rotateX(-90deg)"></div>
<div id=mask></div>`;

  // Boss scene wall
  if(levels[currentroom].boss){
    scenewall.style.height = "100vmin";
  }
  scenewallvisible = 0;

  // Snake
  for(i = 0; i < snakelength; i++){
    snake.innerHTML +=
`<div id="snakecubemove${i}" class="snakecubemove">
  <!--div id="snakeshadow${i}" class="snakeshadow"></div-->
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
  
  // Hint
  if(levels[currentroom].hint){
    hint = levels[currentroom].hint;
    hints.innerHTML += `<div class="hint" id="hint0" style="margin-left:${hint[0] * 10 - 2}vmin;margin-top:${hint[1] * 10 - 4}vmin; background: url(${mobile ? hint[3] : hint[2]}) no-repeat; background-size: 100%;"></div>`;
  }
  
  // Hole
  if(levels[currentroom].hole){
    hole = levels[currentroom].hole;
    holes.innerHTML += `<div class="hole" style="margin-left:${hole[0] * 10 - 2}vmin;margin-top:${hole[1] * 10 - 4}vmin"></div>`;
  }
  
  // Puzzles
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    puzzle.index = +i;
    if(+localStorage[currentroom + "-" + puzzle.index]){
      puzzle.solved = 1;
    }
    puzzles.innerHTML +=
`<div id="puzzle${currentroom}-${i}" class="cube puzzlecube ${puzzle.wrap ? "wrap" : ""}" style="width:${puzzle.size*10}vmin;height:${puzzle.size*10}vmin;left:${puzzle.x*10}vmin;top:${puzzle.y*10}vmin">
  <div id="puzzlereset${currentroom}-${i}" class="reset" onclick="reset_puzzle()">🔄</div>
  <div id="puzzleground${i}" class="d"></div>
  ${puzzle.wall ? '<div id="puzzleback'+i+'" class="b"></div>' : ''}
  <div class="puzzlegrass"></div>
</div>`;

    if(puzzle.ground){
      for(j in puzzle.ground){
          window["puzzleground" + i].innerHTML +=
          `<div id="cell${currentroom}-${i}-${j}" data-x=${puzzle.x + ((+j) % puzzle.size)} data-y=${puzzle.y + ~~((+j)/puzzle.size)} class="cell ${+(puzzle.ground[j]) > 2 ? "tan" : +(puzzle.ground[j]) > 1 ? "purple" : +(puzzle.ground[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }
    
    else if(!puzzle.depth) {
      window["puzzleground" + i].style.background = "rgba(0,0,0,.3)";
    }
    
    else {
       window["puzzleground" + i].style.background = 'linear-gradient(rgba(0,0,0,.3) 10vmin, transparent 10vmin)';
       document.querySelector(`#puzzle${currentroom}-${i} .puzzlegrass`).style.opacity = "0";
    }
    
    if(puzzle.wall){
      for(j in puzzle.wall){
        window["puzzleback" + i].innerHTML +=
        `<div id="cell${currentroom}-wall-${i}-${j}" data-x=${puzzle.x + ((+j) % puzzle.size)} data-z=${puzzle.size - ~~((+j)/puzzle.size) - 1} class="cell ${+(puzzle.wall[j]) > 2 ? "tan" : +(puzzle.wall[j]) > 1 ? "purple" : +(puzzle.wall[j]) ? ("black" + (puzzle.solved ? " green" : "")) : (puzzle.solved ? "yellow" : "white")}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
      }
    }
  }
  
  // Puzzles teleporter detection
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    puzzle.teleporter = [];
    if(puzzle.ground && puzzle.ground.includes("2")){
      for(j = 0; j < puzzle.size; j++){
        for(k = 0; k < puzzle.size; k++){
          if(puzzle.ground[k * puzzle.size + j] == "2"){
            puzzle.teleporter.push([j, k, 0]);
          }
        }
      }
    }
    if(puzzle.wall && puzzle.wall.includes("2")){
      for(j = 0; j < puzzle.size; j++){
        for(k = 0; k < puzzle.size; k++){
          if(puzzle.wall[k * puzzle.size + j] == "2"){
            puzzle.teleporter.push([j, 0, puzzle.size - k - 1]);
          }
        }
      }
    }
  }
  
  // Puzzles teleporter2 detection
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    puzzle.teleporter2 = [];
    if(puzzle.ground && puzzle.ground.includes("3")){
      for(j = 0; j < puzzle.size; j++){
        for(k = 0; k < puzzle.size; k++){
          if(puzzle.ground[k * puzzle.size + j] == "3"){
            puzzle.teleporter2.push([j, k, 0]);
          }
        }
      }
    }
    if(puzzle.wall && puzzle.wall.includes("3")){
      for(j = 0; j < puzzle.size; j++){
        for(k = 0; k < puzzle.size; k++){
          if(puzzle.wall[k * puzzle.size + j] == "3"){
            puzzle.teleporter2.push([j, 0, puzzle.size - k - 1]);
          }
        }
      }
    }
  }
  
  // Boss
  if(levels[currentroom].boss){
    for(i = 0; i < 5; i++){
      for(j = 0; j < 6; j++){
        for(k = 0; k < 6; k++){
          
          if(+levels[currentroom].boss[i][k * 6 + j]){
            boss.innerHTML +=
            `<div class="cube bosscube" style="left:0;top:0;transform:translateX(${(5+j)*10}vmin)translateY(${(2+k)*10}vmin)translateZ(${(6-i)*10}vmin)">
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
  
  // Boss ground shadow
  if(levels[currentroom].bossground){
    for(j = 0; j < 6; j++){
      for(k = 0; k < 6; k++){
        
        if(+levels[currentroom].bossground[k * 6 + j]){
          bossground.innerHTML +=
          `<div id="bossgroundcell_${j}_${k}" class="bossshadow" style="left:0;top:0;transform:translateX(${(5+j)*10}vmin)translateY(${(2+k)*10}vmin)translateZ(.3vmin)"></div>`;
        }
      }
    }
    boss.style.transform = `translateZ(1000vmin)`;
  }
  
  // Rock cubes 
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
  
  // Trees
  for(j in levels[currentroom].trees){
    tree = levels[currentroom].trees[j];
    trees.innerHTML +=
    `<div id="tree${j}" class="tree" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"><div id="treecontent${j}" class="treecontent"></div></div>
    <div class="treeshadow" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"></div>`;
  }
  
  // Bridges
  for(j in levels[currentroom].bridges){
    bridge = levels[currentroom].bridges[j];
    if(bridge) {
      if(+localStorage["bridge" + currentroom + "-" + j]){
        bridge.open = 1;
      }
      bridges.innerHTML +=
      `<div id="bridge${j}" class="bridge ${bridge.open ? "open" : ""} angle${bridge.angle}" style="margin-left:${bridge.x * 10}vmin;margin-top:${bridge.y * 10 - 10}vmin;"><div class="bridgedepth"></div></div>`;
    }
  }
  
  // Stones
  for(j in levels[currentroom].stones){
    stone = levels[currentroom].stones[j];
    stones.innerHTML +=
    `<div class="stone" style="margin-left:${stone[0] * 10}vmin;margin-bottom:-${stone[1] * 10}vmin"></div>`;
  }
  
  // Apples (and similar fruits)
  for(j in levels[currentroom].apples){
    apple = levels[currentroom].apples[j];
    if(!apple.eaten){
      apples.innerHTML +=
      `<div id="apple${j}" class="apple ${localStorage["apple_" + currentroom + "_" + j] ? "eaten" : ""}" style="margin-left:${apple.x * 10+1}vmin;margin-bottom:-${apple.y * 10}vmin"><div class="applecontent"></div></div>`+
      (localStorage["apple_" + currentroom + "_" + j] ? "" : `<div id="appleshadow${j}" class="appleshadow" style="margin-left:${apple.x * 10+1}vmin;margin-bottom:-${apple.y * 10}vmin"></div>`);
    }
  }
  
  // Scene size
  scene.style.width = levels[currentroom].width * 10 + 2 + "vmin";
  scene.style.height = levels[currentroom].height * 10 + 2 + "vmin";

  // Place the snake 
  movesnake(0);
  
  // BOSS CINEMATIC
  if(currentroom == 12){
    
    egg.innerHTML = "<div></div>";
    egg.style.transform = "translateX(72vmin) translateY(50vmin)";
    snakelength = 20;
    
    animation = 1;
    var noblue = 1;
    var circle;
    b.classList.add("boss");
    perspective.style.perspective = "130vmin";
    if(levels[currentroom].boss){
      
      // Look up
      setTimeout(function(){
        b.style.backgroundImage = "url(images/space.jpg)";
        lock = 1;
        b.style.transition = "2s";
        scene.style.transition = "2s";
        b.style.backgroundPositionY = "250vmin";
        scene.style.transform = `translateX(-74vmin) translateY(-18vmin) translateZ(126vmin) rotateX(170deg)`;
      }, 1000);
      
      setTimeout(function(){
        boss.style.transition = "4s";
        boss.style.transform = `translateY(-10vmin) translateZ(0vmin)`;
        boss.style.transformOrigin = `80vmin 50vmin`;
        bossground.style.transformOrigin = `80vmin 50vmin`;
      }, 2000);

      // Boss lands
      setTimeout(function(){
        b.style.transition = "2s";
        bossground.style.transition = "2s";
        scene.style.transition = "2s";
        b.style.backgroundPositionY = "100vmin";
        bossground.style.transform = `translateY(-10vmin)`;
        bossground.style.display = "";
        scene.style.transform = "translateX(-83vmin) translateY(-39vmin) translateZ(27vmin) rotateX(86deg)";
      }, 4100);      
      
      // Boss looks around
      setTimeout(function(){
        boss.style.transition = ".5s";
        bossground.style.transition = ".5s";
        boss.style.transform = `translateY(-10vmin) rotateZ(-45deg)`;
        bossground.style.transform = `translateY(-10vmin) rotateZ(-45deg)`;
      }, 6000);
      
      setTimeout(function(){
        boss.style.transition = ".5s";
        boss.style.transform = `translateY(-10vmin) rotateZ(45deg)`;
        bossground.style.transform = `translateY(-10vmin) rotateZ(45deg)`;
        animation = 0;
      }, 7000);
      
      setTimeout(function(){
        boss.style.transition = ".5s";
        boss.style.transform = `translateY(-10vmin) rotateZ(0)`;
        bossground.style.transform = `translateY(-10vmin) rotateZ(0)`;
        noblue = 0;
      }, 8000);
      
      // Boss rotates
      var quarterturn = 0;
      
      setTimeout(function(){
        boss.style.transition = ".5s";
        boss.style.transform = `translateY(-10vmin) translateZ(190vmin)`;
        b.style.backgroundPositionY = "0vmin";
        movesnake();
        lock = 0;
        var t = -Math.PI / 2;
        circle = setInterval(function(){
          t += Math.PI / 2;
          quarterturn++;
          bossground.style.transform = `translateX(${(Math.round(3 * Math.cos(t)))*10}vmin) translateY(${(Math.round(2 + 3 * Math.sin(t)))*10}vmin) translateZ(.3vmin)`;
          noblue = 1;
          setTimeout(function(){
            noblue = 0;
          }, 200);
        },2000);
      }, 9000);
      
      // Color snake positions over boss shadow in blue
      colorshadow = setInterval(function(){
        for(var i = 0; i < 6; i++){
          for(var j = 0; j < 6; j++){
            if(window["bossgroundcell_" + (i) + "_" + (j)]){
              window["bossgroundcell_" + (i) + "_" + (j)].classList.remove("blue");
            }
          }
        }
        
        if(!noblue){
          var bluecells = 0;
          
          // For each position
          for(var i = 0; i < snakelength; i++){

            if(snakepos[i][2] == 0){

              if(quarterturn % 4 == 0){
                if(window["bossgroundcell_" + (snakepos[i][0] - 5) + "_" + (snakepos[i][1] - 1)]){
                  window["bossgroundcell_" + (snakepos[i][0] - 5) + "_" + (snakepos[i][1] - 1)].classList.add("blue");
                  bluecells++;
                }
              }
              
              else if(quarterturn % 4 == 1){
                if(window["bossgroundcell_" + (snakepos[i][0] - 8) + "_" + (snakepos[i][1] - 4)]){
                  window["bossgroundcell_" + (snakepos[i][0] - 8) + "_" + (snakepos[i][1] - 4)].classList.add("blue");
                  bluecells++;
                }
              }
              
              else if(quarterturn % 4 == 2){
                if(window["bossgroundcell_" + (snakepos[i][0] - 5) + "_" + (snakepos[i][1] - 7)]){
                  window["bossgroundcell_" + (snakepos[i][0] - 5) + "_" + (snakepos[i][1] - 7)].classList.add("blue");
                  bluecells++;
                }
              }
              
              else if(quarterturn % 4 == 3){
                if(window["bossgroundcell_" + (snakepos[i][0] - 2) + "_" + (snakepos[i][1] - 4)]){
                  window["bossgroundcell_" + (snakepos[i][0] - 2) + "_" + (snakepos[i][1] - 4)].classList.add("blue");
                    bluecells++;
                }
              }
            }
          }

          // Win
          if(bluecells == snakelength){
            animation = 1;
            clearInterval(circle);
            clearInterval(colorshadow);
            
            // Jump
            setTimeout(function(){
              for(i = 0; i < snakelength; i++){
                snakepos.unshift([8, 4, i]);
                window["snakecubemove" + i].style.transition = "1s";
              }
              movesnake(0);
              snakecube0.style.transform = "rotateZ(-180deg)";
              scene.style.transition = "1s";
              scene.style.transform = `translateX(-74vmin) translateY(161vmin) translateZ(47vmin) rotateX(112deg)`;
              scene.style.transformOrigin = `80vmin 41vmin`;
            },300);
            
            // Hit
            setTimeout(function(){
              bossground.style.display = "none";
              boss.style.transition = "transform .8s";
              boss.style.transformOrigin = "82vmin 50vmin 170vmin";
              boss.style.transform = "rotateX(-106deg) translateY(-50vmin) translateZ(170vmin)";
            },1000);
            
            
            // Fall + apples
            setTimeout(function(){
              boss.style.transition = "1s";
              boss.style.transformOrigin = "82vmin 50vmin 0";
              boss.style.transform = "translateY(50vmin) translateZ(10vmin)";


              levels[currentroom].apples = [
                {
                  x: 11,
                  y: 4,
                  eaten: 0
                },
                
                {
                  x: 4,
                  y: 5,
                  eaten: 0
                },
              ];

              for(j in levels[currentroom].apples){
                apple = levels[currentroom].apples[j];
                if(!apple.eaten){
                  apples.innerHTML +=
                  `<div id="apple${j}" class="apple ${localStorage["apple_" + currentroom + "_" + j] ? "eaten" : ""}" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"><div class="applecontent"></div></div>`+
                  (localStorage["apple_" + currentroom + "_" + j] ? "" : `<div id="appleshadow${j}" class="appleshadow" style="margin-left:${apple.x * 10}vmin;margin-bottom:-${apple.y * 10}vmin"></div>`);
                }
              }

            },1800);
            
            // Get down
            setTimeout(function(){
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakeangles.unshift(0);
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.shift();
              snakepos.unshift([5,5,20]);
              snakepos.unshift([5,5,19]);
              snakepos.unshift([5,5,18]);
              snakepos.unshift([5,5,17]);
              snakepos.unshift([5,5,16]);
              snakepos.unshift([5,5,15]);
              snakepos.unshift([5,5,14]);
              snakepos.unshift([5,5,13]);
              snakepos.unshift([5,5,12]);
              snakepos.unshift([5,5,11]);
              snakepos.unshift([5,5,10]);
              snakepos.unshift([5,5,9]);
              snakepos.unshift([5,5,8]);
              snakepos.unshift([5,5,7]);
              snakepos.unshift([5,5,6]);
              snakepos.unshift([5,5,5]);
              snakepos.unshift([5,5,4]);
              snakepos.unshift([5,5,3]);
              snakepos.unshift([5,5,2]);
              snakepos.unshift([5,5,1]);
              snakepos.unshift([5,5,0]);
              snakepos.unshift([5,6,0]);
              snakepos.unshift([5,7,0]);
              movesnake(0);
              scene.style.transform = "translateX(-74vmin) translateY(-52vmin) translateZ(-153vmin) rotateX(44deg)";

            },2000);

            // Wall appears, boss moves
            setTimeout(function(){
              
              for(i = 0; i < snakelength; i++){
                window["snakecubemove" + i].style.transition = "";
              }
              
              boss.style.transform = "translateY(120vmin) translateZ(30vmin)";
              scenewall.style.transform = "translateZ(100vmin) rotateX(-90deg)";
              scenewallvisible = 1;

              if(levels[currentroom].bosswall){
                for(j = 0; j < 6; j++){
                  for(k = 0; k < 6; k++){
                    
                    if(+levels[currentroom].bosswall[k * 6 + j]){
                      bosswall.innerHTML +=
                      `<div id="bosswallcell_${j}_${k}" class="bossshadow" style="left:0;top:0;transform:translateX(${(j)*10}vmin)translateY(${(k)*10}vmin)translateZ(.3vmin)"></div>`;
                    }
                  }
                }
              }
              bosswall.style.display = '';

              var verticalbossposition = 0;

              setTimeout(function(){
                verticalbossposition = 0;
                boss.style.transformOrigin = "82vmin 50vmin 0";
                boss.style.transform = `translateX(${verticalbossposition ? '50vmin' : '-50vmin'}) translateY(120vmin) translateZ(30vmin)`;
                bosswall.style.transform = `translateX(${verticalbossposition ? '70vmin' : '20vmin'}) translateY(-60vmin) rotateX(-90deg)`;
              },1000);

             /* setTimeout(function(){
                verticalbossposition = 1;
                boss.style.transformOrigin = "82vmin 50vmin 0";
                boss.style.transform = `translateX(${verticalbossposition ? '50vmin' : '-50vmin'}) translateY(120vmin) translateZ(30vmin)`;
                bosswall.style.transform = `translateX(${verticalbossposition ? '70vmin' : '20vmin'}) translateY(-60vmin) rotateX(-90deg)`;
              },3000);*/

              circle = setInterval(function(){
                verticalbossposition = 1 - verticalbossposition;
                boss.style.transformOrigin = "82vmin 50vmin 0";
                boss.style.transform = `translateX(${verticalbossposition ? '50vmin' : '-50vmin'}) translateY(120vmin) translateZ(30vmin)`;
                bosswall.style.transform = `translateX(${verticalbossposition ? '70vmin' : '20vmin'}) translateY(-60vmin) rotateX(-90deg)`;
              }, 2000);
              
              
              
              // Color snake positions over boss shadow in blue
              colorshadow = setInterval(function(){
                for(var i = 0; i < 6; i++){
                  for(var j = 0; j < 6; j++){
                    if(window["bosswallcell_" + (i) + "_" + (j)]){
                      window["bosswallcell_" + (i) + "_" + (j)].classList.remove("blue");
                    }
                  }
                }
                
                if(!noblue){
                  var bluecells = 0;
                  
                  // For each position
                  for(var i = 0; i < snakelength; i++){

                    if(snakepos[i][1] == 0){

                      if(verticalbossposition == 0){
                        if(window["bosswallcell_" + (snakepos[i][0] - 2) + "_" + (5 - snakepos[i][2])]){
                          window["bosswallcell_" + (snakepos[i][0] - 2) + "_" + (5 - snakepos[i][2])].classList.add("blue");
                          bluecells++;
                        }
                      }
                      
                      else if(verticalbossposition == 1){
                        if(window["bosswallcell_" + (snakepos[i][0] - 7) + "_" + (5 - snakepos[i][2])]){
                          window["bosswallcell_" + (snakepos[i][0] - 7) + "_" + (5 - snakepos[i][2])].classList.add("blue");
                          bluecells++;
                        }
                      }
                    }
                  }
                  
                  // Win
                  if(bluecells == snakelength){
                    
                    
                    animation = 1;
                    clearInterval(circle);
                    clearInterval(colorshadow);

                    for(i = 0; i < snakelength; i++){
                      snakepos.unshift([snakepos[0][0], i, snakepos[0][2]]);
                      window["snakecubemove" + i].style.transition = "1s";
                    }
                    movesnake(0);
                    scene.style.transition = "1s";
                    scene.style.transform = `translateX(-74vmin) translateY(-86vmin) translateZ(-86vmin) rotateX(30deg)`;
                    scene.style.transformOrigin = `70vmin 11vmin`;
                    
                    // Final hit, boss leaves
                    
                    setTimeout(function(){
                      
                      for(i = 0; i < snakelength; i++){
                        snakepos[i][2] =  0;
                        snakepos[i][0] =  5;
                        snakepos[i][1] =  -i + 7;
                        window["snakecubemove" + i].style.transition = "1s";
                      }
                      movesnake(0);
                      
                      scene.style.transformOrigin = "-70vmin 150vmin";
                      scene.style.transform = "translateX(-73vmin) translateY(-101vmin) translateZ(-200vmin) rotateX(30deg)";
                      boss.style.transform = `translateX(50vmin) translateY(120vmin) translateZ(500vmin)`;
                      egg.innerHTML = "<div></div>";
                      egg.className = "open";
                      
                      snakecube0.id = "oldcube0";
                    
                      // Disable yellow snake
                      for(i = 0; i < 22; i++){
                        window["snakecubemove" + i].id = "";
                        if(window["snakecube" + i]) window["snakecube" + i].id = "";
                        //window["snakeshadow" + i].id = "";
                        window["snakegrass" + i].id = "";
                        levels[currentroom].cubes.push(snakepos[i]);
                      }
                      
                      // Make it solid
                      
                      // Draw green snake
                      snakelength = 3;
                      snakepos = [[9, 7, 0], [9, 6, 0], [9, 5, 0], [9, 5, -1], [9, 5, -2], [9, 5, -3], [9, 5, -4]];
                      snakeangles = [0,0,0];
                      for(i = 0; i < snakelength; i++){
                        snake.innerHTML +=
                        `<div id="snakecubemove${i}" class="snakecubemove">
                          <!--div id="snakeshadow${i}" class="snakeshadow"></div-->
                          <div id="snakegrass${i}" class="snakegrass"></div>
                          ${i?'':'<div class="headcontrol left" data-dir=0></div>'}
                          ${i?'':'<div class="headcontrol top" data-dir=1></div>'}
                          ${i?'':'<div class="headcontrol right" data-dir=2></div>'}
                          ${i?'':'<div class="headcontrol bottom" data-dir=3></div>'}
                          <div id="snakecube${i}" class="cube snakecube green">
                            ${i?'':'<div class="tongue">Y</div>'}
                            ${i?'<div class="u"></div>':'<div class="u eyes"></div>'}
                            ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
                            <div class="r"></div>
                            <div class="l"></div>
                            <div class="b"></div>
                          </div>
                        </div>`;
                        }
                        
                        movesnake(0);
                      
                    }, 1000);
                    
                    
                    
                    
                    // Snake moves and they look at each other
                    setTimeout(function(){
                      scene.style.transform = `translateX(-73vmin) translateY(-98vmin) translateZ(130vmin) rotateX(61deg)`;
                      boss.style.display = "none";
                      boss.innerHTML = "";
                      bosswall.style.display = "none";
                      oldcube0.style.transform = "rotateZ(0)";
                    }, 2000);
                    
                    setTimeout(function(){
                      oldcube0.style.transform = "rotateZ(-90deg)";
                      snakecube0.style.transform = "rotateZ(90deg)";
                    }, 3000);
                    
                    // Open bridge, let green snake move
                    setTimeout(function(){
                      
                      bridge = levels[currentroom].bridges[1];
                     
                      window["bridge1"].classList.add("open");
                      bridge.open = 1;
                      localStorage["bridge" + currentroom + "-" + 1] = 1;
                      
                    }, 3500);
                    
                    // Open bridge, let green snake move
                    setTimeout(function(){
                      
                      animation = 0;
                      movesnake();
                      snakecube0.style.transform = "rotateZ(0deg)";
                      b.style.backgroundImage = "url(images/sky.jpg)";
                      
                    }, 4000);
                  }
                }
              }, 300);
              

              
            },3000);

            // Play!
            setTimeout(function(){
              
              movesnake();
              animation = 0;

              
            },7000);
          }
        }
      },100);
    }
  }
  
  // Go out of hole
  if(snakepos[0][2] !== 0){
    snakepos.unshift([snakepos[0][0], snakepos[0][1], 0]);
    setTimeout(movesnake, 500);
  }
  else {
    movesnake();
  }
  
  //b.style.backgroundPosition = sky + "px -80vmin";
  skyintro = 1;
  
  //setTimeout("mask.remove()", 300);
  setTimeout("b.classList.remove('intro')", 2500);
}