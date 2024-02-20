export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const cur = q.shift() as number;
        if (cur === needle) {
            break;
        }

        const adjs = graph[cur];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = cur;
            q.push(i);
        }
        seen[cur] = true;
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }
    // build it backwords
    let cur = needle;
    const out: number[] = [];

    while (prev[cur] !== -1) {
        out.push(cur);
        cur = prev[cur];
    }

    return [source].concat(out.reverse());
}
