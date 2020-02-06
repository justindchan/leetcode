// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * param {ListNode} head
 * return {ListNode}
 */
var reverseList = function(head) {
  // iterative
  // account for edge case if head = null
  if (head === null) {
      return null;
  }
  // declare pointers
  let prev = null;
  let curr = head;
  let next = curr.next;
  // prev -> curr -> next 
  while (curr != null) {
      // save new next
      next = curr.next;
      // reverse next pointer
      curr.next = prev;
      //advance prev & curr
      prev = curr;
      curr = next
  }
  return prev;
};
