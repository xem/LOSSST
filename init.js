sd = 0;
if(sd){
  b.className = "sd";
}
mobile = 0;
snakelength = 3;
snakepos = [];
snakeangles = [];
wrap = [];
headangle = 0;
lastcell = null;
mousedown = 0;
keydown = 0;
grabbed = 0;
nextlevelwait = 0;
won = 0;
goingback = 0;
back = 0;
currentroom = 0;
currentpuzzle = 0;
lock = 0;
animation = 0;
z = 24;
move_b = 
move_f = 
move_l = 
move_r = 0;
cell = null;

localStorage["totalpuzzles"] = localStorage["totalpuzzles"] || 0;
totalpuzzles = 0;

snakepos = [[5,5,-1],[5,5,-2],[5,5,-3]];
inbounds = [0];
puzzling = 0;
snakeangles = [0,0,0,0,0,0,0];
headangle = 0;
zoom = 0;

L = z => {
  console.log(z);
}

if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)){
  mobile = 1;
  b.classList.add("mobile");
}


details.onclick = details.ontouchstart = e => {
  sd = 1 - sd;
  b.classList.toggle("sd");
  details.innerHTML = sd ? "HD" : "SD";
}

reset.onclick = reset.ontouchstart = e => {
  localStorage.clear();
  location = location;
}

onload = e => {
  render();
}

bp = 0;

if(!mobile){
  
  setInterval(() => {
    bp += 10;
    b.style.backgroundPositionX = bp + "px";
  },1000);

};
