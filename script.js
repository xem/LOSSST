// Globals
snakelength = 7;
snakepos = [];
snakeangles = [];
headangle = 0;
lastcell = null;
inbounds = [];
mousedown = 0;
grabbed = 0;
nextlevelwait = 0;

// Puzzles
puzzles = [

[
5, // size
1, // wrap
1, // ground
0, // wall
"01010\
01110\
00000\
00010\
00010",
],

[
6, // size
1, // wrap
1, // ground
0, // wall
"010000\
110000\
000000\
000000\
110001\
010000",
],

[
5, // size
0, // wrap
1, // ground
0, // wall
"00000\
00110\
01100\
01110\
00000",
],

[
6, // size
0, // wrap
1, // ground
0, // wall
"000000\
000000\
001100\
011110\
010000\
000000"
],

[
5, // size
0, // wrap
1, // ground
0, // wall
"00000\
00100\
01110\
01110\
00000"
],

[
5, // size
0, // wrap
1, // ground
0, // wall
"00000\
00000\
00000\
00000\
00000"
]

];


currentpuzzle = 0;

// Draw scene
draw = e => {

  // snake
  snakepos = [[3,5],[2,5],[1,5],[0,5],[-1,5],[-2,5],[-3,5]];
  inbounds = [0,0,0,0,0,0,0];
  snakeangles = [-90];
  headangle = -90;
  if(snake.innerHTML == ""){
    for(i = 0; i < snakelength; i++){
      snake.innerHTML +=
      `<div id="snakecubemove${i}" class="snakecubemove">
        <div class="snakeshadow"></div>
        <div id="snakecube${i}" class="cube snakecube">
          ${i?'':'<div class="tongue">Y</div>'}
          ${i?'<div class="u"></div>':'<div class="u eyes">👀</div>'}
          ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
          <div class="r"></div>
          <div class="l"></div>
          <div class="b"></div>
        </div>
      </div>`;
    }
  }
  
  // Wraps
  wraps.innerHTML = "";
  if(puzzles[currentpuzzle][1]){
    wraps.innerHTML += "<div class='wrap back' style='width:"+(puzzles[currentpuzzle][0] * 10) + "vmin;height:20vmin;transform:translateX(50vmin)translateY("+((5.5 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5) - puzzles[currentpuzzle][0] / 2) * 10)+"vmin) translateZ(10vmin)rotateX(-90deg)'></div>";
    
    wraps.innerHTML += "<div class='wrap right' style='width:"+(puzzles[currentpuzzle][0] * 10) + "vmin;height:20vmin;transform:translateX("+((5 + puzzles[currentpuzzle][0] / 2) * 10)+"vmin)translateY("+((5.5 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5)) * 10)+"vmin) translateZ(10vmin)rotateX(-90deg)rotateY(-90deg)'></div>";
    
    wraps.innerHTML += "<div class='wrap left' style='width:"+(puzzles[currentpuzzle][0] * 10) + "vmin;height:20vmin;transform:translateX("+((5 - puzzles[currentpuzzle][0] / 2) * 10)+"vmin)translateY("+((5.5 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5)) * 10)+"vmin) translateZ(10vmin)rotateX(-90deg)rotateY(90deg)'></div>";
    
    wraps.innerHTML += "<div class='wrap front' style='width:"+(puzzles[currentpuzzle][0] * 10) + "vmin;height:20vmin;transform:translateX(50vmin)translateY("+((5.5 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5) + puzzles[currentpuzzle][0] / 2) * 10)+"vmin) translateZ(10vmin)rotateX(-90deg)rotateY(180deg)'></div>";
  }

  // Puzzle
  puzzle.innerHTML = "";
  scene.className = puzzles[currentpuzzle][0] % 2 ? "odd" : "even";
  for(y = 0; y < 11; y++){
    for(x = 0; x < 15; x++){
      puzzle.innerHTML += 
      
      '<div data-x=' + x +
      ' data-y=' + y + 
      ' id=cell' + x + '-' + y + 
      ' class="cell '+ 
        (x < (7.5 - puzzles[currentpuzzle][0] / 2)  || x >= (7.5 + puzzles[currentpuzzle][0] / 2) || y < (5.5 - puzzles[currentpuzzle][0] / 2) || y >= (5.5 + puzzles[currentpuzzle][0] / 2)
        ? "grass " :
        +puzzles[currentpuzzle][4][~~(y-(5.5 - puzzles[currentpuzzle][0] / 2))*puzzles[currentpuzzle][0]+~~(x-(7.5 - puzzles[currentpuzzle][0] / 2))] ? "black" : "") + 
      '" style="left:' + (x * 10) + 'vmin;top:' + (y * 10) + 'vmin"></div>';
    }
  }
  
  movesnake();
}

onload = e => {
  draw();
}

// Pointer events
scene.ontouchstart = scene.ontouchmove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousedown = 1;
  mousemove(document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = e => {
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(document.elementFromPoint(e.clientX, e.clientY), 1);
}

scene.ontouchend = scene.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
}

