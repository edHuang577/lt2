type func = (a: number[]) => number;
const pivotIndex: func = (nums) => {
  let resultNumbers: number;
  resultNumbers = -1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j < i) {
        leftSum += nums[j];
      } else if (j > i) {
        rightSum += nums[j];
      }
    }
    console.log("====" + i);
    console.log(leftSum);
    console.log(rightSum);
    if (leftSum === rightSum) {
      console.log("!!!!!!");
      console.log(i);
      resultNumbers = i;
      break;
    }

    leftSum = 0;
    rightSum = 0;
  }

  return resultNumbers;
};
export default pivotIndex;
