// Minimal utilities for finding straight-line word paths in a rectangular grid
// Exports: findWordPath(grid, word) -> array of {row,col} or null

export function findWordPath(grid, word) {
  // Find a path for `word` by walking adjacent cells (8-neighbors), allowing turns.
  // Cells may not be reused in a single path. Returns array of {row,col} or null.
  if (!word || word.length === 0) return null;
  const R = grid.length;
  const C = grid[0]?.length || 0;
  const W = word.toUpperCase();

  const neighbors = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  const inBounds = (r, c) => r >= 0 && r < R && c >= 0 && c < C;

  const dfs = (r, c, idx, visited) => {
    if (grid[r][c].toUpperCase() !== W[idx]) return null;
    if (idx === W.length - 1) return [{ row: r, col: c }];

    visited.add(`${r},${c}`);
    for (const [dr, dc] of neighbors) {
      const rr = r + dr;
      const cc = c + dc;
      const key = `${rr},${cc}`;
      if (!inBounds(rr, cc)) continue;
      if (visited.has(key)) continue;
      if (grid[rr][cc].toUpperCase() !== W[idx + 1]) continue;

      const tail = dfs(rr, cc, idx + 1, visited);
      if (tail) {
        visited.delete(`${r},${c}`);
        return [{ row: r, col: c }, ...tail];
      }
    }
    visited.delete(`${r},${c}`);
    return null;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c].toUpperCase() !== W[0]) continue;
      const path = dfs(r, c, 0, new Set());
      if (path) return path;
    }
  }

  return null;
}
