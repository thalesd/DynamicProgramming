/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var mergedArrays = [];
    var i = 0, j = 0;

    while(mergedArrays.length < nums1.length + nums2.length){
        if(nums1[i] !== undefined && nums2[j] !== undefined && nums1[i] < nums2[j]) {
            mergedArrays.push(nums1[i]);
            i++;
        }
        else if(nums2[j] === undefined){
            mergedArrays.push(nums1[i]);
            i++;
        }
        else {
            mergedArrays.push(nums2[j]);
            j++;
        }
    }

    //find median
    if(mergedArrays.length % 2 == 0){
        return (mergedArrays[mergedArrays.length/2] + mergedArrays[mergedArrays.length/2-1]) / 2;
    }
    else return mergedArrays[Math.floor(mergedArrays.length/2)];
};