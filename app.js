/* ===========================
   GAME CONFIGURATION & LEVELS
   ===========================
   Grid layout is 28x28 = 784 total cells
   Legend:
   0 = pac-dot (small food, 10 points)
   1 = wall (boundary/obstacle)
   2 = ghost-lair (ghost starting area)
   3 = power-pellet (large food, 50 points, scares ghosts)
   4 = empty space (no collision or food)
*/

// Five unique level layouts - each level has different maze configuration
const layouts = [
    // Level 1
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
        1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ],
    // Level 2
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,
        1,3,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,3,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,
        1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,
        1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,
        1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,
        1,1,1,1,0,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,0,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,0,1,1,0,1,
        4,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,4,
        1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,
        1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,
        1,3,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,3,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ],
    // Level 3
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
        1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,
        1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,
        1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,0,0,0,0,1,
        4,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,4,
        1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,
        1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,
        1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,
        1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ],
    // Level 4
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,
        1,3,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,3,1,
        1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,
        1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,
        1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,
        1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
        1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,1,1,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,1,0,0,0,0,1,
        4,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,4,
        1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,
        1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
        1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,
        1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,
        1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,
        1,3,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,3,1,
        1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ],
    // Level 5
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,0,1,1,1,0,1,1,1,1,1,2,2,1,1,1,1,1,0,1,1,1,0,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,1,
        4,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,4,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,
        1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
];

// Track which level the player is currently on (0-4 for 5 total levels)
let currentLevel = 0;

// Width of the grid (28 cells wide, 28 cells tall)
// Width of the grid (28 cells wide, 28 cells tall)
const width = 28;

// DOM Element references for game board and UI
const grid = document.querySelector('.grid');                    // Main game grid container
const scoreDisplay = document.getElementById('score');           // Current score display
const livesDisplay = document.getElementById('lives');           // Remaining lives display
const levelDisplay = document.getElementById('level');           // Current level number display
const restartBtn = document.getElementById('restart-btn');       // Restart button
const gameOverDisplay = document.getElementById('game-over');    // Game over overlay
const winDisplay = document.getElementById('win-message');       // Victory message overlay
const levelCompleteDisplay = document.getElementById('level-complete'); // Level transition overlay
const finalScoreDisplay = document.getElementById('final-score'); // Score shown on game over
const winScoreDisplay = document.getElementById('win-score');    // Score shown on victory
const nextLevelDisplay = document.getElementById('next-level');  // Next level number display

/* ===========================
   GAME STATE VARIABLES
   ===========================*/

let squares = [];              // Array of all grid cell DOM elements (784 cells)
let score = 0;                 // Player's current score
let lives = 3;                 // Remaining lives (game over at 0)
let pacmanCurrentIndex = 490;  // Pacman's position in the grid (starts bottom-center)
let direction = 0;             // Current movement direction
let nextDirection = 0;         // Queued direction when player presses arrow key

// Ghost configuration - 4 ghosts with unique colors and starting positions
let ghosts = [
    { currentIndex: 348, className: 'blinky', isScared: false, timerId: null }, // Red ghost
    { currentIndex: 376, className: 'pinky', isScared: false, timerId: null },  // Pink ghost
    { currentIndex: 351, className: 'inky', isScared: false, timerId: null },   // Cyan ghost
    { currentIndex: 379, className: 'clyde', isScared: false, timerId: null }   // Orange ghost
];

let pacmanTimerId = null;      // Interval timer for Pacman's continuous movement

/* ===========================
   BOARD CREATION
   ===========================*/

/**
 * Creates the game board by generating 784 grid cells (28x28)
 * Applies CSS classes based on the current level's layout
 * Places Pacman and ghosts in their starting positions
 */
function createBoard() {
    grid.innerHTML = '';  // Clear existing board
    squares = [];         // Reset squares array
    const currentLayout = layouts[currentLevel];  // Get layout for current level
    
    // Loop through all 784 cells in the layout
    for (let i = 0; i < currentLayout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
        
        // Apply CSS class based on cell type
        if (currentLayout[i] === 0) {
            square.classList.add('pac-dot');       // Small food pellet (10 points)
        } else if (currentLayout[i] === 1) {
            square.classList.add('wall');          // Maze wall (blocks movement)
        } else if (currentLayout[i] === 3) {
            square.classList.add('power-pellet');  // Power pellet (50 points, scares ghosts)
        }
        // Note: 2 (ghost-lair) and 4 (empty) don't need special classes
    }
    
    // Place Pacman at starting position
    squares[pacmanCurrentIndex].classList.add('pacman');
    
    // Place all ghosts at their starting positions
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add('ghost', ghost.className);
    });
}

/* ===========================
   PACMAN MOVEMENT
   ===========================*/

/**
 * Handles keyboard input for Pacman movement
 * Sets nextDirection which will be processed in movePacmanContinuously()
 * Direction values: -1 (left), +1 (right), -width (up), +width (down)
 * @param {KeyboardEvent} e - The keydown event
 */
