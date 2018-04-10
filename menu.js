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