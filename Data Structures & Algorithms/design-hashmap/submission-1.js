class ListNode {
    constructor(k, value, nxt = null) {
        this.key = k;
        this.val = value;
        this.next = nxt;
    }
}

class MyHashMap {
    constructor() {
        this.arr = new Array(10 ** 4).fill(new ListNode(-1, -1));
    }

    hashKey(key) {
        return key % this.arr.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.arr[this.hashKey(key)];

        while (cur.next) {
            if (cur.next.key == key) {
                cur.next.val = value;
                return;
            }
            cur = cur.next;
        }
        let node = new ListNode(key, value);
        cur.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.arr[this.hashKey(key)];

        while (cur) {
            if (cur.key == key) {
                return cur.val;
            }
            cur = cur.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.arr[this.hashKey(key)];

        while (cur.next) {
            if (cur.next.key == key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
