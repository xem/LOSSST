button_continue.onclick = function(){
  init();
  try{
    music.play()
  }
  catch(e){};
  menu.remove();
  start();
  render();
  lock = 1;
  setTimeout('lock = 0', 1500);
}

button_newgame.onclick = function(){
  localStorage.clear();
  currentroom = localStorage["currentroom"] = 0;
  localStorage.snakelength = 3;
  localStorage.totalpuzzles = 0;
  init();
  menu.remove();
  start();
  render();
  lock = 1;
  setTimeout('lock = 0', 1500);
}

start_room = function(currentroom, snakelength, totalpuzzles){
  localStorage.clear();
  setTimeout(function(){
    window.currentroom = localStorage.currentroom = currentroom;
    window.snakelength = localStorage.snakelength = snakelength;
    window.totalpuzzles = localStorage.totalpuzzles = totalpuzzles;
    init();
    menu.remove();
    start();
    render();
    lock = 1;
    setTimeout("lock = 0", 1500);
  },200);
}


button_choose.onclick = function(){
  menu.innerHTML = `

<div class="menuinner_levels">

<a id=quit href=".">x</a>

<button onclick="start_room(0,3,0)">1-1</button>
<button onclick="start_room(1, 5, 3)">1-2</button>
<button onclick="start_room(2, 6, 6)">1-3</button>
<button onclick="start_room(3, 7, 10)">1-4</button>
<button onclick="start_room(4, 8, 17)">1-5</button>
<button onclick="start_room(5, 9, 21)">1-6</button>
<button onclick="start_room(6, 10,25)">1-7</button>
<button onclick="start_room(7, 11,32)">1-8</button>
<button onclick="start_room(8, 13,37)">1-9</button>
<button onclick="start_room(9, 15,43)">1-10</button>
<button onclick="start_room(10,16,49)">1-11</button>
<button onclick="start_room(11,17,55)">1-12</button>
<button onclick="start_room(12,20,60)">BOSS</button>

<br>

<button onclick="start_room(13,3,60)">2-1</button>
<button onclick="start_room(14,5,63)">2-2</button>
<button onclick="start_room(15,6,66)">2-3</button>
<button onclick="start_room(16,7,69)">2-4</button>
<button onclick="start_room(17,8,73)">2-5</button>
<button onclick="start_room(18,9,77)">2-6</button>
<button onclick="start_room(19,10,83)">2-7</button>
<button onclick="start_room(20,11,87)">2-8</button>

<br>

<button onclick="start_room(21,3,90)">3-1</button>
<button onclick="start_room(22,4,90)">3-2</button>
<button onclick="start_room(23,5,90)">3-3</button>
<button onclick="start_room(24,6,90)">3-4</button>
<button onclick="start_room(25,11,90)">3-5</button>

</div>
`;
}