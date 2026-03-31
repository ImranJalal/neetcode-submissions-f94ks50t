class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // setting a vaiable to nums.length due to re use
        let n = nums.length;
        // setting up a pre defined sized that is empty
        let ans = new Array(2 * n);
        for(let i = 0; i < n; i++){
            // difficutl to read but read it right to left 
            // test case 
            // nums[1,4,1,2]
            // start reading right to left 
            // ans[i+n] is ans[0+3]
            // nums[2]= value is 2 
            // ans now hold 2 at two locations 
            // why two location made made empty space for it in the array
            // continue 
            ans[i] = ans[i + n] = nums[i];
        }
        return ans
    }
}
