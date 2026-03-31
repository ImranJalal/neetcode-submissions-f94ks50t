class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b)
        let l = 1
        for(let r = 1; r < nums.length; r++){
            if(nums[l] === nums[r-1]){
                return true
            }
            l++
        }
        return false
    }
}