function movePacman(e) {
    switch(e.keyCode) {
        case 37:  // Left arrow
            nextDirection = -1;
            break;
        case 38:  // Up arrow
            nextDirection = -width;
            break;
        case 39:  // Right arrow
            nextDirection = +1;
            break;
        case 40:  // Down arrow
            nextDirection = +width;
            break;
    }
}

/**
 * Main game loop for Pacman - runs every 150ms
 * Handles direction changes, collision detection, and continuous movement
 * Uses direction queuing: attempts to change to nextDirection if valid, 
 * otherwise continues in current direction
 */
function movePacmanContinuously() {
    // Try to change direction if player pressed a new arrow key
    if (nextDirection !== direction) {
        let testIndex = pacmanCurrentIndex + nextDirection;
        
        // Validate if the new direction is valid (not wall, not out of bounds)
        let canMove = false;
        if (nextDirection === -1 && pacmanCurrentIndex % width !== 0 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;  // Can move left (not at left edge, no wall)
        } else if (nextDirection === +1 && pacmanCurrentIndex % width < width - 1 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;  // Can move right (not at right edge, no wall)
        } else if (nextDirection === -width && pacmanCurrentIndex - width >= 0 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;  // Can move up (not at top edge, no wall)
        } else if (nextDirection === +width && pacmanCurrentIndex + width < width * width && !squares[testIndex].classList.contains('wall')) {
            canMove = true;  // Can move down (not at bottom edge, no wall)
        }
        
        // If new direction is valid, change direction
        if (canMove) {
            direction = nextDirection;
        }
    }
    
    // Remove Pacman from current position
    squares[pacmanCurrentIndex].classList.remove('pacman');
    
    let nextIndex = pacmanCurrentIndex + direction;
    
    // Execute movement in current direction if path is clear
    if (direction === -1) {  // Moving left
        if (pacmanCurrentIndex % width !== 0 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
        // Tunnel wrap: left edge to right edge
        if (pacmanCurrentIndex === 363) pacmanCurrentIndex = 391;
    } else if (direction === +1) {  // Moving right
        if (pacmanCurrentIndex % width < width - 1 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
        // Tunnel wrap: right edge to left edge
        if (pacmanCurrentIndex === 392) pacmanCurrentIndex = 364;
    } else if (direction === -width) {  // Moving up
        if (pacmanCurrentIndex - width >= 0 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
    } else if (direction === +width) {  // Moving down
        if (pacmanCurrentIndex + width < width * width && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
    }
    
    // Add Pacman to new position
    squares[pacmanCurrentIndex].classList.add('pacman');
    
    // Check for interactions after movement
    pacDotEaten();        // Check if Pacman ate a pac-dot
    powerPelletEaten();   // Check if Pacman ate a power pellet
    checkForGameOver();   // Check if Pacman hit a ghost
    checkForWin();        // Check if all dots are collected
}

/* ===========================
   SCORING & POWER-UPS
   ===========================*/

/**
 * Checks if Pacman ate a pac-dot (small food pellet)
 * Awards 10 points and removes the dot from the grid
 */
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score += 10;  // Small pellet = 10 points
        scoreDisplay.textContent = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
    }
}

/**
 * Checks if Pacman ate a power pellet (large glowing food)
 * Awards 50 points, removes pellet, and makes all ghosts scared for 10 seconds
 * Scared ghosts can be eaten for 100 points each
 */
function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score += 50;  // Power pellet = 50 points
        scoreDisplay.textContent = score;
        squares[pacmanCurrentIndex].classList.remove('power-pellet');
        
        // Make all ghosts scared (vulnerable)
        ghosts.forEach(ghost => ghost.isScared = true);
        
        // Ghosts return to normal after 10 seconds
        setTimeout(() => {
            ghosts.forEach(ghost => ghost.isScared = false);
        }, 10000);
    }
}

/* ===========================
   GHOST AI
   ===========================*/

/**
 * Controls ghost movement with random AI
 * Ghosts move every 200ms in random valid directions
 * When scared, ghosts turn blue and can be eaten for 100 points
 * @param {Object} ghost - Ghost object with currentIndex, className, isScared, timerId
 */
function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width];  // Possible directions: left, right, up, down
    let direction = directions[Math.floor(Math.random() * directions.length)];  // Random starting direction
    
    // Ghost movement interval (runs every 200ms)
    ghost.timerId = setInterval(() => {
        // Check if next square is valid (not wall, not another ghost)
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            
            // Remove ghost from current position
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
            
            // Move ghost to new position
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            
            // Apply scared appearance if ghost is vulnerable
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }
        } else {
            // Hit a wall or another ghost, pick new random direction
            direction = directions[Math.floor(Math.random() * directions.length)];
        }
        
        // Check if Pacman ate a scared ghost
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
            ghost.currentIndex = 348;  // Send ghost back to lair
            score += 100;  // Eating scared ghost = 100 points
            scoreDisplay.textContent = score;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost', 'scared-ghost');
        }
        
        // Check if ghost caught Pacman
        checkForGameOver();
    }, 200);
}nextDirection = 0;

