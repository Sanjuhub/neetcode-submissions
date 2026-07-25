/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start)

        // console.log('->>', intr)
        // console.log('->>', intervals)


        for(let i=0; i < intervals.length - 1; i++){
            // console.log('->', intervals[i], intervals[i+1])

            if(intervals[i].end > intervals[i+1].start){
                return false
            }
        }
        return true
    }
}
