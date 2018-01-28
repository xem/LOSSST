snakelength = 7;
snakepos = [];
snakeangles = [];
wrap = [];
headangle = 0;
lastcell = null;
mousedown = 0;
grabbed = 0;
nextlevelwait = 0;
won = 0;
goingback = 0;
currentroom = 0;
currentpuzzle = 0;
lock = 0;
z = 24;
move_b = 
move_f = 
move_l = 
move_r = 0;
cell = null;

snakepos = [[10,10,-1],[10,10,-1],[10,10,-1],[10,10,-1],[10,10,-1],[10,10,-1],[10,10,-1]];
inbounds = [0];
puzzling = 0;
snakeangles = [0,0,0,0,0,0,0];
headangle = 0;
zoom = 0;

L = z => {
  console.log(z);
}

onload = e => {
  render();
}