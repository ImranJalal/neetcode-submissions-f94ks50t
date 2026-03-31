class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        for(let l = 0; l < 2; l++){
            for(let num of nums){
                ans.push(num)
            }
        }
        return ans
    }
}
