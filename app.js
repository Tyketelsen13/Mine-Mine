// Grid layout (28 x 28)
// 0 - pac-dot, 1 - wall, 2 - ghost-lair, 3 - power-pellet, 4 - empty
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

let currentLevel = 0;

const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const levelDisplay = document.getElementById('level');
const restartBtn = document.getElementById('restart-btn');
const gameOverDisplay = document.getElementById('game-over');
const winDisplay = document.getElementById('win-message');
const levelCompleteDisplay = document.getElementById('level-complete');
const finalScoreDisplay = document.getElementById('final-score');
const winScoreDisplay = document.getElementById('win-score');
const nextLevelDisplay = document.getElementById('next-level');

let squares = [];
let score = 0;
let lives = 3;
let pacmanCurrentIndex = 490;
let direction = 0;
let nextDirection = 0;
let ghosts = [
    { currentIndex: 348, className: 'blinky', isScared: false, timerId: null },
    { currentIndex: 376, className: 'pinky', isScared: false, timerId: null },
    { currentIndex: 351, className: 'inky', isScared: false, timerId: null },
    { currentIndex: 379, className: 'clyde', isScared: false, timerId: null }
];
let pacmanTimerId = null;

// Create the game board
function createBoard() {
    grid.innerHTML = '';
    squares = [];
    const currentLayout = layouts[currentLevel];
    
    for (let i = 0; i < currentLayout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
        
        if (currentLayout[i] === 0) {
            square.classList.add('pac-dot');
        } else if (currentLayout[i] === 1) {
            square.classList.add('wall');
        } else if (currentLayout[i] === 3) {
            square.classList.add('power-pellet');
        }
    }
    
    squares[pacmanCurrentIndex].classList.add('pacman');
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add('ghost', ghost.className);
    });
}

// Move Pacman
function movePacman(e) {
    switch(e.keyCode) {
        case 37:
            nextDirection = -1;
            break;
        case 38:
            nextDirection = -width;
            break;
        case 39:
            nextDirection = +1;
            break;
        case 40:
            nextDirection = +width;
            break;
    }
}

// Continuous movement
function movePacmanContinuously() {
    // Try to change direction if a new direction was pressed
    if (nextDirection !== direction) {
        let testIndex = pacmanCurrentIndex + nextDirection;
        
        // Check if the new direction is valid
        let canMove = false;
        if (nextDirection === -1 && pacmanCurrentIndex % width !== 0 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;
        } else if (nextDirection === +1 && pacmanCurrentIndex % width < width - 1 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;
        } else if (nextDirection === -width && pacmanCurrentIndex - width >= 0 && !squares[testIndex].classList.contains('wall')) {
            canMove = true;
        } else if (nextDirection === +width && pacmanCurrentIndex + width < width * width && !squares[testIndex].classList.contains('wall')) {
            canMove = true;
        }
        
        if (canMove) {
            direction = nextDirection;
        }
    }
    
    squares[pacmanCurrentIndex].classList.remove('pacman');
    
    let nextIndex = pacmanCurrentIndex + direction;
    
    // Move in current direction if possible
    if (direction === -1) {
        if (pacmanCurrentIndex % width !== 0 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
        if (pacmanCurrentIndex === 363) pacmanCurrentIndex = 391;
    } else if (direction === +1) {
        if (pacmanCurrentIndex % width < width - 1 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
        if (pacmanCurrentIndex === 392) pacmanCurrentIndex = 364;
    } else if (direction === -width) {
        if (pacmanCurrentIndex - width >= 0 && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
    } else if (direction === +width) {
        if (pacmanCurrentIndex + width < width * width && !squares[nextIndex].classList.contains('wall')) {
            pacmanCurrentIndex = nextIndex;
        }
    }
    
    squares[pacmanCurrentIndex].classList.add('pacman');
    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();
}

// Eat pac-dot
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score += 10;
        scoreDisplay.textContent = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
    }
}

// Eat power pellet
function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score += 50;
        scoreDisplay.textContent = score;
        squares[pacmanCurrentIndex].classList.remove('power-pellet');
        
        ghosts.forEach(ghost => ghost.isScared = true);
        
        setTimeout(() => {
            ghosts.forEach(ghost => ghost.isScared = false);
        }, 10000);
    }
}

