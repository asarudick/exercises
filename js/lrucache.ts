export class ListN<T> {
    next: ListN<T> | null | undefined;
    prev: ListN<T> | null | undefined;
    value: T;
    key: number | null | undefined;
    constructor(value: T, key?: number | null | undefined) {
        this.value = value;
        this.key = key;
        this.next = null;
        this.prev = null;
    }

    remove(): ListN<T> {
        let next = this.next;

        if (this.prev) {
            this.prev.next = next;
        }
        this.next = null;

        if (next?.prev) {
            next.prev = this.prev;
        }

        this.prev = null;

        return this;
    }
}

export class List<T> {
    head: ListN<T> | null | undefined;
    tail: ListN<T> | null | undefined;
    size: number;
    constructor() {
        this.size = 0;
        this.tail = null;
        this.head = null;
    }
    push(node: ListN<T>) {
        if (this.head) {
            this.head.next = node;
        }
        node.prev = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }
    pop(): ListN<T> | null {
        let head = this.head;
        if (head?.prev) {
            head.prev.next = null;
        }
        this.head = head?.prev;
        if (head) {
            this.remove(head);
        }
        return head ?? null;
    }
    unshift(node: ListN<T>) {
        if (this.tail) {
            this.tail.prev = node;
        }
        node.next = this.tail;
        this.tail = node;
        this.size++;
    }
    shift() {
        let tail = this.tail;
        if (tail?.next) {
            tail.next.prev = null;
        }
        this.tail = tail?.next;
        if (tail) {
            this.remove(tail);
        }
        return tail;
    }
    log() {
        console.log(this.toArray());
    }
    toArray(): T[] {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.value);
            current = current.prev;
        }
        return list;
    }
    remove(node: ListN<T>) {
        if (!node) {
            return;
        }
        if (!node.next && !node.prev) {
            return;
        }
        if (node === this.tail) {
            this.tail = node.next;
        }
        if (node === this.head) {
            this.head = node.prev;
        }
        node.remove();
        this.size--;
    }
}
export default class LRUCache {
    cache: { [key: number]: ListN<number> };
    history: List<number>;
    capacity: number;
    size: number;
    constructor(capacity: number) {
        this.cache = {};
        this.capacity = capacity;
        this.history = new List<number>();
        this.size = 0;
    }

    get(key: number): number {
        let result = this.cache[key]?.value;
        this.use(key);
        return result == null ? -1 : result;
    }

    put(key: number, value: number): void {
        let result = this.cache[key];
        if (result == null) {
            this.cache[key] = new ListN<number>(value, key);
            this.size++;
            this.use(key);
            return;
        }
        result.value = value;
        this.use(key);
    }

    use(key: number): void {
        const node = this.cache[key];
        if (!node) {
            return;
        }
        this.history.remove(node);
        this.history.push(node);
        this.freeCapacity();
    }

    freeCapacity(): void {
        if (this.size <= this.capacity) {
            return;
        }

        const node = this.history.shift();
        if (node?.key) {
            delete this.cache[node.key];
            this.size--;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */