import func from "leetcode/01337-WeakestRows/solu";

let input = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]
];

let cnt = 3;
let re = func(input, cnt);
console.log(re);
