const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    cur: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
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
        path.push(end);
        return true;
    }

    // 4. Seen the point already
    if (seen[cur.y][cur.x]) {
        return false;
    }

    // pre
    seen[cur.y][cur.x] = true;
    path.push(cur);

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const newCur = {
            x: cur.x + x,
            y: cur.y + y,
        };
        if (walk(maze, wall, newCur, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
