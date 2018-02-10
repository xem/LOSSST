levels = [

  // Room 0
  {
  
    width: 36,
    height: 10,
    hole: [5, 5],
    /*puzzles: [

      {
        x: 4,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00110"
               +"01100"
               +"01110"
               +"00000",
      },
      {
        x: 13,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000000"
               +"001100"
               +"011110"
               +"010000"
               +"000000",
      },
      {
        x: 13,
        y: 11,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000000"
               +"001100"
               +"011100"
               +"001100"
               +"000000",
      },
      
      {
        x: 6,
        y: 15,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0010"
               +"0011"
               +"0000"
               +"0001",
      },

    ],
    */
    
    trees: [
      [10,3],
      [23,6],
    ],
    
    apples: [
      {
        x: 10,
        y: 4,
        eaten: 0
      },
      {
        x: 22,
        y: 7,
        eaten: 0
      },
      {
        x: 31,
        y: 5,
        eaten: 0
      }
    ],
    
    stones: [
      [2,9],
      [11,3],
      [16,5],
    ],
    
    cubes: [
      [30, 4],
      [30, 5],
      [30, 6],
      [30, 7],
      [31, 4],
      [32, 7],
      [32, 6],
      [32, 5],
      [32, 4],
    ],
    
    
    bridges: [
      {
        x: 35,
        y: 4,
        angle: 0,
        open: 0,
        puzzles: 4,
        snakelength: 6,
        to: 1,
        to_x: 0,
        to_y: 12,
        to_z: 0
      }
    ],
    
    
    
  
  },
  
  // Room 1
  {
  
    width: 41,
    height: 15,
    hole: false,
    puzzles: [

      

    ],
    
    trees: [
      [14,8],
    ],
    
    apples: [
      {
        x: 10,
        y: 8,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 0,
        y: 10,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      {
        x: 21,
        y: 10,
        angle: 0,
        open: 0,
        puzzles: 4,
        to: 1
      }
    ],
    
    
    
  
  },

];

for(i = 0; i < 7; i++){
  levels[0].cubes.push([15,i]);
  levels[0].cubes.push([18,i+3]);
}