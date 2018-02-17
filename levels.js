levels = [

  // Room 0
  {
  
    width: 40,
    height: 10,
    hole: [7, 5.1],
    
    trees: [
      [15,3],
      [29,2],
    ],
    
    apples: [
      {
        x: 14,
        y: 4,
        eaten: 0
      },
      {
        x: 29,
        y: 4,
        eaten: 0
      }
    ],
    
    /*stones: [
      [2,9],
      [11,3],
      [20,5],
      [34,9],
    ],*/
    
    cubes: [
      [28, 3],
      [28, 4],
      [28, 5],
      [28, 6],
      [30, 3],
      [30, 4],
      [30, 5],
      [30, 6],
    ],
    
    
    bridges: [
      {
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 4,
        snakelength: 5,
        to: 1,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
    
    
    
  
  },
  
  // Room 1
  // Size 5
  // Puzzles 1-3
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"11111"
               +"00000"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01000"
               +"01110"
               +"00010"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"01110"
               +"00110"
               +"00000",
      },

    ],
    
    trees: [
    ],
    
    apples: [
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
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 3,
        to: 2,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 2
  // Size 6
  // Puzzles 4-6
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000000"
               +"011110"
               +"001100"
               +"000000"
               +"000000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01100"
               +"01110"
               +"00010"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01110"
               +"01100"
               +"00100"
               +"00000",
      },

    ],
    
    trees: [
      [5,3],
    ],
    
    apples: [
      {
        x: 4,
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
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 6,
        to: 3,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 3
  // Size 7
  // Puzzles 7-10
  {
  
    width: 50,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00110"
               +"01110"
               +"00110"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00010"
               +"01110"
               +"01100"
               +"00100",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00011"
               +"00000"
               +"00011"
               +"00000",
      },
      
      {
        x: 40,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"00000"
               +"01010"
               +"01110",
      },

    ],
    
    trees: [
      [7,3],
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
        to: 4,
        to_x: -4,
        to_y: 10,
        to_z: 0
      }
    ],
  },
  
  // Room 4
  // Size 8
  // Puzzles 11-16
  {
  
    width: 40,
    height: 20,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000010"
               +"000110"
               +"000110"
               +"001110"
               +"000000",
      },
      
      {
        x: 21,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"11110"
               +"01111"
               +"00000",
      },
      
      {
        x: 33,
        y: 4,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "101"
               +"011"
               +"010",
      },
      
      {
        x: 10,
        y: 13,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01110"
               +"01110"
               +"01100"
               +"00000",
      },
      
      {
        x: 21,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"001100"
               +"001100"
               +"011000"
               +"011000"
               +"000000",
      },
      
      {
        x: 32,
        y: 10,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0001"
               +"0011"
               +"0001"
               +"0001",
      },

    ],
    
    trees: [
      [5,8],
    ],
    
    apples: [
      {
        x: 4,
        y: 9,
        eaten: 0
      }
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
        to: 5,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  
  // Room 5
  // Size 9
  // Puzzles 17-20
  {
  
    width: 12,
    height: 45,
    hole: false,
    
    puzzles: [

      {
        x: 3,
        y: 10,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"001100"
               +"011110"
               +"011000"
               +"001000"
               +"000000",
      },
      
      {
        x: 3,
        y: 20,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000000"
               +"001110"
               +"011110"
               +"001100"
               +"000000",
      },
      
      {
        x: 4,
        y: 30,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "111"
               +"010"
               +"110",
      },
      
      {
        x: 4,
        y: 36,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1110"
               +"1100"
               +"1000"
               +"0000",
      },

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [
      [6, 13],
      [7, 13],
      [6, 14],
      [7, 14],
      [7, 11],
      [4, 11],
      [4, 14],
      [4, 22],
      [4, 24],
      [7, 24],
      [4, 31],
    ],
    
    apples: [
      {
        x: 8,
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
        x: 11,
        y: 39,
        angle: 0,
        open: 0,
        puzzles: 20,
        to: 6,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 6
  // Size 10
  // Puzzles 21-24
  {
  
    width: 50,
    height: 11,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "011100"+
                "011110"+
                "001110"+
                "000000"+
                "000000",
      },
      
      {
        x: 20,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0010"
               +"1111"
               +"0111"
               +"0011",
      },
      
      {
        x: 28,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0010"
               +"0011"
               +"0110"
               +"0011",
      },
      
      {
        x: 38,
        y: 4,
        size: 6,
        wrap: 0,
        wall: 
           "000000"
          +"000000"
          +"000000"
          +"111111"
          +"100001"
          +"100001",
        ground: 
          "",
      },

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [
      [38, 3],
      [39, 3],
      [42, 3],
      [43, 3],
    ],
    
    apples: [
      {
        x: 8,
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

      /*{
        x: 39,
        y: 10,
        angle: 0,
        open: 0,
        puzzles: 16,
        to: 5,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }*/
    ],
  },
  
  
  // Room 7
  // Size 11
  // Puzzles 25-
  {
  
    width: 50,
    height: 11,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0111"
               +"0101"
               +"1111"
               +"1100",
      },
      
      
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"+
                "01110"+
                "01010"+
                "01110"+
                "01110",
      },
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1100"+
                "1110"+
                "1111"+
                "0011",
      },
      
      {
        x: 40,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1010"+
                "1110"+
                "1100"+
                "1000",
      },
      
      
      
      

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [

    ],
    
    apples: [
      {
        x: 8,
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

      /*{
        x: 39,
        y: 10,
        angle: 0,
        open: 0,
        puzzles: 16,
        to: 5,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }*/
    ],
  }
 

];

for(i = 0; i < 7; i++){
  levels[0].cubes.push([17,i]);
  levels[0].cubes.push([20,i+3]);
}

for(i = 0; i < 15; i++){
  levels[4].cubes.push([18,i]);
  levels[4].cubes.push([29,i+5]);
}

for(i = 0; i < 11; i++){
  levels[6].cubes.push([41,i]);
  levels[6].cubes.push([40,i]);
}