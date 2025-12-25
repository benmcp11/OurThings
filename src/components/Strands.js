import React, { useState } from "react";
import "./Strands.css";

const Strands = () => {
  
  
  // Example usage

  // var [grid] = useState([
  //   ["G", "N", "I", "G", "M", "M"],
  //   ["S", "C", "H", "A", "N", "O"],
  //   ["T", "N", "L", "Y", "C", "H"],
  //   ["R", "U", "S", "A", "E", "E"],
  //   ["A", "I", "E", "D", "S", "A"],
  //   ["W", "R", "N", "E", "P", "T"],
  //   ["B", "R", "U", "I", "S", "E"],
  //   ["E", "S", "C", "R", "P", "S"],
  // ]);


  // const themeWords = ["CHEESE", "PATE", "CRISPS", "GAMMON", "STRAWBERRIES",];
  // const spangram = "SUNDAYLUNCHING";
  // const theme = "Perfect Plate"

  // var [grid] = useState([
  //   ["S", "R", "A", "E", "T", "W"],
  //   ["P", "E", "T", "M", "R", "A"],
  //   ["I", "D", "R", "I", "A", "R"],
  //   ["C", "H", "T", "O", "R", "G"],
  //   ["E", "A", "T", "L", "E", "H"],
  //   ["N", "W", "A", "I", "A", "P"],
  //   ["I", "R", "A", "B", "U", "A"],
  //   ["A", "R", "U", "S", "E", "T"],
  // ]);

  // const themeWords = ["MARGHERITA", "ARRABIATTA", "CHIPS", "WINE", "WATER", "PATE"];
  // const spangram = "USUALORDER";
  // const theme = "Hold the menu"

  // var [grid] = useState([
  //   ["N", "Y", "I", "T", "B", "E"],
  //   ["O", "E", "K", "U", "R", "Z"],
  //   ["D", "N", "R", "S", "E", "I"],
  //   ["A", "O", "L", "L", "O", "H"],
  //   ["Y", "D", "I", "E", "L", "A"],
  //   ["T", "I", "R", "O", "T", "G"],
  //   ["E", "M", "Z", "A", "T", "U"],
  //   ["L", "A", "N", "P", "O", "R"],
  // ]);

  // const themeWords = ["BEZIERS", "LANZAROTE", "LONDON", "PORTUGAL", "TURKIYE"];
  // const spangram = "HOLIDAYTIME";
  // const theme = "Away you go"


  // var [grid] = useState([
  //   ["G", "L", "K", "O", "O", "M"],
  //   ["F", "A", "G", "O", "K", "O"],
  //   ["E", "I", "S", "W", "T", "W"],
  //   ["T", "R", "R", "C", "F", "O"],
  //   ["A", "W", "E", "L", "I", "O"],
  //   ["G", "A", "U", "R", "D", "S"],
  //   ["A", "R", "B", "Y", "D", "H"],
  //   ["G", "E", "S", "M", "M", "I"],
  // ]);

  // const themeWords = ["FIREWATER", "KOKOMO", "SHIMMY", "GARAGE", "DRIFTWOOD"];
  // const spangram = "GLASGOWCLUBS";
  // const theme = "It's far too late"

  // var [grid] = useState([
  //   ["N", "T", "H", "R", "L", "B"],
  //   ["E", "E", "L", "E", "E", "M"],
  //   ["W", "J", "O", "E", "G", "A"],
  //   ["L", "A", "H", "D", "E", "Y"],
  //   ["E", "B", "U", "O", "A", "F"],
  //   ["W", "I", "A", "C", "T", "S"],
  //   ["D", "R", "C", "I", "R", "U"],
  //   ["E", "A", "N", "E", "R", "H"],
  // ]);

  // const themeWords = ["DOUBLEWIDE", "HURRICANE", "FASTCAR", "JOLENE", "THEGAMBLER"];
  // const spangram = "YEEHAW";
  // const theme = "... to the bone"

  // var [grid] = useState([
  //   ["K", "A", "S", "E", "O", "O"],
  //   ["T", "E", "T", "K", "D", "L"],
  //   ["H", "R", "I", "A", "F", "B"],
  //   ["S", "E", "E", "N", "A", "G"],
  //   ["A", "N", "R", "P", "N", "S"],
  //   ["E", "F", "I", "N", "M", "L"],
  //   ["S", "T", "O", "A", "E", "E"],
  //   ["D", "A", "M", "V", "A", "N"],
  // ]);

  // const themeWords = ["KATHERINE", "ELENA", "STEFAN", "DAMON", "FANGS", "BLOOD", "STAKE"];
  // const spangram = "VAMPIRES";
  // const theme = "Journal this"

  // var [grid] = useState([
  //   ["T", "E", "C", "T", "E", "T"],
  //   ["A", "H", "I", "E", "A", "T"],
  //   ["L", "O", "U", "C", "M", "I"],
  //   ["O", "C", "U", "M", "S", "I"],
  //   ["S", "G", "E", "S", "B", "T"],
  //   ["A", "T", "I", "E", "E", "O"],
  //   ["S", "N", "O", "H", "A", "S"],
  //   ["S", "E", "N", "S", "C", "T"],
  // ]);

  // const themeWords = ["BISCUIT", "CHOCOLATE", "TOAST", "MUGS", "SENSATIONS", "CHEESE"];
  // const spangram = "TEATIME";
  // const theme = "20:30"

  // var [grid] = useState([
  //   ["M", "E", "A", "C", "R", "E"],
  //   ["O", "T", "E", "D", "P", "E"],
  //   ["H", "V", "L", "K", "A", "B"],
  //   ["A", "I", "E", "O", "A", "E"],
  //   ["P", "O", "K", "V", "G", "U"],
  //   ["C", "B", "O", "R", "I", "N"],
  //   ["I", "E", "R", "E", "M", "E"],
  //   ["N", "W", "O", "C", "A", "K"],
  // ]);

  // const themeWords = ["COOKIE", "BROWNIE", "PAVLOVA", "CREPE", "CAKE", "MERINGUE"];
  // const spangram = "BAKEDATHOME";
  // const theme = "Put the oven on"

  // var [grid] = useState([
  //   ["C", "I", "W", "S", "M", "A"],
  //   ["K", "J", "E", "H", "A", "T"],
  //   ["E", "S", "R", "O", "D", "I"],
  //   ["D", "S", "E", "W", "N", "L"],
  //   ["Y", "O", "Y", "T", "T", "O"],
  //   ["M", "B", "I", "M", "I", "L"],
  //   ["S", "I", "M", "A", "H", "X"],
  //   ["E", "L", "S", "E", "S", "I"],
  // ]);

  // const themeWords = ["MATILDA", "WICKED", "LESMIS", "JERSEYBOYS", "HAMILTON", "SIX"];
  // const spangram = "SHOWTIME";
  // const theme = "Sit back and enjoy"

  // var [grid] = useState([
  //   ["I", "W", "D", "D", "U", "L"],
  //   ["S", "N", "I", "H", "W", "L"],
  //   ["H", "O", "G", "N", "T", "E"],
  //   ["A", "T", "S", "O", "O", "L"],
  //   ["W", "A", "B", "A", "C", "A"],
  //   ["E", "R", "L", "N", "H", "M"],
  //   ["A", "G", "S", "G", "O", "I"],
  //   ["W", "O", "A", "L", "T", "L"],
  // ]);

  // const themeWords = ["HAMILTON", "UDDINGSTON", "BOTHWELL", "GLASGOW", "WISHAW"];
  // const spangram = "LOCALAREA";
  // const theme = "Out and about"

  // var [grid] = useState([
  //   ["O", "G", "O", "A", "D", "I"],
  //   ["C", "I", "Y", "K", "H", "C"],
  //   ["G", "O", "T", "L", "E", "H"],
  //   ["E", "R", "N", "H", "U", "A"],
  //   ["R", "E", "B", "R", "K", "T"],
  //   ["G", "R", "N", "A", "T", "A"],
  //   ["C", "O", "A", "S", "L", "E"],
  //   ["M", "D", "R", "T", "O", "N"],
  // ]);

  // const themeWords = ["MCGREGOR", "RALSTON", "KYOGO", "BERNARDO", "IDAH","KUHN", "HATATE" ];
  // const spangram = "CELTIC";
  // const theme = "An watch full of emotions"

  // var [grid] = useState([
  //   ["E", "E", "A", "S", "J", "O"],
  //   ["N", "R", "U", "M", "E", "H"],
  //   ["E", "L", "M", "N", "L", "N"],
  //   ["A", "I", "V", "E", "F", "A"],
  //   ["H", "C", "R", "R", "K", "R"],
  //   ["L", "O", "I", "M", "N", "E"],
  //   ["U", "M", "D", "G", "A", "R"],
  //   ["A", "P", "E", "S", "I", "E"],
  // ]);

  // const themeWords = ["KAREN", "PAUL", "JOHN", "MAUREEN", "MICHAEL","JOHN", "MARIE", "MORVEN" ];
  // const spangram = "SELFRIDGES";
  // const theme = "Punt coolers"

  // var [grid] = useState([
  //   ["N", "O", "B", "S", "A", "K"],
  //   ["A", "I", "V", "R", "P", "H"],
  //   ["S", "L", "E", "N", "E", "S"],
  //   ["O", "A", "M", "D", "R", "E"],
  //   ["O", "R", "A", "O", "K", "B"],
  //   ["G", "E", "Z", "N", "R", "P"],
  //   ["S", "A", "L", "I", "A", "R"],
  //   ["O", "S", "S", "E", "M", "I"],
  // ]);

  // const themeWords = ["ZARA", "PRIMARK", "OLIVERBONAS", "BERSHKA", "LEGO","ASOS"];
  // const spangram = "SPENDMONIES";
  // const theme = "Take all I've got"


  // var [grid] = useState([
  //   ["L", "E", "Y", "N", "A", "S"],
  //   ["A", "L", "T", "L", "O", "L"],
  //   ["M", "O", "I", "A", "R", "K"],
  //   ["B", "A", "I", "P", "E", "A"],
  //   ["E", "L", "S", "O", "H", "V"],
  //   ["Y", "O", "A", "N", "A", "G"],
  //   ["M", "T", "R", "S", "Y", "R"],
  //   ["Y", "D", "E", "E", "K", "E"],
  // ]);

  // const themeWords = ["HOSPITAL", "KAREV", "DEREK", "SLOAN", "OMALLEY","BAILEY"];
  // const spangram = "GREYSANATOMY";
  // const theme = "Dramatic place to work"

  // var [grid] = useState([
  //   ["T", "O", "I", "V", "E", "O"],
  //   ["G", "E", "L", "N", "G", "B"],
  //   ["I", "P", "I", "O", "I", "I"],
  //   ["N", "A", "T", "G", "R", "O"],
  //   ["F", "U", "V", "K", "N", "I"],
  //   ["L", "C", "E", "D", "R", "O"],
  //   ["E", "O", "Z", "R", "C", "C"],
  //   ["D", "A", "P", "O", "S", "E"],
  // ]);

  // const themeWords = ["LUCOZADE", "PINOTGRIGIO", "BOEVIOLETGIN", "PROSECCO"];
  // const spangram = "FAVEDRINK";
  // const theme = "Top me up"

  // var [grid] = useState([
  //   ["G", "A", "E", "K", "O", "N"],
  //   ["H", "L", "O", "V", "L", "E"],
  //   ["C", "R", "I", "N", "N", "E"],
  //   ["K", "I", "M", "A", "H", "T"],
  //   ["R", "H", "P", "R", "U", "E"],
  //   ["T", "P", "H", "E", "D", "M"],
  //   ["A", "Y", "R", "O", "Y", "H"],
  //   ["S", "N", "I", "R", "O", "T"],
  // ]);

  // const themeWords = ["DOROTHY", "KEV", "PATRICK", "ERIN","NIAMH", "NOLEEN","ORLAGH"];
  // const spangram = "THEMURPHYS";
  // const theme = "Paradise Residents"

  // var [grid] = useState([
  //   ["D", "S", "S", "E", "W", "O"],
  //   ["N", "A", "R", "T", "L", "R"],
  //   ["S", "N", "C", "N", "O", "D"],
  //   ["O", "I", "T", "E", "N", "C"],
  //   ["S", "G", "N", "H", "T", "O"],
  //   ["O", "T", "I", "R", "U", "I"],
  //   ["R", "D", "C", "I", "N", "H"],
  //   ["E", "L", "O", "M", "E", "T"],
  // ]);

  // const themeWords = ["STRANDS", "WORDLE", "CONNECTIONS", "OCTORDLE","THEMINI",];
  // const spangram = "OURTHINGS";
  // const theme = "Stuff that belongs to us"

  // var [grid] = useState([
  //   ["D", "I", "S", "I", "N", "E"],
  //   ["N", "C", "D", "N", "A", "L"],
  //   ["O", "S", "P", "O", "T", "E"],
  //   ["O", "E", "C", "O", "S", "M"],
  //   ["I", "E", "F", "F", "H", "Y"],
  //   ["Z", "N", "E", "T", "I", "R"],
  //   ["O", "M", "R", "A", "T", "E"],
  //   ["R", "A", "C", "T", "A", "L"],
  // ]);

  // const themeWords = ["DNISI", "CREMA", "RONZIO", "THYME","LATTERIA","NELANDCO"];
  // const spangram = "COFFEESPOTS";
  // const theme = "\"One shot and a bowl of soup please\""

  // var [grid] = useState([
  //   ["Y", "T", "I", "P", "R", "I"],
  //   ["A", "T", "D", "E", "A", "F"],
  //   ["W", "L", "E", "N", "E", "L"],
  //   ["A", "O", "R", "R", "C", "S"],
  //   ["E", "H", "V", "A", "I", "C"],
  //   ["D", "I", "B", "E", "U", "O"],
  //   ["L", "E", "B", "O", "P", "L"],
  //   ["L", "H", "S", "M", "S", "E"],
  // ]);

  // const themeWords = ["BOMBSHELL", "COUPLES", "FIREPIT", "TERRACE","HIDEAWAY"];
  // const spangram = "LOVEISLAND";
  // const theme = "Surrounded by water but full of heart"

  // var [grid] = useState([
  //   ["F", "E", "N", "D", "U", "S"],
  //   ["R", "R", "O", "E", "G", "G"],
  //   ["I", "S", "E", "V", "Y", "E"],
  //   ["F", "A", "S", "I", "O", "S"],
  //   ["I", "L", "T", "V", "L", "G"],
  //   ["E", "O", "I", "E", "I", "M"],
  //   ["Z", "A", "E", "I", "L", "A"],
  //   ["L", "L", "T", "T", "O", "S"],
  // ]);

  // const themeWords = ["ZOELLA", "ALFIE", "OTTILIE", "NOVIE","SUGG", "FERRIS", "DEYES"];
  // const spangram = "ITSVLOGMAS";
  // const theme = "Online advent calendar"

  // var [grid] = useState([
  //   ["K", "E", "N", "W", "A", "C"],
  //   ["A", "C", "Y", "E", "L", "N"],
  //   ["R", "O", "H", "A", "E", "D"],
  //   ["K", "H", "R", "I", "P", "S"],
  //   ["A", "D", "T", "B", "Y", "P"],
  //   ["Y", "O", "P", "R", "E", "S"],
  //   ["G", "E", "S", "T", "N", "E"],
  //   ["L", "N", "A", "L", "I", "M"],
  // ]);

  // const themeWords = ["CAKE", "CANDLES", "NEWYORK", "MILAN","LEGO", "PRESENTS"];
  // const spangram = "HAPPYBIRTHDAY";
  // const theme = "Big day"

  // var [grid] = useState([
  //   ["F", "A", "I", "S", "I", "B"],
  //   ["H", "T", "M", "H", "N", "A"],
  //   ["F", "T", "E", "I", "O", "R"],
  //   ["U", "N", "A", "T", "S", "C"],
  //   ["L", "R", "U", "A", "L", "R"],
  //   ["S", "T", "D", "I", "A", "E"],
  //   ["E", "H", "L", "O", "M", "D"],
  //   ["T", "C", "A", "K", "U", "R"],
  // ]);

  // const themeWords = ["BANISHMENT", "FAITHFULS", "MURDER", "CLOAK","CLAUDIA"];
  // const spangram = "THETRAITORS";
  // const theme = "Who is it?"

  // var [grid] = useState([
  //   ["C", "E", "V", "N", "N", "G"],
  //   ["H", "R", "O", "E", "U", "G"],
  //   ["L", "I", "D", "K", "E", "T"],
  //   ["R", "S", "C", "U", "M", "N"],
  //   ["I", "G", "E", "B", "C", "I"],
  //   ["Y", "B", "X", "Y", "K", "R"],
  //   ["S", "A", "B", "N", "V", "E"],
  //   ["E", "M", "A", "U", "J", "V"],
  // ]);

  // const themeWords = ["DOVER", "JUVVER", "CHICKENNUGGET", "BABYGIRL","SEXYBUM"];
  // const spangram = "NICKNAMES";
  // const theme = "\"Hi, that's me!\""


  //   var [grid] = useState([
  //   ["O", "R", "E", "O", "E", "L"],
  //   ["N", "H", "M", "R", "N", "E"],
  //   ["A", "S", "I", "G", "N", "A"],
  //   ["T", "R", "H", "A", "A", "I"],
  //   ["I", "E", "C", "M", "N", "R"],
  //   ["Y", "T", "A", "D", "T", "O"],
  //   ["S", "R", "E", "N", "L", "A"],
  //   ["K", "I", "M", "A", "R", "C"],
  // ]);

  // const themeWords = ["CHRISTIE", "KIRSTY", "CARLA", "RHONA","AMANDA", "ELEANOR"];
  // const spangram = "MENTORINGME";
  // const theme = "There through it all"


  // var [grid] = useState([
  //   ["Y", "T", "N", "N", "A", "Y"],
  //   ["F", "N", "I", "R", "K", "E"],
  //   ["I", "E", "V", "E", "U", "T"],
  //   ["S", "R", "W", "T", "R", "E"],
  //   ["T", "G", "R", "A", "S", "F"],
  //   ["T", "A", "U", "D", "A", "I"],
  //   ["E", "I", "Y", "R", "I", "W"],
  //   ["M", "L", "A", "N", "M", "D"],
  // ]);

  // const themeWords = ["TURKEY", "GRADUATE", "MILAN", "TWENTYFIRST", "MIDWIFE"];
  // const spangram = "ANNIVERSARY";
  // const theme = "Best one yet"


  var [grid] = useState([
    ["S", "E", "B", "Y", "R", "R"],
    ["T", "A", "U", "L", "E", "M"],
    ["T", "L", "N", "K", "T", "O"],
    ["O", "N", "O", "Y", "H", "D"],
    ["I", "S", "W", "T", "E", "H"],
    ["T", "P", "I", "S", "R", "C"],
    ["E", "A", "S", "I", "Y", "A"],
    ["S", "M", "T", "P", "P", "H"],
  ]);

  const themeWords = ["MERRY", "LAST", "HAPPY", "STEPINTO", "DOTHEYKNOWITS", "BLUE"];
  const spangram = "CHRISTMAS";
  const theme = "The Most Wonderful Time of the Year";




  const [selectedPath, setSelectedPath] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [disabledCells, setDisabledCells] = useState([]);
  const [message, setMessage] = useState("");

  const [normalWords, setNormal] = useState([]);
  const [points,setPoints] = useState(0);

  const [hintIndex, setHintIndex] = useState(-1); // Tracks which theme word is being hinted
  const [pulseHint, setPulseHint] = useState(false); // Controls the pulsing effect

  

  const checkWord = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        console.error(`Error: Invalid word. Status: ${response.status}`);
        return 0;
      }
      return 1;
    } catch (error) {
      console.error(`Network error: ${error.message}`);
      return 0;
    }
  };

  const isAdjacent = (row, col) => {
    if (selectedPath.length === 0) return true;
    const { row: lastRow, col: lastCol } = selectedPath[selectedPath.length - 1];
    const rowDiff = Math.abs(row - lastRow);
    const colDiff = Math.abs(col - lastCol);
    return rowDiff <= 1 && colDiff <= 1;
  };

  const handleHint = () => {
    const nextHintIndex = themeWords.findIndex(
      (word, index) => !foundWords.some((fw) => fw.word === word) && index > hintIndex
    );
  
    if (nextHintIndex === -1) {
      // If all words are found or there are no more hints, do nothing
      setMessage("No more hints available!");
      return;
    }
  
    if (nextHintIndex === hintIndex) {
      // If the same hint is triggered again, activate pulsing
      setPulseHint(true);
      setTimeout(() => setPulseHint(false), 3000); // Stop pulsing after 3 seconds
      
    } else {
      // Move to the next unfound word
      setHintIndex(nextHintIndex);
      setPulseHint(false);
    }
  };
  

  const handleCellClick = (row, col) => {
    const clickedIndex = selectedPath.findIndex(
      (p) => p.row === row && p.col === col
    );
  
    if (clickedIndex !== -1) {
      if (clickedIndex === selectedPath.length - 1) {
        const word = selectedPath.map(({ row, col }) => grid[row][col]).join("");


        if(themeWords.includes(word)){
          setFoundWords([...foundWords, { word, path: selectedPath }]);
          setDisabledCells([...disabledCells, ...selectedPath]);
          setMessage(`${word}`);
          setSelectedPath([]);
        }else if(word === spangram){
          setFoundWords([...foundWords, { word, path: selectedPath }]);
          setDisabledCells([...disabledCells, ...selectedPath]);
          setMessage(`${word}`);

          
        }else if (word.length < 3) {
          console.log(word)
          setMessage("Too Short");
        }else if(normalWords.includes(word)){

          setMessage("Already found");
        }else{
          console.log(word)
          checkWord(word).then((result) => {
            if (result) {
              setMessage(word); 
              setPoints(points+1);
              
              console.log(normalWords)

              setNormal([...normalWords, word]);
            }else {
              setMessage("Not in word list");
            }
              
          });
        }
        
        setSelectedPath([]);
      } else {
        setSelectedPath(selectedPath.slice(0, clickedIndex));
      }

      
    } else if (
      !disabledCells.some((p) => p.row === row && p.col === col) &&
      isAdjacent(row, col)
    ) {
      setSelectedPath([...selectedPath, { row, col }]);
    }
  };
  

  const renderGrid = () => {
    return (
      <div className="grid-strands">
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const isSelected = selectedPath.some(
              (p) => p.row === rowIndex && p.col === colIndex
            );

            const foundWordPath = foundWords
              .map((fw) => fw.path)
              .find((path) =>
                path.some((p) => p.row === rowIndex && p.col === colIndex)
              );

            const orderIndex = isSelected
              ? selectedPath.findIndex(
                  (p) => p.row === rowIndex && p.col === colIndex
                )
              : foundWordPath
              ? foundWordPath.findIndex(
                  (p) => p.row === rowIndex && p.col === colIndex
                )
              : -1;

            const isFound = disabledCells.some(
              (p) => p.row === rowIndex && p.col === colIndex
            );

            const getConnector = () => {
              const connectors = [];
              const allPaths = [...foundWords.map((fw) => fw.path), selectedPath];
            
              allPaths.forEach((path) => {
                const index = path.findIndex(
                  (p) => p.row === rowIndex && p.col === colIndex
                );
                if (index !== -1 && index < path.length - 1) {
                  const nextCell = path[index + 1];
                  const rowDiff = nextCell.row - rowIndex;
                  const colDiff = nextCell.col - colIndex;
            
                  const foundWord = foundWords.find((fw) =>
                    fw.path.some(
                      (p) =>
                        p.row === rowIndex &&
                        p.col === colIndex &&
                        fw.path.includes(nextCell)
                    )
                  );
            
                  const isFromSpangram = foundWord?.word === spangram;
            
                  const connectorClass = isFromSpangram
                    ? "spangram"
                    : foundWord
                    ? "found"
                    : "";
            
                  if (rowDiff === -1 && colDiff === 0)
                    connectors.push({ direction: "up", className: connectorClass });
                  else if (rowDiff === 1 && colDiff === 0)
                    connectors.push({
                      direction: "down",
                      className: connectorClass,
                    });
                  else if (rowDiff === 0 && colDiff === -1)
                    connectors.push({
                      direction: "left",
                      className: connectorClass,
                    });
                  else if (rowDiff === 0 && colDiff === 1)
                    connectors.push({
                      direction: "right",
                      className: connectorClass,
                    });
                  else if (rowDiff === -1 && colDiff === -1)
                    connectors.push({
                      direction: "up-left",
                      className: connectorClass,
                    });
                  else if (rowDiff === -1 && colDiff === 1)
                    connectors.push({
                      direction: "up-right",
                      className: connectorClass,
                    });
                  else if (rowDiff === 1 && colDiff === -1)
                    connectors.push({
                      direction: "down-left",
                      className: connectorClass,
                    });
                  else if (rowDiff === 1 && colDiff === 1)
                    connectors.push({
                      direction: "down-right",
                      className: connectorClass,
                    });
                }
              });
            
              return connectors;
            };
            
          const isHinted = hintIndex !== -1 && themeWords[hintIndex].includes(letter);

          const isPulsingHint =
            pulseHint &&
            hintIndex !== -1 &&
            themeWords[hintIndex]
              .split("")
              .some((_, i) => themeWords[hintIndex][i] === letter);


            const connectors = getConnector();

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell-strands ${isSelected ? "selected" : ""} ${
                  foundWords.some((fw) =>
                    fw.path.some((p) => p.row === rowIndex && p.col === colIndex)
                  )
                    ? foundWords.find(
                        (fw) =>
                          fw.word === spangram &&
                          fw.path.some((p) => p.row === rowIndex && p.col === colIndex)
                      )
                      ? "spangram"
                      : "found-word"
                    : ""
                } ${
                  selectedPath.length > 0 &&
                  selectedPath[selectedPath.length - 1].row === rowIndex &&
                  selectedPath[selectedPath.length - 1].col === colIndex &&selectedPath.length>3
                    ? "recently-selected"
                    : ""
                } 
                `}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {letter}
                {orderIndex !== -1 && (
                  <span className="order-number">{orderIndex + 1}</span>
                )}
                {connectors.map(({ direction, className }, i) => (
                  <div key={i} className={`connector ${direction} ${className}`}></div>
                ))}
              </div>

            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="strands">
      <h1>Strands</h1>
      <div className="theme-box">
        <div className="theme-header">Today's Theme</div>
        <div className="theme-content">{theme}</div>
      </div>
      <div className={`current-word `}>
        
        <p className={`${message ===spangram ? "mess-spangram": ""} 
          ${themeWords.includes(message) ? "mess-found": ""}`}>
          <strong>{selectedPath.map(({ row, col }) => grid[row][col]).join("") || message|| '-'}</strong>
        </p>
      </div>
      {renderGrid()}
      
      <div className="footer">
        <button className="hint-button" 
        // onClick={() => handleHint() }
        >
          Hint
        </button>
        <p className="theme-progress">
          {foundWords.length} of {themeWords.length+1} words found
        </p>
      </div>
    </div>
  );
};

export default Strands;
