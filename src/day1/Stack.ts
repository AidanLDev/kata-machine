type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head; // Move the cur head to be prev
        this.head = node; // set the new node to be head
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const head = this.head as Node<T>;
        if (!this.head) {
            this.head = undefined;
            return head?.value;
        }

        this.head = head.prev;

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
