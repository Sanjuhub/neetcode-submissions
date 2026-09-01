class LinkedList {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyHashSet {
    constructor() {
        this.set = new Array(10 ** 4).fill(new LinkedList(0));
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let cur = this.set[key % this.set.length];
        while (cur && cur.next) {
            if (cur.next.val == key) {
                return;
            }
            cur = cur.next;
        }

        let node = new LinkedList(key);
        cur.next = node;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.set[key % this.set.length];
        while (cur.next) {
            if (cur.next.val == key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let cur = this.set[key % this.set.length];
        while (cur.next) {
            if (cur.next.val == key) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
