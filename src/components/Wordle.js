import React, { useState, useEffect, useCallback } from "react";
import "./Wordle.css";
import WordleGrid from "./WordleGrid";
import Keyboard from "./Keyboard";

function App() {


  
  // var w = await ReadData("wordle");
  // console.log(w);
  const [solution] = useState("GRAVY"); // Word to guess


  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill("")); // 6 rows
  const [usedKeys, setUsedKeys] = useState({}); // Tracks used keys and their states
  const [isGameOver, setIsGameOver] = useState(false); // Tracks if the game is over
  const [message, setMessage] = useState(""); // Displays win/loss messages


  const checkWord = async (word) => {
    try {
      console.log("Guess: "+word + " Solution: "+ solution);
      if(word.toUpperCase() === solution){
        return 1;
      }
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
      if (!response.ok) {
        console.log(`Error: Invalid word. Status: ${response.status}`);

        return 0; // Return 0 if there's an error in the response
      }
      return 1; // Return 1 if the word is valid
    } catch (error) {
    console.log(`Network error: ${error.message}`);
      return 0; // Return 0 if a network error occurs
    }
  };


  const handleKeyPress = useCallback(
    (key) => {
      if (isGameOver) return; // Stop further input if the game is over
        
      if (key === "Enter") {

        checkWord(currentGuess).then((result) => {

            if(result){
                if (currentGuess.length === 5) {
                    const nextGuesses = [...guesses];
                    const emptyIndex = nextGuesses.findIndex((guess) => guess === "");
                    if (emptyIndex !== -1) {
                      nextGuesses[emptyIndex] = currentGuess.toUpperCase();
                      setGuesses(nextGuesses);
                      setCurrentGuess("");
          
                      // Check if the guess is correct
                      if (currentGuess.toUpperCase() === solution) {
                        setIsGameOver(true);
                        setMessage("Congratulations! You guessed the word!");
                        return;
                      }
          
                      // Update usedKeys
                      const updatedKeys = { ...usedKeys };
                      currentGuess.split("").forEach((letter, index) => {
                        if (solution[index] === letter) {
                          updatedKeys[letter] = "correct";
                        } else if (solution.includes(letter)) {
                          updatedKeys[letter] = "present";
                        } else {
                          updatedKeys[letter] = "absent";
                        }
                      });
                      setUsedKeys(updatedKeys);
          
                      // Check if it's the last guess and the player loses
                      if (emptyIndex === guesses.length - 1) {
                        setIsGameOver(true);
                        setMessage(`Game Over! The word was ${solution}.`);
                      }
                    }
                  }
            } else{
                setMessage(`Not a valid word`);
            }
            
        });


        
      } else if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [currentGuess, guesses, solution, usedKeys, isGameOver]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <WordleGrid
        guesses={guesses}
        currentGuess={currentGuess}
        solution={solution}
      />
      <Keyboard onKeyPress={handleKeyPress} usedKeys={usedKeys} />
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default App;
