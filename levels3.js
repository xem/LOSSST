// World 3

// Room 3-1 (21)
// Sizes 3,4
// Puzzles 1-3
levels.push(
  {
  
    width: 50,
    height: 11,
    hole: false,


    puzzles: [

      {
        x: 20,
        y: 2,
        size: 7,
        wrap: 1,
        wall: "",
        ground: "0000000"
               +"0000000"
               +"0000000"
               +"1100011"
               +"0000000"
               +"0000000"
               +"0000000",
      },
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "0001"+
                "1001"+
                "0000"+
                "0001"
      },
      
      {
        x: 40,
        y: 3,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1001"+
                "0000"+
                "0000"+
                "1001"
      },
      
      
    ],

    trees: [
      [10,3],
    ],
    
    apples: [
      {
        x: 9,
        y: 7,
        eaten: 0
      },
    ],
    
    cubes: [
    ],
    
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 49,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 63,
        to: 22,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  
  }
);


// Room 3-2 (22)
// Size 5
levels.push(
  {
  
    width: 10,
    height: 50,
    hole: false,
    
    puzzles: [

      {
        x: 4,
        y: 10,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "110"+
                "101"+
                "010",
      },
      
      {
        x: 4,
        y: 20,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "100"+
                "111"+
                "100",
      },
      
      {
        x: 4,
        y: 40,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "010"+
                "111"+
                "010",
      },
      
      {
        x: 4,
        y: 30,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "110"+
                "101"+
                "100",
      },

    ],
    
    trees: [
      [1,2],
    ],
    
    apples: [
      {
        x: 3,
        y: 3,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    cubes: [
      [4, 39, 0],
      [3, 39, 0],
      [6, 39, 0],
      [7, 39, 0],
      [7, 40, 0],
      [7, 41, 0],
      [7, 42, 0],
      [7, 43, 0],
      [3, 40, 0],
      [3, 41, 0],
      [3, 42, 0],
      [3, 43, 0],
      [4, 43, 0],
      [5, 43, 0],
      [6, 43, 0],
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 9,
        y: 45,
        angle: 0,
        open: 0,
        puzzles: 6,
        to: 23,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 3-3 (23)
// Size 6
levels.push(
  {
  
    width: 50,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 4,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "110"+
                "111"+
                "010",
      },
      
      {
        x: 40,
        y: 3,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1000"+
                "1011"+
                "0000"+
                "1100",
      },
      
      {
        x: 20,
        y: 4,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "010"+
                "101"+
                "111",
      },
      
      {
        x: 30,
        y: 4,
        size: 3,
        wrap: 1,
        wall: "",
        ground: "001"+
                "011"+
                "111",
      },

    ],
    
    trees: [
      [7,3],
    ],
    
    cubes: [
    ],
    
    apples: [
      {
        x: 6,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 49,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 10,
        to: 24,
        to_x: -4,
        to_y: 10,
        to_z: 0
      }
    ],
  }
);

// Room 3-4 (24)
// Size 11
levels.push(
  {
  
    width: 40,
    height: 20,
    hole: false,
    
    puzzles: [

      {
        x: 11,
        y: 4,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1101"+
                "1100"+
                "1011"+
                "0111",
      },
      
      {
        x: 33,
        y: 4,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1111"+
                "0101"+
                "1011"+
                "1010",
      },
      
      
      {
        x: 22,
        y: 13,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1010"+
                "1101"+
                "1111"+
                "1010",
      },
      
      {
        x: 33,
        y: 13,
        size: 5,
        wrap: 1,
        wall: "00000"
             +"00000"
             +"00000"
             +"11000"
             +"10001",
             
        ground: "11001"
               +"10001"
               +"10000"
               +"10001"
               +"10001",
      },
      
      {
        x: 8,
        y: 13,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "0001"+
                "0111"+
                "1011"+
                "1111",
      },
      
      {
        x: 21,
        y: 3,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1010"+
                "1111"+
                "0110"+
                "1011",
      },

    ],
    
    trees: [
      [5,5],
    ],
    
    apples: [
      {
        x: 7,
        y: 9,
        eaten: 0
      },
      {
        x: 6,
        y: 6,
        eaten: 0
      },
      {
        x: 3,
        y: 6,
        eaten: 0
      },
      {
        x: 4,
        y: 8,
        eaten: 0
      },
      {
        x: 5,
        y: 7,
        eaten: 0
      },
    ],
    
    stones: [
    ],
    
    cubes: [
    
    ],
    
    bridges: [
      {
        x: 1,
        y: 10,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },

      {
        x: 39,
        y: 15,
        angle: 0,
        open: 0,
        puzzles: 16,
        to: 25,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
);

// Room 3-5 (25)
// Size 13
levels.push(
  {
  
    width: 22,
    height: 60,
    hole: false,
    
    puzzles: [

      {
        x: 4,
        y: 10,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1011"+
                "1011"+
                "1101"+
                "1111",
      },
      
      {
        x: 4,
        y: 20,
        size: 4,
        wrap: 1,
        wall: "",
        ground: "1111"+
                "1110"+
                "0111"+
                "1101",
      },
      
      {
        x: 3,
        y: 30,
        size: 5,
        wrap: 1,
        wall: "",
        ground: "11111"+
                "01100"+
                "00100"+
                "01100"+
                "11100",
      },
      
      {
        x: 3,
        y: 40,
        size: 5,
        wrap: 1,
        wall: "",
        ground: "00100"+
                "00111"+
                "01110"+
                "11111"+
                "00100",
      },

      {
        x: 13,
        y: 50,
        size: 5,
        wrap: 1,
        wall:   "",
               
        ground: "10011"
               +"11001"
               +"11001"
               +"00011"
               +"10001",
      },
      
      
      {
        x: 13,
        y: 10,
        size: 5,
        wrap: 1,
        wall:   "",
               
        ground: "10000"
               +"10000"
               +"11100"
               +"11111"
               +"11100",
      },
      
      {
        x: 13,
        y: 20,
        size: 5,
        wrap: 1,
        wall:   "",
               
        ground: "11110"+
                "10100"+
                "10001"+
                "00001"+
                "11011",
      },
      
      {
        x: 13,
        y: 30,
        size: 5,
        wrap: 1,
        wall:   "",
               
        ground: "11101"+
                "10000"+
                "10000"+
                "10001"+
                "11111",
      },
      
      {
        x: 13,
        y: 40,
        size: 5,
        wrap: 1,
        wall:   "",
               
        ground: "10011"+
                "10001"+
                "10000"+
                "11000"+
                "11111",
      },
      
      {
        x: 3,
        y: 50,
        size: 5,
        wrap: 1,
        wall:   "00000"+
                "00000"+
                "00000"+
                "01110"+
                "11011",
               
        ground: "01110"+
                "01011"+
                "11001"+
                "01000"+
                "01000",
      },

    ],
    
    trees: [
      [12,2],
    ],
    
    cubes: [
    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },
      {
        x: 9,
        y: 5,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },

      {
        x: 11,
        y: 55,
        angle: 0,
        open: 0,
        puzzles: 21,
        to: 26,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 3-6
// Size 5
levels.push(
  
);

// Room 3-7
// Size 5
levels.push(
  
);




// Lines of cubes in certain rooms
for(i = 1; i < 11; i++){
  levels[21].cubes.push([23,i]);
}

for(i = 0; i < 15; i++){
  levels[24].cubes.push([18,i]);
  levels[24].cubes.push([29,i+5]);
}