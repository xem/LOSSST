// Initialization

// Room number
currentroom = +localStorage["currentroom"] || 0;
localStorage["currentroom"] = currentroom;

// SD / HD (mobile is SD by default)
sd = 0;

if(
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
){
  sd = 1;
}

if(sd){
  b.className = "sd";
}

// Sky scrolling background position
sky = 0;
if(!sd){
  setInterval(() => {
    sky += 10;
    b.style.backgroundPositionX = sky + "px";
  }, 1000);
};

// Cubes in the snake (number, position, angle, inbounds (in a puzzle), ...)
snakelength = +localStorage["snakelength"] || 3;
localStorage["snakelength"] = snakelength;

// Cubes positions and angles
snakepos = [];
inbounds = [];
snakeangles = [];

for(i = 0; i < snakelength; i++){
  snakepos.push([5,5,-i - 1]);
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

// Load totals from localStorage
totalpuzzles = +localStorage["totalpuzzles"] || 0;
localStorage["totalpuzzles"] = totalpuzzles;

// Debug
L = z => {
  console.log(z);
}

// Start
onload = e => {
  //render();
}
