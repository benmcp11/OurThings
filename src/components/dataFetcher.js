// dataFetcher.js

/**
 * Helper function to calculate which puzzle key to use based on
 * the current date. For example, January 1 = puzzle #1, January 2 = #2, etc.
 * This essentially gives the "day of the year".
 */
function getPuzzleKeyFromDate(date = new Date()) {
  // Start of the current year (month=0, day=1 => Jan 1)
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  
  // Difference in milliseconds between now and Jan 1
  const diff = date - startOfYear + (startOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  
  // Number of milliseconds in one day
  const oneDay = 1000 * 60 * 60 * 24;
  
  // Convert that difference to an integer day count
  return Math.floor(diff / oneDay);
}

/**
 * Fetches the puzzle data for a given puzzle type (e.g. 'connections').
 * The "puzzleKey" is determined automatically by today's day of the year.
 *
 * For example:
 *    - Jan 1, 2025 => puzzleKey = 1
 *    - Jan 2, 2025 => puzzleKey = 2
 *    - ...
 *
 * @param {string} puzzleType - e.g. 'connections'
 * @returns {Promise<object | null>} - Returns the puzzle data for that day, or null if an error occurs
 */
export async function fetchPuzzleData(puzzleType) {
  // Derive puzzleKey from the current date
  const puzzleKey = getPuzzleKeyFromDate().toString();

  try {
    const response = await fetch("/data.json");
    const data = await response.json();

    // The data is assumed to look like:
    // {
    //   "connections": {
    //       "1": { ...puzzleForDay1... },
    //       "2": { ...puzzleForDay2... },
    //       ...
    //   },
    //   "someOtherPuzzleType": {
    //       "1": { ... },
    //       "2": { ... },
    //       ...
    //   }
    // }
    // So we return data["connections"]["1"], for example.

    // Safely check if your puzzleType and puzzleKey exist in the data
    if (data[puzzleType] && data[puzzleType][puzzleKey]) {
      return data[puzzleType][puzzleKey];
    } else {
      console.error(
        `Puzzle not found for type "${puzzleType}" and key "${puzzleKey}".`
      );
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
