levels = [

  // Room 1-1
  // Size 3,4,5
  // Puzzles 1-3
  {
  
    width: 60,
    height: 10,
    hint: [
      6, // x 
      2, // y
      "images/arrows.png", // desktop
      "", // mobile
    ],
    
    hole: [7, 5.1],


    puzzles: [

      {
        x: 35,
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
        x: 43,
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
        x: 51,
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
      null,
      
      {
        x: 59,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 3,
        to: 1,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  
  },
  
  // Room 1-2
  // Size 6
  // Puzzles 4-6
  {
  
    width: 10,
    height: 40,
    hole: false,
    
    puzzles: [

      {
        x: 2,
        y: 10,
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
        x: 2,
        y: 20,
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
        x: 2,
        y: 30,
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
        puzzles: 6,
        to: 2,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 1-3
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
               +"01100"
               +"11100"
               +"00110"
               +"00000",
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
        ground: "01110"
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
        puzzles: 10,
        to: 3,
        to_x: -4,
        to_y: 10,
        to_z: 0
      }
    ],
  },
  
  // Room 1-4
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
        x: 33,
        y: 4,
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
        x: 22,
        y: 13,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0000"
               +"1111"
               +"1011"
               +"0010",
      },
      
      {
        x: 34,
        y: 13,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "101"
               +"011"
               +"010",
      },
      
      {
        x: 8,
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
        y: 3,
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
        to: 4,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  
  // Room 1-5
  // Size 9
  // Puzzles 17-21
  {
  
    width: 12,
    height: 52,
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

      {
        x: 3,
        y: 44,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00001"
               +"00011"
               +"00001"
               +"00001"
               +"00001",
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
        y: 48,
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
  
  // Room 1-6
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
        depth: 1,
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
  
  
  // Room 1-7
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
  
  // Room 1-8
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
        depth: 1,
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
  
  // Room 1-9
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
        depth: 1,
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

  
  // Room 1-10
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
  
  // Room 1-11
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
        depth: 1,
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
        y: 4,
        size: 7,
        depth: 1,
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
        depth: 1,
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
  
  
  // Room 1-12
  // Size 20
  // Puzzles 56-60
  {
  
    width: 60,
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
          size: 6,
          wrap: 0,
          wall:  "000000"+
                 "011110"+
                 "011110"+
                 "010010"+
                 "010010"+
                 "011110",

          ground: "011110"+
                  "000010"+
                  "010010"+
                  "011110"+
                  "000000"+
                  "000000",
      },
      
      {
        x: 40,
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
          x: 50,
          y: 3,
          size: 6,
          wrap: 0,
          wall:  "000000"+
                 "000000"+
                 "011110"+
                 "011110"+
                 "010110"+
                 "011110",

          ground: "011110"+
                  "011010"+
                  "011110"+
                  "000000"+
                  "000000"+
                  "000000",
      },

    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [
      [39, 4],
      [40, 4],
      [41, 2],
      [41, 6],
      [43, 4],
      [52, 6],
      [53, 6],
      [54, 6],
      [55, 6],
      [55, 5],
      [55, 4],
      [55, 3],
    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },
      
      {
        x: 7,
        y: 6,
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
        x: 59,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 60,
        to: 12,
        to_x: -3,
        to_y: 8,
        to_z: 0
      }
    ],
  },
  
  
  // Room 1-13
  // Size 20
  // Boss
  {
  
    width: 15,
    height: 15,
    hole: false,
    boss: true,
    
    puzzles: [

    ],
    
    trees: [
    ],
    
    cubes: [
    
      [3, 6],
      [8, 13],
      [11, 8],
      [2, 10],
      [12, 5],
    ],
    
    apples: [
      
    ],
    
    stones: [
    ],
    
    boss: [
       "000000"
      +"011110"
      +"011110"
      +"011110"
      +"011110"
      +"000000",
      
       "000000"
      +"010010"
      +"000000"
      +"000000"
      +"010010"
      +"000000",
      
       "000000"
      +"011110"
      +"100001"
      +"100001"
      +"011110"
      +"000000",
      
       "000000"
      +"011110"
      +"111111"
      +"111111"
      +"011110"
      +"000000",
      
       "000000"
      +"000000"
      +"110011"
      +"110011",
      +"000000"
      +"000000"
    ],
    
    bossground:
      "000000"+
      "011110"+
      "111111"+
      "111111"+
      "011110"+
      "000000",
      
    bosswall:
      "011110"+
      "010010"+
      "111111"+
      "111111"+
      "110011"+
      "000000",

    bridges: [
      {
        x: 1,
        y: 8,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 14,
        y: 8,
        open: 0,
        angle: 0,
        puzzles: 70,
        to: 13,
        to_x: -3,
        to_y: 5,
        to_z: 0
      },
    ],
  },
 

];

// Lines of cubes in certain rooms
for(i = 0; i < 7; i++){
  levels[0].cubes.push([17,i]);
  levels[0].cubes.push([20,i+3]);
}

for(i = 0; i < 15; i++){
  levels[3].cubes.push([18,i]);
  levels[3].cubes.push([29,i+5]);
}

for(i = 0; i < 11; i++){
  levels[5].cubes.push([41,i]);
  //levels[6].cubes.push([40,i]);
}

for(i = 0; i < 10; i++){
  levels[7].cubes.push([19,i]);
}

for(i = 3; i < 7; i++){
  levels[10].cubes.push([62,i]);
  levels[10].cubes.push([63,i]);
}

for(i = 0; i < 5; i++){
  //levels[11].cubes.push([40+i,3]);
}
