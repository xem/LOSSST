/* Render */
render = e => {
  
  // Reset
  a.width = a.width;
  
  puzzle = [[1,0,0,0,0],[1,1,0,0,0],[0,1,1,0,0],[0,0,1,1,0],[0,0,0,1,1]];
  size = 5;
  
  for(i=0;i<size;i++){
    for(j=0;j<size;j++){
      c.fillStyle = puzzle[i][j]?"#000":"#fff";
      c.fillRect(canvas_width/2 - (i - size/2 + 1) * 35, canvas_height/2 - (j - size/2 + 1) * 35, 30, 30); 
    }
  }
  
  // Draw square
  c.rect(x,y,30,30)
  c.fillStyle = "orange";
  c.fill();
  
  // Grab
  if(!grab && pointer_down && c.isPointInPath(down_x, down_y)){
    grab = true;
    grab_x = down_x - x;
    grab_y = down_y - y;
    log("grab");
  }
  
  // Let go
  if(grab && !pointer_down){
    grab = false;
    log("let go");
  }
  
  // Follow mouse / finger
  if(grab){
    x = move_x - grab_x;
    y = move_y - grab_y;
  }
}