function walk(
    maze: string[],
    wall: string,
    cur: Point,
    end: Point,
    seen: boolean[][],
): boolean {
    /*
    Our base cases
  */
    // 1. Off the map case
    if (
        cur.x < 0 ||
        cur.x >= maze[0].length ||
        cur.y < 0 ||
        cur.y >= maze.length
    ) {
        return false;
    }

    // 2. On a wall
    if (maze[cur.y][cur.x] === wall) {
        return false;
    }

    // 3. At the end
    if (cur.x === end.x && cur.y === end.y) {
        return true;
    }

    // 4. Seen the point already
    if (seen[cur.y][cur.x]) {
        return false;
    }

    // Store seen
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
