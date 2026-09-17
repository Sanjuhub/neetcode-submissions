class CListNode{
    constructor(val, nxt, prev){
        this.val = val
        this.next = nxt
        this.prev = prev
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.space = k
        this.left = new CListNode(0, null, null)
        this.right = new CListNode(0, null, this.left)
        this.left.next = this.right
    }
 
    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false
        }

        let cur = new CListNode(value, this.right, this.right.prev)
        this.right.prev.next = cur
        this.right.prev = cur
        this.space--
        return true
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()){
            return false
        }

        this.left.next = this.left.next.next
        this.left.next.prev = this.left
        this.space++
        return true
    }

    /**
     * @return {number}
     */
    Front() {
        if(this.isEmpty()){
            return -1
        }
        return this.left.next.val
    }

    /**
     * @return {number}
     */
    Rear() {
        if(this.isEmpty()){
            return -1
        }
        return this.right.prev.val
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next == this.right
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.space == 0
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
