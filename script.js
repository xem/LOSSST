// Globals
snakelength = 7;
snakepos = [];
snakeangles = [];
headangle = 0;
lastcell = null;
inbounds = 0;
mousedown = 0;
grabbed = 0;
nomusic = 1;

// Puzzles
puzzles = [
"00000\
00110\
01100\
01110\
00000",

"00000\
00110\
01111\
01000\
00000",

"00000\
00100\
01110\
01110\
00000",
];

currentpuzzle = 0;

// Draw scene
draw = e => {

  snakepos = [[3,5],[2,5],[1,5],[0,5],[-1,5],[-2,5],[-3,5]];
  snakeangles = [-90];
  headangle = -90;
  if(snake.innerHTML == ""){
    for(i = 0; i < snakelength; i++){
      snake.innerHTML +=
      `<div id="snakecubemove${i}" class="snakecubemove">
        <div class="snakeshadow"></div>
        <div id="snakecube${i}" class="cube snakecube">
          ${i?'':'<div class="tongue">Y</div>'}
          ${i?'<div class="u"></div>':'<div class="u eyes">👀</div>'}
          ${i?'<div class="f"></div>':'<div class="f mouth">‿</div>'}
          <div class="r"></div>
          <div class="l"></div>
          <div class="b"></div>
        </div>
      </div>`;
    }
  }

  puzzle.innerHTML = "";
  for(x = 0; x < 15; x++){
    for(y = 0; y < 11; y++){
      puzzle.innerHTML += '<div data-x=' + x + ' data-y=' + y + ' id=cell' + x + '-' + y + ' class="cell '+ (x < 5 || x > 9 || y < 3 || y > 7 ? "grass " : +puzzles[currentpuzzle][(x-5)*5+(y-3)] ? "black" : "") + '" style="left:' + (x * 10) + 'vmin;top:' + (y * 10) + 'vmin"></div>';
    }
  }
  
  movesnake();
}

onload = e => {
  draw();
}

// Pointer events
scene.ontouchstart = scene.ontouchmove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousedown = 1;
  mousemove(document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY), 1);
}

scene.onmousedown = e => {
  mousedown = 1;
  scene.onmousemove(e);
}

scene.onmousemove = e => {
  e.preventDefault();
  e.stopPropagation();
  mousemove(document.elementFromPoint(e.clientX, e.clientY), 1);
}

scene.ontouchend = scene.onmouseup = e => {
  grabbed = 0;
  mousedown = 0;
}

mousemove = (cell, pathfinding) => {
  if(!mousedown) return;
  
  var newx, newy, tilex, tiley, ok, headangle, newcell, c;

  if(cell && cell.classList && cell.classList.contains("cell")){
    tilex = +cell.dataset.x;
    tiley = +cell.dataset.y;
    ok = 1;
    
    // Check collisions
    for(p = 0; p < snakelength - 1; p++){
      if(tilex == snakepos[p][0] && tiley == snakepos[p][1]){
        ok = 0;
      }
    }

    // No collision
    if(ok){
      ok = 0;
      
      // Go in one of the four direct neighbors (N/S/W/E)
      if((tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1])){
        headangle = 90; // left
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] && tiley == snakepos[0][1] - 1){
        headangle = 180; // top
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1]){
        headangle = -90; // right
        ok = grabbed = 1;
      }
      else if(tilex == snakepos[0][0] && tiley == snakepos[0][1] + 1){
        headangle = 0; // bottom
        ok = grabbed = 1;
      }  
      if(ok){
        snakepos.unshift([tilex, tiley]);
        snakeangles.unshift(headangle);
        movesnake();
        return true;
      }
      
      // Try to go in diagonals in 2 steps
      if((tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1] - 1)){
        return (
          mousemove(window["cell" + (snakepos[0][0] - 1) + '-' + (snakepos[0][1])], 0)
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] - 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] - 1 && tiley == snakepos[0][1] + 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] - 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] + 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1] - 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] + 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] - 1)], 0)
        )
      }
      else if(tilex == snakepos[0][0] + 1 && tiley == snakepos[0][1] + 1){
        return (
          mousemove(window["cell" + (snakepos[0][0] + 1) + '-' + (snakepos[0][1])], 0) 
          || mousemove(window["cell" + (snakepos[0][0]) + '-' + (snakepos[0][1] + 1)], 0)
        )
      }
      
      // Try to advance multiple times at once if the pointer is too quick but the path in-between is free
      else if(grabbed && pathfinding){
        newx = snakepos[0][0];
        newy = snakepos[0][1];
        ok = 1;
        for(c = 0; c < 30; c++){
            newx = snakepos[0][0] + c * (tilex - snakepos[0][0]) / 30;
            newy = snakepos[0][1] + c * (tiley - snakepos[0][1]) / 30;
            mousemove(window["cell" + (~~newx) + "-" + (~~newy)], 0);
        }
      }
    }
    
    // Go back when hovering the cell containing the second cube of the snake
    else if(tilex == snakepos[1][0] && tiley == snakepos[1][1] && snakepos.length > snakelength){
      cell = window["cell" + snakepos[0][0] + "-" + snakepos[0][1]];
      if(cell){
        cell.classList.remove("blue", "red");
      }
      cell = window["cell" + snakepos[snakelength][0] + "-" + snakepos[snakelength][1]];
      if(cell && !cell.classList.contains("grass")){
        cell.classList.add(cell.classList.contains("black") ? "blue" : "red");
      }
      snakepos.shift();
      snakeangles.shift();
      headangle = snakeangles[0];
      movesnake();
      return true;
    }
    
    // Collision
    else {
      return false;
    }
  }
}

