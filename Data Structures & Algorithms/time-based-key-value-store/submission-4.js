class TimeMap {
    constructor() {
        this.keyStore = new Map();
        this.timeStamp = [];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let ts = [timestamp, value];
        if (this.keyStore.has(key)) {
            let val = this.keyStore.get(key);
            val.push(ts);
            this.keyStore.set(key, val);
        } else {
            this.keyStore.set(key, [ts]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // console.log("->", this.keyStore);
        // console.log("->", timestamp);

        if (this.keyStore.has(key)) {
            // console.log("->>>>", this.keyStore.get(key).value);
            let val = this.keyStore.get(key);
            let res = ''
            // console.log("->> val >>", val);

            let l = 0,
                r = val.length - 1,
                mid = 0;

            while (l <= r) {
                mid = Math.floor((l + r) / 2);

                // if (val[mid][0] == timestamp) {
                //     return val[mid][1];
                // }

                // console.log('mid ->', mid, l, r)
                if (val[mid][0] <= timestamp) {
                    res = val[mid][1]
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
                // console.log('mid ->', mid, l, r)
            }
            // console.log("->val", key, timestamp, mid, val);
            return res;
        }

        return '';
    }
}
