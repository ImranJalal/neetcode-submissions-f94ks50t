class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let right = 0; right < nums.length; right++){
            if(nums[right] === nums[right+1]){
                return true
            } 
        }
        return false
    }
}
