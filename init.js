sd = 0;
mobile = 0;
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


if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
  mobile = 1;
  b.classList.add("mobile");
}

details.onclick = details.ontouchstart = e => {
  sd = 1 - sd;
  b.classList.toggle("sd");
  details.innerHTML = sd ? "HD" : "SD";
}

onload = e => {
  render();
}