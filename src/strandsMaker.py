import random
import string

def create_strands_grid(words):
    # Validate total characters
    total_chars = sum(len(word) for word in words)
    if total_chars != 48:
        raise ValueError("The total number of characters in the words must equal 48.")

    # Initialize an empty 6x8 grid
    grid_size = (6, 8)
    grid = [["" for _ in range(grid_size[1])] for _ in range(grid_size[0])]

    # Directions for moving: horizontal, vertical, diagonal
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)]

    def is_valid_cell(r, c):
        """Check if the cell is within bounds and empty."""
        return 0 <= r < grid_size[0] and 0 <= c < grid_size[1] and grid[r][c] == ""

    def place_word(word):
        """Attempt to place a word on the grid."""
        attempts = 0
        while attempts < 100:  # Try up to 100 times to place the word
            # Random starting position
            start_r = random.randint(0, grid_size[0] - 1)
            start_c = random.randint(0, grid_size[1] - 1)

            if not is_valid_cell(start_r, start_c):
                attempts += 1
                continue

            # Attempt to place the word
            r, c = start_r, start_c
            path = [(r, c)]  # Keep track of the path
            grid[r][c] = word[0]  # Place the first letter

            for letter in word[1:]:
                random.shuffle(directions)  # Shuffle directions for randomness
                placed = False
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if is_valid_cell(nr, nc):
                        grid[nr][nc] = letter
                        path.append((nr, nc))
                        r, c = nr, nc
                        placed = True
                        break
                if not placed:  # If no valid cell found, reset and retry
                    for pr, pc in path:  # Clear the current path
                        grid[pr][pc] = ""
                    break
            else:
                return True  # Successfully placed the word

            attempts += 1

        return False

    # Place each word on the grid
    for word in words:
        if not place_word(word):
            raise ValueError(f"Unable to place the word '{word}' in the grid.")

    # Fill remaining empty spaces with random letters
    for r in range(grid_size[0]):
        for c in range(grid_size[1]):
            if grid[r][c] == "":
                grid[r][c] = random.choice(string.ascii_uppercase)

    return grid

def display_grid(grid):
    for row in grid:
        print(" ".join(row))

# Example words with 48 characters total

words = ["Cheese", "Pate", "Sundaylunching", "Crisps", "gammon", "STRAWBERRIES"]  # Example words with 48 characters in total

grid = create_strands_grid(words)
display_grid(grid)

