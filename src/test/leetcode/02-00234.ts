import isPalindrome from "leetcode/00234-Palind/solu";
import { ListNode } from "leetcode/00234-Palind/ListNodeClass";

let node4 = new ListNode(1);
let node3 = new ListNode(2, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

let head = node1;
console.log(head);
isPalindrome(head);

head = node4;
// let result = isPalindrome(head);

// let result = isPalindrome(head);
// console.log(result);
