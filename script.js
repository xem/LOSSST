// Globals

snakelength = 6;
snakepos = [[7,3],[7,2],[7,1],[7,0],[7,-1],[7,-2]];
snakeangles = [-90];
headangle = -90;
lastcell = null;
inbounds = 0;
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

for(i = 0; i < 15; i++){
  for(j = 0; j < 15; j++){
    puzzle.innerHTML += '<div id=cell' + i + '-' + j + ' class="cell '+ (i < 5 || i > 9 || j < 5 || j > 9 ? "grass " : +puzzles[currentpuzzle][(i-5)*5+(j-5)] ? "black" : "") + '" style="top:' + (i * 10) + 'vmin;left:' + (j * 10) + 'vmin"></div>';
  }
}



// Pointer events

scene.ontouchmove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(e.targetTouches[0]);
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(e);
}

mousemove = e => {
  var i, j, ok, x, y, headangle, cell, newcell;
  
  newcell = document.elementFromPoint(e.clientX, e.clientY);
  if(newcell.classList.contains("cell")){
    j = parseInt(newcell.style.left) / 10;
    i = parseInt(newcell.style.top) / 10;   
    
    ok = 1;
    for(p = 0; p < snakelength - 1; p++){
      if(i == snakepos[p][0] && j == snakepos[p][1]){
        ok = 0;
      }
    }
    
    // Advance to one of the fourth neighbours
    if(ok){
      ok = 0;
      if((i == snakepos[0][0] - 1 && j == snakepos[0][1])){
        headangle = 180; // top
        ok = grabbed = 1;
      }
      else if(i == snakepos[0][0] && j == snakepos[0][1] - 1){
        headangle = 90; // left
        ok = grabbed = 1;
      }
      else if(i == snakepos[0][0] + 1 && j == snakepos[0][1]){
        headangle = 0; // bottom
        ok = grabbed = 1;
      }
      else if(i == snakepos[0][0] && j == snakepos[0][1] + 1){
        headangle = -90; // right
        ok = grabbed = 1;
      }
      if(ok){
        snakepos.unshift([i, j]);
        snakeangles.unshift(headangle);
        movesnake();
      }
      
      // Try to advance multiple times at once if the pointer is too quick but the path inbetween is free, without going in diagonal
      else if(grabbed){
        
        //console.log(snakepos[0][0], snakepos[0][1], i, j);
        
        x = snakepos[0][1];
        y = snakepos[0][0];
        
        for(c = 0; c < 100; c++){
          if(x != j && y != i){

            x += (j - snakepos[0][1]) / 100;
            y += (i - snakepos[0][0]) / 100;
              
            ok = 1;
            for(p = 0; p < snakelength - 1; p++){
              if((~~x) == snakepos[p][1] && (~~y) == snakepos[p][0]){
                ok = 0;
              }
            }
              
            if(ok && (Math.abs((~~x) - snakepos[0][1]) + Math.abs((~~y) - snakepos[0][0])) == 1){
              ok = 0;
              if((~~x == snakepos[0][0] - 1 && ~~y == snakepos[0][1])){
                headangle = 180; // top
                ok = 1;
              }
              else if(~~x == snakepos[0][0] && ~~y == snakepos[0][1] - 1){
                headangle = 90; // left
                ok = 1;
              }
              else if(~~x == snakepos[0][0] + 1 && ~~y == snakepos[0][1]){
                headangle = 0; // bottom
                ok = 1;
              }
              else if(~~x == snakepos[0][0] && ~~y == snakepos[0][1] + 1){
                headangle = -90; // right
                ok = 1;
              }
              
              
              if(ok){
                headangle = -90;
                snakepos.unshift([~~y, ~~x]);
                snakeangles.unshift(headangle);
                movesnake();
              }
              else {
                break;
              }
            }
            
            else if((~~x) == snakepos[0][1] && (~~y) == snakepos[0][0]){
              // continue
            }
            else {
              break;
            }
          }
        }
      }
    }
    
    // Go back
    else if(i == snakepos[1][0] && j == snakepos[1][1] && snakepos.length > 6){
      
      cell = window["cell" + snakepos[0][0] + "-" + snakepos[0][1]];
      if(cell){
        cell.classList.remove("blue", "red");
      }
      
      snakepos.shift();
      snakeangles.shift();
      headangle = snakeangles[0];
      movesnake();
    }
  }
}


movesnake = () => {
  
  var i, cell;
  
  for(i = 0; i < 6; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][1] * 10 + 1) + "vmin) translateY(" + (snakepos[i][0] * 10 + 1) + "vmin) translateZ(.5vmin)";

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
  
  if(snakepos[6]){
    cell = window["cell" + snakepos[6][0] + "-" + snakepos[6][1]];
    if(cell){
      cell.classList.remove("blue", "red");
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