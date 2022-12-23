type func = (accounts: number[][]) => number;
const maximumWealth: func = (accounts) => {
  let input = accounts;
  let resultNumber = 0;
  let computeVal = [];

  for (var i = 0; i < input.length; i++) {
    let secArr = input[i];
    let tmpVal = 0;
    for (var j = 0; j < secArr.length; j++) {
      // console.log(input[i][j] + ",");

      tmpVal += input[i][j];
    }
    computeVal.push(tmpVal);
    //console.log("==================");
  }
  computeVal.sort((a, b) => {
    return -(a - b);
  });
  // console.log(computeVal);
  resultNumber = computeVal[0];
  return resultNumber;
};
export default maximumWealth;
