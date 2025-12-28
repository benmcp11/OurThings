
def is_valid_move(x, y, rows, cols):
    return 0 <= x < rows and 0 <= y < cols

def dfs(grid, word, index, x, y, path, directions, rows, cols):
    if index == len(word):
        return [path]
    
    # This variable will store all valid paths starting from (x, y) for the given word
    paths = []
    
    # Explore in all 8 directions
    for dx, dy in directions:
        nx, ny = x + dx, y + dy
        if is_valid_move(nx, ny, rows, cols) and grid[nx][ny] == word[index]:
            paths.extend(dfs(grid, word, index + 1, nx, ny, path + [(nx, ny)], directions, rows, cols))
    
    return paths

def find_word_paths(grid, word):
    rows = len(grid)
    cols = len(grid[0])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, 1), (-1, 1), (1, -1)]  # 8 possible directions
    paths = []
    
    # Search for the first letter of the word in the grid
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == word[0]:
                paths.extend(dfs(grid, word, 1, i, j, [(i, j)], directions, rows, cols))
    return paths

def check_unique_paths(grid, words):
    all_word_paths = {}
    duplicate = {}
    

    for word in words:
        paths = find_word_paths(grid, word)
        unique = True
        print(word)

        if paths == []:
            duplicate[word] = []
            continue

        paths = [path for path in paths if len(set(path)) == len(word)]

        # Check if the paths are unique by converting them into sets of tuples
        unique_paths = set(tuple(path) for path in paths)


        if len(unique_paths) != 1:
            unique = False
        
            all_word_paths[word] = [unique_paths, unique]
            duplicate[word] = unique_paths
    

    if duplicate != {}:
        return False, duplicate

    else:
        return True, all_word_paths
    

# Example Usage
grid = [
    ["S", "E", "B", "Y", "R", "R"],
    ["T", "A", "U", "L", "E", "M"],
    ["T", "L", "N", "K", "T", "O"],
    ["O", "N", "O", "Y", "H", "D"],
    ["I", "S", "W", "T", "E", "H"],
    ["T", "P", "I", "S", "R", "C"],
    ["E", "A", "S", "I", "Y", "A"],
    ["S", "M", "T", "P", "P", "H"],
]
words = ["MERRY", "LAST", "HAPPY", "STEPINTO", "DOTHEYKNOWITS", "BLUE", "CHRISTMAS"]

# words = ["STEPINTO"]

valid, word_paths = check_unique_paths(grid, words)
if valid:
    # print("All words have unique paths:", word_paths)
    print(1)
else:
    print("*"*20)
    print("CONFLICT")
    
    for word in word_paths.keys():
        print("-"*20)
        print(word)

        if word_paths[word] == []:
            print("NO PATH FOUND")
            continue
        
        for path in word_paths[word]:
            print("-"*20)

            lines = grid.copy()


            for i in range(len(lines)):
                for j in range(len(lines[i])):
                    lines[i][j] = '-'

            for l, coords in enumerate(path):
                lines[coords[0]][coords[1]] = word[l]
                # for line in lines:
                #     print(line)
                print(f"{word[l]} ->\t{coords}" )


            for line in lines:
                print(line)
        
