type func = (a: number[]) => number[];
const runningSum: func = (nums) => {
  let resultNumbers: number[];
  resultNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    let tmpSum = 0;
    for (let j = 0; j <= i; j++) {
      tmpSum += nums[j];
    }
    resultNumbers.push(tmpSum);
  }

  return resultNumbers;
};
export default runningSum;
