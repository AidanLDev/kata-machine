function walk(
    graph: WeightedAdjacencyList,
    cur: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // Base cases

    if (seen[cur]) {
        return false;
    }

    seen[cur] = true;

    // pre
    path.push(cur);
    if (cur === needle) {
        return true;
    }

    // recurse
    const list = graph[cur];

    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null;
    }
    return path;
}
