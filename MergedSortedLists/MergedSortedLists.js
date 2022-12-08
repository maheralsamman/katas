
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var mergeTwoLists = function (list1, list2) {
  // Check if either of the lists is null 
  if (!list1) {
      return list2;
  }
  if (!list2) {
      return list1;
  }
  // Head of the new linked list - this is the head of the resultant list
  let head = null;
  // Reference of head which is null at this point
  let temp = head;
  // Choose head which is smaller of the two lists
  if (list1.val < list2.val) {
      temp = head = new ListNode(list1.val);
      list1 = list1.next;
  } else {
      temp = head = new ListNode(list2.val);
      list2 = list2.next;
  }
  // Loop until any of the list becomes null
  while (list1 && list2) {
      if (list1.val < list2.val) {
          temp.next = new ListNode(list1.val);
          list1 = list1.next;
          temp = temp.next;
      } else {
          temp.next = new ListNode(list2.val);
          list2 = list2.next;
          temp = temp.next;
      }
  }
  // Add all the nodes in list1, if remaining
  while (list1) {
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
      temp = temp.next;
  }
  // Add all the nodes in list2, if remaining
  while (list2) {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
      temp = temp.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
