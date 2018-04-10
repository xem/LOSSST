// Initialization
// ==============

// SD / HD (mobile is SD by default)
mobile = 0;

if(
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
){
  mobile = 1;
}

if(mobile){
  b.className = "mobile";
}

init = function(){
  
// Room number
currentroom = +localStorage["currentroom"] || 0;
localStorage["currentroom"] = currentroom;

// Sky scrolling background position
sky = 0;
if(!mobile){
  setInterval(() => {
    sky += 5;
    b.style.backgroundPositionX = sky + "px";
  }, 500);
};

// Snake cubes (number, position, angle, inbounds (in a puzzle), ...)
snakelength = +localStorage["snakelength"] || 3;
localStorage["snakelength"] = snakelength;
snakepos = [];
inbounds = [];
snakeangles = [];
headangle = 0;

// Backtracking flag / counter
goingback = 0;
back = 0;

// Inputs flags
mousedown = 0;
keydown = 0;
animation = 0;
lock = 0;
cell = null;
scenewallvisible = 0;

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

// Debug
L = z => {
  console.log(z);
}

}
