// Globals
snakelength = 6;
snakepos = [[3,5],[2,5],[1,5],[0,5],[-1,5],[-2,5]];
snakeangles = [-90];
headangle = -90;
lastcell = null;
inbounds = 0;
mousedown = 0;
grabbed = 0;

// Puzzles
puzzles = ["0000000110011000110000000"];
currentpuzzle = 0;

// DOM
for(i=0;i<6;i++){
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

for(x = 0; x < 15; x++){
  for(y = 0; y < 11; y++){
    puzzle.innerHTML += '<div data-x=' + x + ' data-y=' + y + ' id=cell' + x + '-' + y + ' class="cell '+ (x < 5 || x > 9 || y < 3 || y > 7 ? "grass " : +puzzles[currentpuzzle][(x-5)*5+(y-3)] ? "black" : "") + '" style="left:' + (x * 10) + 'vmin;top:' + (y * 10) + 'vmin"></div>';
  }
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
  scene.onmousemove();
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
    else if(tilex == snakepos[1][0] && tiley == snakepos[1][1] && snakepos.length > 6){
      cell = window["cell" + snakepos[0][0] + "-" + snakepos[0][1]];
      if(cell){
        cell.classList.remove("blue", "red");
      }
      cell = window["cell" + snakepos[6][0] + "-" + snakepos[6][1]];
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
  if(snakepos[7]){
    cell = window["cell" + snakepos[6][0] + "-" + snakepos[6][1]];
    if(cell){
      cell.classList.remove("blue", "red");
    }
  }
  for(i = 0; i < 6; i++){
    
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(.5vmin)";
    window["snakecube" + i].style.transform = "rotateZ(" + (i ? 0 : snakeangles[0]) + "deg)";
    cell = window["cell" + snakepos[i][0] + "-" + snakepos[i][1]];
    if(i == 0){
      if(cell && !cell.classList.contains("grass")){
        inbounds = 1;
        cell.classList.add(cell.classList.contains("black") ? "blue" : "red");
      }
      else {
        inbounds = 0;
      }
    }
  }
  if(inbounds && document.querySelectorAll(".cell.red").length == 0){
    console.log("won");
    for(i of document.querySelectorAll(".cell.blue")){
      i.classList.remove("blue");
      i.classList.add("green");
    }
  }
}
movesnake();

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}