movesnake = () => {
  var i, cell;
  if(snakepos[snakelength]){
    cell = window["cell" + snakepos[snakelength][0] + "-" + snakepos[snakelength][1]];
    if(cell){
      cell.classList.remove("blue", "red");
    }
  }
  for(i = 0; i < snakelength; i++){
    
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(.5vmin)";
    window["snakecube" + i].style.transform = "rotateZ(" + (i ? 0 : snakeangles[0]) + "deg)";
    cell = window["cell" + snakepos[i][0] + "-" + snakepos[i][1]];
    if(i == 0){
      if(cell && !cell.classList.contains("grass")){
        inbounds = 1;
        cell.classList.add(cell.classList.contains("black") ? "blue" : "red");
      }
      else {
        inbounds = 0;
      }
    }
  }
  if(inbounds && document.querySelectorAll(".cell.red").length == 0){
    console.log("won");
    for(i of document.querySelectorAll(".cell.blue")){
      i.classList.remove("blue");
      i.classList.add("green");
    }
    if(currentpuzzle < puzzles.length - 1){
      setTimeout(
        e => {
          currentpuzzle++;
          nomusic = 1;
          draw();
          grabbed = 0;
        }, 500 
      );
    }
  }
  
  if(!nomusic){
    currentsong.forward();
  }
  nomusic = 1;
  setTimeout("nomusic=0",50);
}

onmousedown = onmousemove = onmouseup = /*oncontextmenu =*/ ontouchstart = ontouchmove = ontouchend = onclick = ondblclick = onscroll = function(e){
  e.preventDefault();
}




// Music
musicint = $ = _ = 0,

Phase = function () {
	var phase = 0;
	this.sample = function (hz) {
		phase += (hz / 48e3) * Math.PI*2;
		phase %= Math.PI*2;
		return phase;
	};
},

Note = function (value, x){
	var phase = new Phase();
	var vibrato_phase = new Phase();
	var gain = 0.1;
	this.sample = function (){
		if (!value) return 0;
		var v = value + 0.4 * Math.sin(vibrato_phase.sample(3));
		var hz = 440*Math.pow(2, (v-57)/12);
		gain *= 0.9998;
		var phi = phase.sample(hz);
		return Math.pow(Math.sin(phi), x) * gain;
	};
},

Song = function (song){
	$ = -1;
	var mk_audio = function (data) {
		var l = data.length;
		var l2=l*2;
		var b32 = function (v) {
			var s = 0;
			var b = "";
			for (var i=0; i<4; i++,s+=8) b+=String.fromCharCode((v>>s)&255);
			return b;
		};
		var b16 = function (v) {
			var b = b32(v);
			return b[0]+b[1];
		};
		var b = "RIFF"+b32(l2+36)+"WAVEfmt "+b32(16)+b16(1)+b16(2)+b32(48e3)+b32(48e3*4)+b16(4)+b16(16)+"data"+b32(l2);
		for (var i in data) {
			var value = Math.min(1.0, Math.max(-1.0, data[i]));
			b+=b16(data[i]*32767);
		}
		return new Audio("data:audio/wav;base64,"+btoa(b));
	};
	var play = function () {
		var n = song.length/2;
		_ = $;
		while (_ < 0) _ += n;
		_ %= n;
		var get_note = function (channel) {
			return song[_*2+channel].charCodeAt(0) - 48;
		};
		var note1 = new Note(get_note(0), 1);
		var note2 = new Note(get_note(1), 1);
		var samples = [];
		for (var i = 0; i < 48e3; i++) {
			var s1 = note1.sample();
			var s2 = note2.sample();
			var left = s1 + s2 * 0.5;
			var right = s1 * 0.5 + s2;
			samples.push(left);
			samples.push(right);
		}
		mk_audio(samples).play();
	};
	this.forward = function () {
		$++;
		play();
	};
	this.back = function () {
		$--;
		play();
	};
},

