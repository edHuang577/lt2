import { ListNode } from "leetcode/00234-Palind/ListNodeClass";

type func = (head: ListNode | null) => boolean;
const isPalindrome: func = (head) => {
  if (head === null) {
    return false;
  }

  let data: number[] = [];

  let currentNode = head;

  while (currentNode.val !== null) {
    data.push(currentNode.val);

    if (currentNode.next !== null) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }

  let result = false;
  console.log(data.length);
  for (let idx = 0; idx < data.length / 2; idx++) {
    let idxFromHead = idx;
    let idxFromTail = data.length - 1 - idx;
    result = data[idxFromHead] === data[idxFromTail];

    if (result === false) {
      break;
    }
  }
  return result;
};
export default isPalindrome;
