// World 2

// Room 0 (13)
// Size 3,4,5
// Puzzles 1-3
levels.push(
  {
  
    width: 50,
    height: 10,
    hole: false,


    puzzles: [

      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00002"
               +"12001"
               +"00001"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00200"
               +"01110"
               +"00020"
               +"00000",
      },
      
      {
        x: 40,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00010"
               +"21210"
               +"00000"
               +"00000",
      },
    ],

    trees: [
      [10,3],
    ],
    
    apples: [
      {
        x: 10,
        y: 5,
        eaten: 0
      },
      {
        x: 11,
        y: 6,
        eaten: 0
      }
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
        to: 14,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  
  }
);
  
  
// Room 1 (14)
// Size 6
// Puzzles 4-6
levels.push(
  {
  
    width: 10,
    height: 40,
    hole: false,
    
    puzzles: [

      {
        x: 3,
        y: 10,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"01210"
               +"01120"
               +"00000",
      },
      
      {
        x: 3,
        y: 20,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "2000"
               +"1120"
               +"0100"
               +"0100",
      },
      
      {
        x: 3,
        y: 30,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0200"
               +"0110"
               +"0112"
               +"0000",
      },

    ],
    
    trees: [
      [5,3],
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
        y: 35,
        angle: 0,
        open: 0,
        puzzles: 66,
        to: 15,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 2 (15)
// Size 7
// Puzzles 7-10
levels.push(
  {
    width: 50,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 11,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01020"
               +"01110"
               +"02100"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01120"
               +"02110"
               +"00100"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00002"
               +"00000"
               +"00121"
               +"00000",
      },
      
      {
        x: 40,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01220"
               +"01010"
               +"00000"
               +"00000"
               +"00000",
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
        puzzles: 70,
        to: 16,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  }
),

// Room 3 (16)
// Size 8
// Puzzles 11-13
levels.push(
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 4,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "111"+
                "112"+
                "120",
      },
      
      {
        x: 17,
        y: 2,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "000100"+
                "002100"+
                "001110"+
                "021000"+
                "000000",
      },
      
      /*{
        x: 20,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0010"+
                "0021"+
                "0012"+
                "0000",
      },*/
      
      {
        x: 27,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "21012"+
                "10000"+
                "00000"+
                "00000"+
                "00000",
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
        y: 4,
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
        puzzles: 73,
        to: 17,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);
/*  
  // Room 4
  // Size 9
  // Puzzles 14-
  {
  
    width: 12,
    height: 45,
    hole: false,
    
    puzzles: [

      
      {
        x: 4,
        y: 5,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0000"+
                "1110"+
                "0210"+
                "1112",
      },
      
      {
        x: 5,
        y: 20,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "210"+
                "100"+
                "002",
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

      {
        x: 11,
        y: 39,
        angle: 0,
        open: 0,
        puzzles: 21,
        to: 5,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  /*
  // Room 5
  // Size 10
  // Puzzles 22-25
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
        x: 49,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 25,
        to: 6,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  
  // Room 6
  // Size 11
  // Puzzles 26-32
  {
  
    width: 80,
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
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "011110"+
                "011100"+
                "011110"+
                "000000"+
                "000000",
      },
      
      
      {
        x: 30,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "011110"+
                "011110"+
                "001100"+
                "001000"+
                "000000",
      },
      
      {
        x: 40,
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
        x: 50,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1010"+
                "1110"+
                "1100"+
                "1000",
      },
      
      {
        x: 60,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1100"+
                "1110"+
                "1111"+
                "0011",
      },
      
      {
        x: 70,
        y: 5,
        size: 4,
        wrap: 0,
        wall: "0001"+
              "0111"+
              "1111"+
              "1110",
              

            
        ground: "",
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

      {
        x: 79,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 32,
        to: 7,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 7
  // Size 13
  // Puzzles 33-37
  {
  
    width: 30,
    height: 20,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0011000"+
                "0011100"+
                "0011100"+
                "0011100"+
                "0011000"+
                "0000000",
      },
      
      {
        x: 4,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "011000"+
                "011100"+
                "011110"+
                "011110"+
                "000000",
      },
      
      
      {
        x: 13,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "001110"+
                "011110"+
                "011010"+
                "001110"+
                "000000",
      },

      {
        x: 21,
        y: 11,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0011100"+
                "0010100"+
                "0011100"+
                "0010100"+
                "0011100"+
                "0000000",
      },  
      
      {
        x: 22,
        y: 5,
        size: 4,
        wrap: 0,
        ground: "",
        wall:   "0110"+
                "1111"+
                "1111"+
                "1110",
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
      },

      {
        x: 6,
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
        x: 29,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 37,
        to: 8,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 8
  // Size 15
  // Puzzles 38-43
  {
  
    width: 70,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0000000"+
                "0011110"+
                "0110110"+
                "0111100"+
                "0111000"+
                "0000000",
      },
      
      
      {
        x: 20,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0000110"+
                "0111110"+
                "0101110"+
                "0111000"+
                "0010000"+
                "0000000",
      },

      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        ground: "",
        wall:
                "11111"+
                "11101"+
                "01001"+
                "01111"+
                "00000",
      },

      {
        x: 40,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1101"+
                "1111"+
                "0110"+
                "1110",
      },


      {
        x: 50,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0001110"+
                "0011110"+
                "0011100"+
                "0111000"+
                "0011000"+
                "0000000",
      },
      
      {
        x: 62,
        y: 3,
        size: 3,
        wrap: 0,
        wall: "",
        ground:  "010"+
                "111"+
                "010",
      },    
      
      
      

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [
      [13, 5],
      [22, 5],
      [40, 5],
      [42, 3],
      [43, 5],
      [43, 6],

    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },

      {
        x: 6,
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
        x: 69,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 43,
        to: 9,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },

  
  // Room 9
  // Size 16
  // Puzzles 44-49
  {
  
    width: 10,
    height: 70,
    hole: false,
    
    puzzles: [

      {
        x: 3,
        y: 10,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01100"+
                "11111"+
                "11101"+
                "01101"+
                "11000",
      },
      {
        x: 3,
        y: 20,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "00010"+
              "11110"+
              "11111"+
              "01111"+
              "00110",
      },
      
      {
        x: 3,
        y: 30,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1000"+
                "1110"+
                "0110"+
                "1011",
      },
      
      {
        x: 3,
        y: 40,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "01100"+
              "01101"+
              "11111"+
              "10010"+
              "11110",
      },
      
      
      {
        x: 3,
        y: 50,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0101"+
                "1101"+
                "0111"+
                "0101",
      },
      
      
      
      {
        x: 3,
        y: 60,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "01000"+
              "11110"+
              "10111"+
              "11101"+
              "00111",
      },
      
      

    ],
    
    trees: [
      [4,2],
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

      {
        x: 9,
        y: 65,
        angle: 0,
        open: 0,
        puzzles: 49,
        to: 10,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 10
  // Size 17
  // Puzzles 50-55
  {
  
    width: 70,
    height: 11,
    hole: false,
    
    puzzles: [

      
      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01100"+
                "11110"+
                "11111"+
                "01101"+
                "00111",
      },
      
      
      {
        x: 20,
        y: 3,
        size: 6,
        wrap: 0,
        ground: "",
        wall: "111101"+
              "101101"+
              "111111"+
              "001100"+
              "000000"+
              "000000",
      },
      
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1001"+
                "1111"+
                "1001"+
                "1011",
      },
     
      {
        x: 40,
        y: 3,
        size: 7,
        wrap: 0,
        ground: "",
        wall: "0000000"+
              "0000000"+
              "0000000"+
              "0000000"+
              "0000000"+
              "1111111"+
              "1010101",
      },
      
      {
        x: 50,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1111"+
                "1101"+
                "1011"+
                "1111",
      },
      
      
      {
        x: 60,
        y: 3,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "00000"+
              "00000"+
              "00010"+
              "01111"+
              "11001",
      },
     
    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [
      [13, 6],
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
        x: 69,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 55,
        to: 11,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  
  // Room 11
  // Size 20
  // Puzzles 56-
  {
  
    width: 55,
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
                "000111"+
                "111101"+
                "101111"+
                "111010"+
                "001110",
      },
      
      {
        x: 20,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "011000"+
                "111111"+
                "101011"+
                "101110"+
                "111100"+
                "000000",
      },
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1011"+
                "0110"+
                "1101"+
                "1011",
      },
      


      {
          x: 40,
          y: 3,
          size: 5,
          wrap: 0,
          wall:  "01111"+
                 "01211"+
                 "01111"+
                 "00000"+
                 "00000",

          ground: "01111"+
                  "00000"+
                  "01211"+
                  "01111"+
                  "00000",
      },
      
      
      
      

    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [
      [29, 4],
      [30, 4],
      [31, 2],
      [31, 6],
      [33, 4],
    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },
      
      {
        x: 9,
        y: 3,
        eaten: 0
      },
      
      {
        x: 5,
        y: 2,
        eaten: 0
      },
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
    ],
  },*/