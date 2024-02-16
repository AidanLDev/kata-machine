interface Node<T> {
    val: T;
    next?: Node<T> | undefined;
    prev?: Node<T> | undefined;
    head?: Node<T> | undefined;
    tail?: Node<T> | undefined;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T> | undefined;
    private tail?: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { val: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }
        if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        }
        this.length++;
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur?.next;
        }
        cur = cur as Node<T>;
        const node = { val: item } as Node<T>;

        node.next = cur;
        node.prev = cur.prev;
        cur.prev = node;

        if (node.prev) {
            node.prev.next = cur;
        }
    }

    append(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let cur = this.head;
        for (let i = 0; cur && i < this.length; i++) {
            if (cur.val === item) {
                break;
            }
            cur = cur.next;
        }

        if (!cur) {
            return undefined;
        }
        this.length--;

        if (this.length === 0) {
            const out = this.head?.val;
            this.head = this.tail = undefined;
            return out;
        }

        if (cur.prev) {
            cur.prev.next = cur.next;
        }

        if (cur.next) {
            cur.next.prev = cur.prev;
        }

        cur.prev = cur.next = undefined;

        if (cur === this.head) {
            this.head = cur.next;
        }

        if (cur === this.tail) {
            this.tail = cur.prev;
        }
        return cur.val;
    }

    get(idx: number): T | undefined {
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur?.next;
        }
        return cur?.val;
    }

    removeAt(idx: number): T | undefined {
        let cur = this.head;
        for (let i = 0; i < idx && cur; i++) {
            cur = cur?.next;
        }

        if (!cur) {
            return undefined;
        }

        this.length--;

        if (this.length === 0 || idx === 0) {
            const out = this.head?.val;
            this.head = this.tail = undefined;
            return out;
        }

        if (cur.prev) {
            cur.prev.next = cur.next;
        }

        if (cur.next) {
            cur.next.prev = cur.prev;
        }

        cur.prev = cur.next = undefined;

        if (cur === this.head) {
            this.head = cur.next;
        }

        if (cur === this.tail) {
            this.tail = cur.prev;
        }
        return cur.val;
    }
}
