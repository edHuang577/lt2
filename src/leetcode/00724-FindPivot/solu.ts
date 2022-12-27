type func = (a: number[]) => number;
const pivotIndex: func = (nums) => {
  let resultNumbers: number;
  resultNumbers = 0;

  for (let i = 0; i < nums.length; i++) {
    let tmpSum = 0;
    for (let j = 0; j <= i; j++) {
      tmpSum += nums[j];
    }
  }

  return resultNumbers;
};
export default pivotIndex;
