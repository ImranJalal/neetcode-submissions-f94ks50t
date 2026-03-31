class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let best = 0;
        let count = 0;

        for(const array of nums){
            count = array === 1 ? count + 1 : 0;
            best = Math.max(best, count)
        }
        return best
    };
}

