import { ListNode } from "leetcode/00234-Palind/ListNodeClass";

type func = (head: ListNode | null) => ListNode | null;
const midOfListNode: func = (head) => {
  let slow = head;
  let fast = head;
  if (slow === null) {
    return null;
  }
  while (slow.next !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
export default midOfListNode;