// Move ghosts
function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    
    ghost.timerId = setInterval(() => {
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }
        } else {
            direction = directions[Math.floor(Math.random() * directions.length)];
        }
        
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
            ghost.currentIndex = 348;
            score += 100;
            scoreDisplay.textContent = score;
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost', 'scared-ghost');
        }
        
        checkForGameOver();
    }, 200);
}nextDirection = 0;
                

// Check for game over
function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !ghosts.some(ghost => ghost.isScared && ghost.currentIndex === pacmanCurrentIndex)) {
        
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        clearInterval(pacmanTimerId);
        document.removeEventListener('keydown', movePacman);
        lives--;
        livesDisplay.textContent = lives;
        
        if (lives === 0) {
            finalScoreDisplay.textContent = score;
            gameOverDisplay.classList.remove('hidden');
        } else {
            setTimeout(() => {
                squares[pacmanCurrentIndex].classList.remove('pacman');
                pacmanCurrentIndex = 490;
                squares[pacmanCurrentIndex].classList.add('pacman');
                direction = 0;
                
                ghosts.forEach(ghost => {
                    squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                });
                
                ghosts[0].currentIndex = 348;
                ghosts[1].currentIndex = 376;
                ghosts[2].currentIndex = 351;
                ghosts[3].currentIndex = 379;
                
                ghosts.forEach(ghost => {
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
                    ghost.isScared = false;
                    moveGhost(ghost);
                });
                
                pacmanTimerId = setInterval(movePacmanContinuously, 100);
                document.addEventListener('keydown', movePacman);
            }, 1000);
        }
    }
}

// Check for win
function checkForWin() {
    const dotsLeft = document.querySelectorAll('.pac-dot, .power-pellet').length;
    if (dotsLeft === 0) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        clearInterval(pacmanTimerId);
        document.removeEventListener('keydown', movePacman);
        
        // Check if there are more levels
        if (currentLevel < layouts.length - 1) {
            // Show level complete message
            nextLevelDisplay.textContent = currentLevel + 2;
            levelCompleteDisplay.classList.remove('hidden');
            
            setTimeout(() => {
                levelCompleteDisplay.classList.add('hidden');
                nextLevel();
            }, 2000);
        } else {
            // All levels complete - show win message
            winScoreDisplay.textContent = score;
            winDisplay.classList.remove('hidden');
        }
    }
}

// Load next level
function nextLevel() {
    currentLevel++;
    levelDisplay.textContent = currentLevel + 1;
    
    // Reset positions
    squares[pacmanCurrentIndex].classList.remove('pacman');
    pacmanCurrentIndex = 490;
    direction = 0;
    nextDirection = 0;
    
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
    });
    
    ghosts[0].currentIndex = 348;
    ghosts[1].currentIndex = 376;
    ghosts[2].currentIndex = 351;
    ghosts[3].currentIndex = 379;
    
    // Recreate board with new level
    createBoard();
    
    // Restart ghosts and pacman
    ghosts.forEach(ghost => {
        ghost.isScared = false;
        moveGhost(ghost);
    });
    
    pacmanTimerId = setInterval(movePacmanContinuously, 150);
    document.addEventListener('keydown', movePacman);
}

// Restart game
function restartGame() {
    window.location.reload();
}

// Initialize game
createBoard();
ghosts.forEach(ghost => moveGhost(ghost));
pacmanTimerId = setInterval(movePacmanContinuously, 150);
document.addEventListener('keydown', movePacman);
restartBtn.addEventListener('click', restartGame);
