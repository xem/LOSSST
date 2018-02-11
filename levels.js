levels = [

  // Room 0
  {
  
    width: 38,
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
      [31,2],
    ],
    
    apples: [
      {
        x: 9,
        y: 3,
        eaten: 0
      },
      {
        x: 21,
        y: 7,
        eaten: 0
      },
      {
        x: 31,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
      [2,9],
      [11,3],
      [20,5],
      [34,9],
    ],
    
    cubes: [
      [30, 3],
      [30, 4],
      [30, 5],
      [30, 6],
      [32, 3],
      [32, 4],
      [32, 5],
      [32, 6],
    ],
    
    
    bridges: [
      {
        x: 37,
        y: 4,
        angle: 0,
        open: 0,
        puzzles: 4,
        snakelength: 6,
        to: 1,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
    
    
    
  
  },
  
  // Room 1
  {
  
    width: 40,
    height: 10,
    hole: false,
    puzzles: [

      

    ],
    
    trees: [
      [14,3],
    ],
    
    apples: [
      {
        x: 10,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 4,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      }
    ],
    
    
    
  
  },

];

for(i = 0; i < 7; i++){
  levels[0].cubes.push([15,i]);
  levels[0].cubes.push([18,i+3]);
}