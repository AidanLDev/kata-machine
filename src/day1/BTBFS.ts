export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {
        const cur = queue.shift() as BinaryNode<number>;

        // search
        if (cur.value === needle) {
            return true;
        }

        if (cur.left) {
            queue.push(cur.left);
        }

        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return false;
}