mkaudio = function(fn){
	var data = [];
	for (var i = 0;;i++) {
		var smp = fn(i);
		if (smp===null) break;
		data.push(smp);
	}
	var l = data.length;
	var l2=l*2;
	var b32 = function (v) {
		var s = 0;
		var b = "";
		for (var i=0; i<4; i++,s+=8) b+=String.fromCharCode((v>>s)&255);
		return b;
	};
	var b16 = function (v) {
		var b = b32(v);
		return b[0]+b[1];
	};
  
	var b = "RIFF"+b32(l2+36)+"WAVEfmt "+b32(16)+b16(1)+b16(1)+b32(48e3)+b32(48e3*2)+b16(2)+b16(16)+"data"+b32(l2);
	for (var i in data) b+=b16(data[i]*10e3);
	return new Audio("data:audio/wav;base64,"+btoa(b));
},

t = function(i,n){
	return (n-i)/n;
},

SNDeat = function(i){
	var n = 1e4;
	if (i>n) return null;
	return ((Math.pow(i,1.055)&128)?1:-1)*Math.pow(t(i,n),2)/2;
},

SNDappear = function(i){
	var n=25000;
	if (i > n) return null;
	return ((((i^(i>>3))^(i*i*7.3)^(i<<4))&65535)/65536)*t(i,n)/2;
},

SNDstuck = function(i){
	var n=5e3;
	if (i > n) return null;
	return ((Math.pow(i+Math.sin(i*0.01)*1000,0.8)&200)?0.5:-0.5)*Math.pow(t(i,n),1)/2;
},

SNDwin = function(i){
	var n=1.6e4;
	var c=n/7;
	if (i > n) return null;
	var q=Math.pow(t(i,n),2.1)/2;
	return (i<c ? ((i+Math.sin(-i/900)*10)&16) : i&13) ?q:-q;
},

SNDopendoor = function(i){
	var n=9e4;
	if (i > n) return null;
	return ((Math.pow(i+Math.sin(i*0.01)*1000,0.8)&200)?0.5:-0.5)*Math.pow(t(i,n),1)/4;
},

song1 = new Song("nbo0risiubv0uisirbs0ui0i0b0c0f0gniojrlsjuivjymvjubv0ui0i0j0m0n0rsgu0vnxnzgx0vnunsg0n0o0n0g0s0o0nrisjulvgufsjufscrbo0ni0j0b0i0j0il`n0ogqgs`u0vgxgz`0gxl0nsouqvsxuuev0u`0`0eq0slulqcs0qcs0qbs0q`s0njo0reseujv0xeveuj0v0e0q0j0i0g0e0cu0scq00bv0ufr0sgn0vbr0xiz0zjr0sgu0vbx0zgx0vbubsg{0zb{`z^{0zi{fzgv0xiu0vjs0ulr0sbn0oll0nbl0jfi0g00bxc0`zb0^{`0]z^0[z]0Zz[0]z^0`zb0]uf0bxi0f{l0izr0ozn0ixr0nrulrnbo0risiufs0r`o0nb0czf0gzi0gzf0cub0i0j0mvn0m0j0irbscrbs`rbs`sbrbo`q0sgugv`x0zg{gz`s0x`s0v`x0vcx0ues0q`l00eu00`x00ev00`u00eq00`o`"),

song2 = new Song("p0r0sdk0rco0pdk0p0r0sdw0rcs0pdk0p0r0sdk0rck0pdk0p0r0sdw0rcs0pd0f0g0iwg0bwgx0wgurrnspur0bufwgubs0pkrcsdk0rco0pkk0p0r0sdk0rco0pk0l0k0iwg0b0k0g0n0kzs0nxi0f|l0izr0p0n0lwk0dwg0k0p0k|s0pur0kuo0k0i0l0k0isd0krj0kpd0k0p0rsd0krl0opd0f0g0iskw0riw0pgw0nfw0u`s0rbs0pd0k"),

currentsong = song1;
