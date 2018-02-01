levels = [

  // Room 0
  {
  
    width: 21,
    height: 21,
    hole: [10, 10],
    puzzles: [

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
    
    trees: [
      [3,15],
    ],
    
    stones: [
      [5,10],
      [11,17],
      [2,14],
    ],
    
    bridges: [
      {
        x: 21,
        y: 10,
        angle: 0,
        open: 0,
        puzzles: 4,
        to: 1,
        to_x: 0,
        to_y: 12,
        to_z: 0
      }
    ],
    
    
    
  
  },
  
  // Room 1
  {
  
    width: 21,
    height: 21,
    hole: false,
    puzzles: [

      

    ],
    
    trees: [
      [15,15],
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