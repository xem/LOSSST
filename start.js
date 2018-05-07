start = function(){
  
  // Initial position
  for(i = 0; i < snakelength; i++){
    if(currentroom == 0){
      snakepos.push([7, 5, -i - 1]);
    }
    else {
      snakepos.push([levels[currentroom].bridges[0].x + 3, levels[currentroom].bridges[0].y, -i - 1]);
    }
    
    inbounds.push(0);
    snakeangles.push(0);
  }

  // When we reload the game, place a hole at [bridge0.x + 3, bridge0.y + .1] to make the snake go out of the ground 
  if(currentroom != 0){
    levels[currentroom].hole = [levels[currentroom].bridges[0].x + 3, levels[currentroom].bridges[0].y + .1];
  }

  scene.style.transform = `rotateX(0deg) translateX(-${levels[currentroom].hole[0] * 10}vmin) translateY(-${levels[currentroom].hole[1] * 10}vmin) translateZ(10vmin)`;
  
  setTimeout("if(window.hint0)hint0.classList.add('started')", 2000);
}