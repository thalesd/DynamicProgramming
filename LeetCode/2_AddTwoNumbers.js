/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = (l1, l2) => addTwoNumbersRecursive(l1, l2);

var addTwoNumbersRecursive = function(l1, l2, carry = 0){
    if(l1 == null && l2 == null && !carry) return null;

    let total = (l1?.val || 0) + (l2?.val || 0) + (carry || 0);
    carry = parseInt(total/10);

    return new ListNode(total%10, addTwoNumbersRecursive(l1?.next, l2?.next, carry));
}