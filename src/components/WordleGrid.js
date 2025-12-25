import {React, useState} from "react";
import "./WordleGrid.css";

function WordleGrid({ guesses, currentGuess, solution }) {

  const currentRow = useState(0);


  const evaluateGuess = (guess) => {
    const letterCount = {};
  
    // Count occurrences of each letter in the solution
    solution.split('').forEach((letter) => {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
  
    // First pass: Mark correct letters and reduce their count
    const result = guess.split('').map((letter, index) => {
      if (solution[index] === letter) {
        letterCount[letter] -= 1;
        return 'correct';
      }
      return null;
    });
  
    // Second pass: Mark present and absent letters
    guess.split('').forEach((letter, index) => {
      if (result[index] === null) {
        if (solution.includes(letter) && letterCount[letter] > 0) {
          letterCount[letter] -= 1;
          result[index] = 'present';
        } else if (letter === ' ') {
          result[index] = 'clean';
        } else {
          result[index] = 'absent';
        }
      }
    });
  
    return result;
  };
  

  return (
    <div className="wordle-grid">
      {guesses.map((guess, rowIndex) => {
        // Render the current guess only in the first empty row
        const isCurrentRow = guesses[rowIndex] === "" && guesses.indexOf("") === rowIndex;

        // Evaluate the guess if it's not the current guess
        const evaluation = !isCurrentRow ? evaluateGuess(guess.padEnd(5)) : [];

        return (
          <div className={`wordle-row ${isCurrentRow?'current':''}`}  key={rowIndex}>
            {(isCurrentRow ? currentGuess.padEnd(5) : guess.padEnd(5))
              .split("")
              .map((letter, letterIndex) => (
                <div
                  key={letterIndex}
                  className={`wordle-cell ${
                    !isCurrentRow ? evaluation[letterIndex] : ""
                  }`}
                >
                  {letter.toUpperCase()}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default WordleGrid;