mousemove = (cell, pathfinding) => {
  if(!mousedown) return;
  
  var newx, newy, tilex, tiley, ok, headangle, newcell, c;

  if(cell && cell.classList && cell.classList.contains("cell")){
    tilex = +cell.dataset.x;
    tiley = +cell.dataset.y;
    ok = 1;
    
    // Check collisions
    for(p = 0; p < snakelength - 1; p++){
      if(tilex == snakepos[p][0] && tiley == snakepos[p][1]){
        ok = 0;
      }
    }

    // No collision
    if(ok){
      ok = 0;
      
      // Go in one of the four direct neighbors (N/S/W/E)
      
      // move like there is no wrap
      if((tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1])){
        headangle = 90; // left
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] && tiley == snakepos[0][1] - 1){
        headangle = 180; // top
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1]){
        headangle = -90; // right
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] && tiley == snakepos[0][1] + 1){
        headangle = 0; // bottom
        ok = grabbed = 1;
      }

      // wrap
      if(puzzles[currentpuzzle][1] && inbounds[0]){
      
        console.log("check wrap");
        if((tilex == (7.5 - puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5)) && tiley == snakepos[0][1])){
          headangle = 90; // left
          ok = grabbed = 1;
          tilex = 7.5 + puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5);
          grabbed = 0;
          mousedown = 0;
        }
        else if(tilex == snakepos[0][0] && tiley == (5.5 - puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5))){
          headangle = 180; // top
          ok = grabbed = 1;
          tiley = 5.5 + puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5);;
          grabbed = 0;
          mousedown = 0;
        }
        else if(tilex == (7.5 + 1 + puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5)) && tiley == snakepos[0][1]){
          headangle = -90; // right
          ok = grabbed = 1;
          tilex = 7.5 - puzzles[currentpuzzle][0]/2 + 1 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5);
          grabbed = 0;
          mousedown = 0;
        }
        else if(tilex == snakepos[0][0] && tiley == (5.5 + 1 + puzzles[currentpuzzle][0]/2 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5))){
          headangle = 0; // bottom
          ok = grabbed = 1;
          tiley = 5.5 - puzzles[currentpuzzle][0]/2 + 1 + ((puzzles[currentpuzzle][0] % 2) ? -1 : -.5);;
          grabbed = 0;
          mousedown = 0;
        }
        
        // Check collisions after wrap
        for(p = 0; p < snakelength - 1; p++){
          if(tilex == snakepos[p][0] && tiley == snakepos[p][1]){
            ok = 0;
          }
        }
      }
      
      if(ok){
        snakepos.unshift([tilex, tiley]);
        snakeangles.unshift(headangle);
        movesnake();
        return true;
      }
      
      // Try to go in diagonals in 2 steps
      if((tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1] - 1)){
        return (
          mousemove(window["cell" + (snakepos[0][0] - 1) + '-' + (snakepos[0][1])], 0)
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] - 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1] + 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] - 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] + 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1] - 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] + 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] - 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1] + 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] + 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] + 1)], 0)
        )
      }
      
      // Try to advance multiple times at once if the pointer is too quick but the path in-between is free
      else if(grabbed && pathfinding){
        newx = snakepos[0][0];
        newy = snakepos[0][1];
        ok = 1;
        for(c = 0; c < 30; c++){
            newx = snakepos[0][0] + c * (tilex - snakepos[0][0]) / 30;
            newy = snakepos[0][1] + c * (tiley - snakepos[0][1]) / 30;
            mousemove(window["cell" + (~~newx) + "-" + (~~newy)], 0);
        }
      }
    }
    
    // Go back when hovering the cell containing the second cube of the snake
    else if(tilex == snakepos[1][0] && tiley == snakepos[1][1] && snakepos.length > snakelength){
      cell = window["cell" + snakepos[0][0] + "-" + snakepos[0][1]];
      if(cell){
        cell.classList.remove("blue", "red");
      }
      cell = window["cell" + snakepos[snakelength][0] + "-" + snakepos[snakelength][1]];
      if(cell && !cell.classList.contains("grass")){
        cell.classList.add(cell.classList.contains("black") ? "blue" : "red");
      }
      snakepos.shift();
      snakeangles.shift();
      headangle = snakeangles[0];
      movesnake();
      return true;
    }
    
    // Collision
    else {
      return false;
    }
  }
}

movesnake = () => {
  var i, cell;
  
  // Remove cell color after the last cube of the snake last cube
  if(snakepos[snakelength]){
    cell = window["cell" + snakepos[snakelength][0] + "-" + snakepos[snakelength][1]];
    if(cell){
      cell.classList.remove("blue", "red");
    }
  }
  
  // Check if cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    inbounds[i] = 1;
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(.5vmin)";
    window["snakecube" + i].style.transform = "rotateZ(" + (i ? 0 : snakeangles[0]) + "deg)";
    cell = window["cell" + snakepos[i][0] + "-" + snakepos[i][1]];
    if(cell){
      if(cell.classList.contains("grass")){
        inbounds[i] = 0;
      }
      else{
        cell.classList.add(cell.classList.contains("black") ? "blue" : "red");
      }
    }
  }
  
  // Won
  if(inbounds.indexOf(0) == -1 && document.querySelectorAll(".cell.red").length == 0){
    if(!nextlevelwait){
      console.log("won");
      for(i of document.querySelectorAll(".cell.blue")){
        i.classList.remove("blue");
        i.classList.add("green");
      }
      if(currentpuzzle < puzzles.length - 1){
          nextlevelwait = 1;
          setTimeout(
            e => {
              currentpuzzle++;
              inbounds = [0,0,0,0,0,0,0];
              nextlevelwait = 0;
              draw();
              grabbed = 0;
              mousedown = 0;
            },
            500 
          );
      }
    }
  }
}

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}
