render = () => {

  scene.innerHTML =
`<div id=scenedepth></div>
<div id=puzzles></div>
<div id=grass></div>
<div id=stones></div>
<div id=trees></div>
<div id=snake></div>`;

  for(i = 0; i < snakelength; i++){
    snake.innerHTML +=
`<div id="snakecubemove${i}" class="snakecubemove">
  <div class="snakeshadow"></div>
  <div id="snakegrass${i}" class="snakegrass"></div>
  ${i?'':'<div id="control_f" class="snakecontrol front"></div>'}
  ${i?'':'<div id="control_b" class="snakecontrol back"></div>'}
  ${i?'':'<div id="control_l" class="snakecontrol left"></div>'}
  ${i?'':'<div id="control_r" class="snakecontrol right"></div>'}
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
    snake.innerHTML += `<div id="snaketrail${i}" class="snaketrail"></div>`;
  }
  
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    puzzle.index = i;
    puzzles.innerHTML +=
`<div id="puzzle${currentroom}-${i}" class="cube puzzlecube" style="width:${puzzle.size*10}vmin;height:${puzzle.size*10}vmin;left:${puzzle.x*10}vmin;top:${puzzle.y*10}vmin">
  <!--div class="u"></div-->
  <div id="puzzleground${i}" class="d"></div>
  <!--div class="f"></div>
  <div class="r"></div>
  <div class="l"></div>
  <div class="b"></div-->
  <div class="puzzlegrass"></div>
</div>`;

    for(j in puzzle.ground){
      window["puzzleground" + i].innerHTML +=
      `<div id="cell${currentroom}-${i}-${j}" class="cell ${+(puzzle.ground[j])?"black":"white"}" style="left:${((+j)%puzzle.size) * 10}vmin;top:${~~((+j)/puzzle.size) * 10}vmin"></div>`;
    }

  }
  
  for(j in levels[currentroom].trees){
    tree = levels[currentroom].trees[j];
    trees.innerHTML +=
    `<div id="tree${j}" class="tree" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"><div id="treecontent${j}" class="treecontent"></div></div>;
    <div class="treeshadow" style="margin-left:${tree[0] * 10}vmin;margin-bottom:-${tree[1] * 10}vmin"></div>`;
  }
  
  for(j in levels[currentroom].stones){
    stone = levels[currentroom].stones[j];
    stones.innerHTML +=
    `<div class="stone" style="margin-left:${stone[0] * 10}vmin;margin-bottom:-${stone[1] * 10}vmin"></div>;`;
  }
  
  scene.style.width = levels[currentroom].width * 10 + 2 + "vmin";
  scene.style.height = levels[currentroom].height * 10 + 2 + "vmin";

  movesnake();
  
  snakepos[0][2] = 0;
  
  setTimeout(movesnake, 500);
}