/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dictionary = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if(dictionary[complement] !== undefined){
            return [dictionary[complement], i];
        }
        
        dictionary[nums[i]] = i;
    }
};