/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/
type func = (a: number) => string[];
const fizzBuzz: func = (numA) => {
  let strArr: string[] = [];

  for (let index = 1; index <= numA; index++) {
    let newval = "";
    if (index % 3 === 0) {
      newval = "Fizz";
    }
    if (index % 5 === 0) {
      newval += "Buzz";
    }
    if (newval.length === 0) {
      newval = index.toString();
    }
    strArr.push(newval);
  }
  return strArr;
};
export default fizzBuzz;
