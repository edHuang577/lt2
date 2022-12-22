import midOfListNode from "leetcode/00876-midOfListnode/solu";
import { ListNode } from "leetcode/00234-Palind/ListNodeClass";

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

let head = node1;

let obj = midOfListNode(head);

console.log(obj);