/* ===========================
   GAME STATE CHECKS
   ===========================*/

/**
 * Checks if Pacman collided with a ghost (and ghost is not scared)
 * Decrements lives, resets positions, or shows game over screen
 */
function checkForGameOver() {
    // Check if Pacman is on same square as a non-scared ghost
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !ghosts.some(ghost => ghost.isScared && ghost.currentIndex === pacmanCurrentIndex)) {
        
        // Stop all movement
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        clearInterval(pacmanTimerId);
        document.removeEventListener('keydown', movePacman);
        
        // Lose a life
        lives--;
        livesDisplay.textContent = lives;
        
        if (lives === 0) {
            // No lives left - show game over screen
            finalScoreDisplay.textContent = score;
            gameOverDisplay.classList.remove('hidden');
        } else {
            // Still have lives - reset positions after 1 second
            setTimeout(() => {
                // Reset Pacman to starting position
                squares[pacmanCurrentIndex].classList.remove('pacman');
                pacmanCurrentIndex = 490;
                squares[pacmanCurrentIndex].classList.add('pacman');
                direction = 0;
                nextDirection = 0;
                
                // Remove ghosts from current positions
                ghosts.forEach(ghost => {
                    squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                });
                
                // Reset ghost positions to starting locations
                ghosts[0].currentIndex = 348;  // Blinky (red)
                ghosts[1].currentIndex = 376;  // Pinky (pink)
                ghosts[2].currentIndex = 351;  // Inky (cyan)
                ghosts[3].currentIndex = 379;  // Clyde (orange)
                
                // Restart ghost movement and reset scared state
                ghosts.forEach(ghost => {
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
                    ghost.isScared = false;
                    moveGhost(ghost);
                });
                
                // Restart Pacman movement
                pacmanTimerId = setInterval(movePacmanContinuously, 100);
                document.addEventListener('keydown', movePacman);
            }, 1000);
        }
    }
}

/**
 * Checks if all pac-dots and power pellets have been collected
 * Advances to next level or shows victory screen if all levels complete
 */
function checkForWin() {
    const dotsLeft = document.querySelectorAll('.pac-dot, .power-pellet').length;
    
    if (dotsLeft === 0) {  // All food collected
        // Stop all movement
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        clearInterval(pacmanTimerId);
        document.removeEventListener('keydown', movePacman);
        
        // Check if there are more levels
        if (currentLevel < layouts.length - 1) {
            // More levels available - show level complete message
            nextLevelDisplay.textContent = currentLevel + 2;  // Display next level number
            levelCompleteDisplay.classList.remove('hidden');
            
            // Wait 2 seconds then load next level
            setTimeout(() => {
                levelCompleteDisplay.classList.add('hidden');
                nextLevel();
            }, 2000);
        } else {
            // All 5 levels complete - show victory screen
            winScoreDisplay.textContent = score;
            winDisplay.classList.remove('hidden');
        }
    }
}

/* ===========================
   LEVEL PROGRESSION
   ===========================*/

/**
 * Advances to the next level
 * Increments level counter, resets positions, recreates board with new layout
 * Score and lives carry over between levels
 */
function nextLevel() {
    currentLevel++;  // Move to next level (0-4 for 5 levels)
    levelDisplay.textContent = currentLevel + 1;  // Update level display (1-5)
    
    // Reset Pacman position and direction
    squares[pacmanCurrentIndex].classList.remove('pacman');
    pacmanCurrentIndex = 490;  // Starting position
    direction = 0;
    nextDirection = 0;
    
    // Remove ghosts from current positions
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
    });
    
    // Reset ghost starting positions
    ghosts[0].currentIndex = 348;  // Blinky (red)
    ghosts[1].currentIndex = 376;  // Pinky (pink)
    ghosts[2].currentIndex = 351;  // Inky (cyan)
    ghosts[3].currentIndex = 379;  // Clyde (orange)
    
    // Recreate board with new level layout
    createBoard();
    
    // Restart ghost movement
    ghosts.forEach(ghost => {
        ghost.isScared = false;  // Reset scared state
        moveGhost(ghost);        // Start moving
    });
    
    // Restart Pacman movement (150ms interval)
    pacmanTimerId = setInterval(movePacmanContinuously, 150);
    document.addEventListener('keydown', movePacman);
}

/* ===========================
   GAME INITIALIZATION
   ===========================*/

/**
 * Restarts the entire game by reloading the page
 * Resets score, lives, and level to initial state
 */
function restartGame() {
    window.location.reload();
}

// Initialize game when page loads
createBoard();  // Build the initial maze (Level 1)
ghosts.forEach(ghost => moveGhost(ghost));  // Start ghost AI
pacmanTimerId = setInterval(movePacmanContinuously, 150);  // Start Pacman movement (150ms)
document.addEventListener('keydown', movePacman);  // Listen for arrow key presses
restartBtn.addEventListener('click', restartGame);  // Attach restart button handler
