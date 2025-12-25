from christmas.src.utils.strandsChecker import check_letter, grid

# python

def test_check_letter_up_default():
    # position (1,0) has 'T', above it (0,0) is 'S'
    assert check_letter("S", grid, (1, 0)) is True

def test_check_letter_down():
    # from (0,0) down is (1,0) which is 'T'
    assert check_letter("T", grid, (0, 0), "d") is True

def test_check_letter_left_and_right():
    # from (0,1) left is (0,0) -> 'S'
    assert check_letter("S", grid, (0, 1), "l") is True
    # from (0,0) right is (0,1) -> 'E'
    assert check_letter("E", grid, (0, 0), "r") is True

def test_check_letter_diagonals():
    # down-right from (0,0) -> (1,1) is 'A'
    assert check_letter("A", grid, (0, 0), "dr") is True
    # down-left from (0,1) -> (1,0) is 'T'
    assert check_letter("T", grid, (0, 1), "dl") is True
    # up-right from (1,0) -> (0,1) is 'E'
    assert check_letter("E", grid, (1, 0), "ur") is True
    # up-left from (1,1) -> (0,0) is 'S'
    assert check_letter("S", grid, (1, 1), "ul") is True

def test_check_letter_out_of_bounds():
    max_row = len(grid) - 1
    max_col = len(grid[0]) - 1
    # up from top row
    assert check_letter("X", grid, (0, 0), "u") is False
    # left from leftmost column
    assert check_letter("X", grid, (0, 0), "l") is False
    # down from bottom row
    assert check_letter("X", grid, (max_row, 0), "d") is False
    # right from rightmost column
    assert check_letter("X", grid, (0, max_col), "r") is False
    # diagonal out-of-bounds (up-left from top-left)
    assert check_letter("X", grid, (0, 0), "ul") is False

def test_check_letter_invalid_direction():
    assert check_letter("S", grid, (1, 0), "invalid_dir") is False

def test_check_letter_direction_case_insensitive():
    # 'U' should behave same as 'u'
    assert check_letter("S", grid, (1, 0), "U") is True

def test_check_letter_mismatch_letter_returns_false():
    # from (0,0) right is 'E' so asking for different letter should be False
    assert check_letter("Z", grid, (0, 0), "r") is False