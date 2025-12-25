import React, { useState, useMemo, useEffect } from "react";
import "./StrandsInput.css";
import { findWordPath } from "../utils/strandsUtils";

const ROWS = 8;
const COLS = 6;
const TOTAL = ROWS * COLS;
const MIN_SPANGRAM = 6;

const emptyGrid = () =>
  Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ".")
  );

export default function StrandsInput() {
  const [grid, setGrid] = useState(emptyGrid());
  const [spangram, setSpangram] = useState("");
  const [words, setWords] = useState([""]);
  const [theme, setTheme] = useState("Enter Theme");
  const [author, setAuthor] = useState("Anonymous");
  const [manualMode, setManualMode] = useState(false);

  const flatCount = useMemo(
    () => grid.flat().filter((c) => c && c !== ".").length,
    [grid]
  );
  // Count letters based on inserted words + spangram (requirement)
  const insertedCount = useMemo(() => {
    const all = [spangram, ...words].filter(Boolean).join("").replace(/\./g, "");
    return all.length;
  }, [spangram, words]);

  const missing = TOTAL - insertedCount;
  const spangramMissing = Math.max(0, MIN_SPANGRAM - (spangram.trim().length || 0));

  // word presence state: map word -> path (or null)
  const [wordPaths, setWordPaths] = useState({});
  const [allPresent, setAllPresent] = useState(false);

  // Recompute paths whenever grid, words or spangram change
  useEffect(() => {
    const wp = {};
    const allWords = words.map((w) => (w || "").toUpperCase()).filter(Boolean);
    allWords.forEach((w) => {
      wp[w] = findWordPath(grid, w);
    });
    if (spangram && spangram.trim().length > 0) {
      const s = spangram.toUpperCase();
      wp[s] = findWordPath(grid, s);
    }
    setWordPaths(wp);

    // all present means every listed word + spangram has a path
    const required = [...allWords, ...(spangram && spangram.trim() ? [spangram.toUpperCase()] : [])];
    setAllPresent(required.length > 0 && required.every((w) => wp[w] && wp[w].length === w.length));
  }, [grid, words, spangram]);

  const updateCell = (index, value) => {
    const r = Math.floor(index / COLS);
    const c = index % COLS;
    const ch = (value || "").toUpperCase().slice(0, 1) || ".";
    setGrid((g) => {
      const ng = g.map((row) => row.slice());
      ng[r][c] = ch === "" ? "." : ch;
      return ng;
    });
  };

  const clearBoard = () => setGrid(emptyGrid());
  const clearWords = () => setWords([""]);
  const addWord = () => setWords((w) => [...w, ""]);
  const updateWord = (i, v) =>
    setWords((w) => w.map((x, idx) => (idx === i ? v.toUpperCase() : x)));
  const deleteWord = (i) => setWords((w) => w.filter((_, idx) => idx !== i));

  const handleGenerate = () => {
    // placeholder: you can wire this to your generator backend
    console.log("Generate:", { grid, spangram, words, theme, author });
    alert("Generate pressed — implement generator hook.");
  };

  return (
    <div className="strands-input-container">
      <div className="left-col">
        <form id="generate" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="spangram"><strong>Spangram (min 6 letters):</strong></label>
            <input
              id="spangram"
              type="text"
              value={spangram}
              onChange={(e) => setSpangram(e.target.value.toUpperCase())}
              className="text-input"
            />
          </div>

          <div className="form-row words-row">
            <label>Words:</label>
            <button type="button" className="btn" onClick={addWord}>Add a word</button>
          </div>

          <div id="text-container">
            {words.map((w, i) => {
              const wu = (w || "").toUpperCase();
              const present = !!(wu && wordPaths[wu]);
              return (
                <div className="text-input-row" key={i}>
                  <input
                    type="text"
                    value={w}
                    id={`w${i}`}
                    onChange={(e) => updateWord(i, e.target.value)}
                    className="text-input"
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: present ? "#2ecc71" : "#e74c3c", fontWeight: 700 }}>{present ? "✓" : "✗"}</span>
                    <button type="button" className="delete-button" onClick={() => deleteWord(i)}>X</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 8 }}>
            <label><strong>Spangram present:</strong></label>{" "}
            <span style={{ color: (spangram && wordPaths[(spangram||"").toUpperCase()]) ? "#2ecc71" : "#e74c3c", fontWeight: 700 }}>
              {(spangram && wordPaths[(spangram||"").toUpperCase()]) ? "✓" : "✗"}
            </span>
          </div>

          <input type="hidden" id="numw" name="numw" value={words.length} />

          <div className="validation-row">
            <span id="char_str" className="validation-text">
              You have {insertedCount} letters (from words + spangram). You need {missing} more.
              <br />
              Spangram needs {spangramMissing} more letters.
            </span>
            <div style={{ marginTop: 8 }}>
              <strong>All words present in grid:</strong>{" "}
              <span className={`present-indicator ${allPresent ? "yes" : "no"}`}>{allPresent ? "Yes" : "No"}</span>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn secondary" onClick={clearWords}>Clear all words</button>
            <button
              type="button"
              className="btn primary"
              onClick={handleGenerate}
              disabled={flatCount !== TOTAL || spangramMissing > 0}
              title={`Board must have exactly ${TOTAL} letters and spangram >= ${MIN_SPANGRAM}`}
            >
              Generate
            </button>

            <button
              type="button"
              className="btn"
              id="manual"
              onClick={() => setManualMode((m) => !m)}
            >
              {manualMode ? "Stop Manual" : "Place Manually"}
            </button>
          </div>
        </form>
      </div>

      <div className="right-col">
        <h3
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setTheme(e.target.textContent || "Enter Theme")}
          className="theme-heading"
        >
          {theme}
        </h3>

        <div className="meta-row">
          Author: <em id="username">{author}</em> | Completions: <em>0</em>
        </div>

        <div className="grid-preview">
          <table id="table" className="preview-table">
            <tbody>
              {grid.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => {
                    const idx = r * COLS + c;
                    // determine if this cell belongs to any found word path
                    const upper = cell === "." ? "." : cell.toUpperCase();
                    let extraClass = "";
                    Object.entries(wordPaths).forEach(([w, path]) => {
                      if (!path) return;
                      if (path.some((p) => p.row === r && p.col === c)) {
                        if (w === (spangram || "").toUpperCase()) extraClass = "highlight-spangram";
                        else extraClass = `highlight-word-${w.length}`; // simple per-word class by length
                      }
                    });

                    return (
                      <td key={c} id={`p${idx}`} className={extraClass}>
                        {manualMode ? (
                          <input
                            className="cell-input"
                            value={cell === "." ? "" : cell}
                            onChange={(e) => updateCell(idx, e.target.value)}
                            maxLength={1}
                          />
                        ) : (
                          <span className="cell-display">{cell === "." ? "." : cell}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="full-indicator" className={`full-indicator ${flatCount === TOTAL ? "full" : ""}`}>
          {flatCount === TOTAL ? "Table Full" : "Table Not Full!"}
        </div>

        <div id="manual-button-group" className="manual-buttons" style={{ display: manualMode ? "flex" : "none" }}>
          <button type="button" className="btn primary" onClick={() => { alert("Save manual - implement"); }}>Save Changes</button>
          <button type="button" className="btn" onClick={clearBoard}>Clear Board</button>
        </div>
      </div>
    </div>
  );
}