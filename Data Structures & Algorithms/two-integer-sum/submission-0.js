class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // The only way to Solve this is by hashMapping this problem
        // You first creat a Map of all the values at an index
        const prevMap = new Map();

        for(let i = 0; i < nums.length; i++){
            // Target - Input value Equals the complement for what to add to get the target value
            const complement = target - nums[i];

            // Condition check is the map and methoding we are using is .has which just 
            // checks if we have that value
            if(prevMap.has(complement)){
                // return the prevMap index the .get is a method of Map
                // map captures the value and index 
                // example nums = [3,4,5,6], target = 7 
                // 7 - 3 = 4 
                // map will check if we have value 4 if not store value 3 at index 0
                // 7 - 4 = 3 
                // map will check if we have value 3 if we do return the indexes otherwise store 4 at index 1
                return [prevMap.get(complement), i]
            } 
            // storing the value we are check at index 
            prevMap.set(nums[i], i)
        }
        // just in case we do not get anything 
        return []
    }
}
