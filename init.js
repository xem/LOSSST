// Initialization
// ==============

// Room number
currentroom = +localStorage["currentroom"] || 0;
localStorage["currentroom"] = currentroom;

// SD / HD (mobile is SD by default)
mobile = 0;

if(
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/Mac OS/i)
){
  mobile = 1;
}

if(mobile){
  b.className = "mobile";
}

// Sky scrolling background position
sky = 0;
if(!mobile){
  setInterval(() => {
    sky += 5;
    b.style.backgroundPositionX = sky + "px";
  }, 500);
};

// Cubes in the snake (number, position, angle, inbounds (in a puzzle), ...)
snakelength = +localStorage["snakelength"] || 3;
localStorage["snakelength"] = snakelength;

// Cubes positions and angles
snakepos = [];
inbounds = [];
snakeangles = [];

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

headangle = 0;

// Backtracking flag / counter
goingback = 0;
back = 0;

// Inputs flags
mousedown = 0;
keydown = 0;
lock = 0;
cell = null;

// Cinematic
animation = 0;

// Puzzle
won = 0;
currentpuzzle = 0;
puzzling = 0;
latestpuzzle = null;
movessincelatestpuzzle = 0;
onacube = 0;

// Load totals from localStorage
totalpuzzles = +localStorage["totalpuzzles"] || 0;
localStorage["totalpuzzles"] = totalpuzzles;


// When we reload the game, place a hole at [bridge0.x + 3, bridge0.y + .1] to make the snake go out of the ground 
if(currentroom != 0){
  levels[currentroom].hole = [levels[currentroom].bridges[0].x + 3, levels[currentroom].bridges[0].y + .1];
}

scene.style.transform = `rotateX(0deg) translateX(-${levels[currentroom].hole[0] * 10}vmin) translateY(-${levels[currentroom].hole[1] * 10}vmin) translateZ(10vmin)`;

// Debug
L = z => {
  console.log(z);
}
