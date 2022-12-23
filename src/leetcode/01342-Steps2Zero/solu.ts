type func = (a: number) => number;
const numberOfSteps: func = (num) => {
  let resultNumber = 0;

  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }
    resultNumber++;
  }
  return resultNumber;
};
export default numberOfSteps;
