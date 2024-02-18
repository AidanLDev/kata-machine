function search(cur: BinaryNode<number> | null, needle: number): boolean {
    if (!cur) {
        return false;
    }

    if (cur.value === needle) {
        return true;
    }

    if (cur.value < needle) {
        return search(cur.right, needle);
    } else {
        return search(cur.left, needle);
    }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
