// Globals

snakelength = 6;
snakepos = [[5,2],[5,1],[5,0],[5,-1],[5,-2],[5,-3]];
snakeangles = [-90];
headangle = -90;
lastcell = null;

// DOM

for(i=0;i<6;i++){
  snake.innerHTML +=
  `<div id="snakecubemove${i}" class="snakecubemove">
    <div id="cubesnake${i}" class="cube snakecube">
      ${i?'':'<div class="tongue">Y</div>'}
      ${i?'<div class="u"></div>':'<div class="u eyes">👀</div>'}
      ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
      <div class="r"></div>
      <div class="l"></div>
      <div class="b"></div>
    </div>
  </div>`;
}

for(i=0;i<11;i++){
  for(j=0;j<11;j++){
    puzzle.innerHTML += '<div id=cell' + i + '-' + j + ' class="cell '+ (i<3||i>7||j<3||j>7 ? "blank" : "") + '" style="top:' + (i * 10) + 'vh;left:' + (j * 10) + 'vh"></div>';
  }
}

// Pointer events

scene.ontouchmove = e => {
  mousemove(e.targetTouches[0]);
}

scene.onmousemove = e => {
  mousemove(e);
}

mousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  newcell = document.elementFromPoint(e.clientX, e.clientY);
  if(newcell.className.indexOf("cell") > -1){
    j = parseInt(newcell.style.left) / 10;
    i = parseInt(newcell.style.top) / 10;   
    ok = 1;
    for(p = 0; p < snakelength - 1; p++){
      if(i == snakepos[p][0] && j == snakepos[p][1]){
        ok = 0;
      }
    }
    
    // Advance
    if(ok){
      if((i == snakepos[0][0] - 1 && j == snakepos[0][1])){
        headangle = 180; // top
      }
      else if(i == snakepos[0][0] && j == snakepos[0][1] - 1){
        headangle = 90; // left
      }
      else if(i == snakepos[0][0] + 1 && j == snakepos[0][1]){
        headangle = 0; // bottom
      }
      else if(i == snakepos[0][0] && j == snakepos[0][1] + 1){
        headangle = -90; // right
      }
      else return;
      snakepos.unshift([i, j]);
      snakeangles.unshift(headangle);
      movesnake();
    }
    
    // Go back
    else if(i == snakepos[1][0] && j == snakepos[1][1] && snakepos.length > 6){
      
      cell = window["cell" + snakepos[0][0] + "-" + snakepos[0][1]];
      if(cell){
        cell.style.background = "";
      }
      
      snakepos.shift();
      snakeangles.shift();
      headangle = snakeangles[0];
      movesnake();
    }
  }
}

movesnake = () => {
  for(i = 0; i < 6; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][1] * 10 + 1) + "vh) translateY(" + (snakepos[i][0] * 10 + 1) + "vh) translateZ(.5vh) rotateZ(" + (i ? 0 : headangle) + "deg)";
    
    cell = window["cell" + snakepos[i][0] + "-" + snakepos[i][1]];
    if(cell && cell.className.indexOf("blank") == -1){
      cell.style.background = "#56f";
    }
  }
  
  if(snakepos[6]){
    cell = window["cell" + snakepos[6][0] + "-" + snakepos[6][1]];
    if(cell){
      cell.style.background = "";
    }
  }
}

movesnake();

onmousedown = onmousemove = onmouseup = oncontextmenu = ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}