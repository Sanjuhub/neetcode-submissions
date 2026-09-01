class LinkedList {
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

class MyHashSet {
    
    constructor() {
        this.head = new LinkedList(-1)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        console.log('->', this.head)
        let node = new LinkedList(key)

        if(this.contains(key)){
            return
        }

        let cur = this.head
        while(cur && cur.next){
            cur = cur.next
        }
        // console.log('->', cur)
        cur.next = node
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.head
        let prev = this.head
        while(cur){
            if(cur.val == key){
                prev.next = cur.next
                return
            }
            prev = cur
            cur = cur.next
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let cur = this.head
        while(cur){
            if(cur.val == key){
                return true
            }
            cur = cur.next
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
