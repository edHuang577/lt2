type func = (paramA: number[][], paramB: number) => number[];
const kWeakestRows: func = (input, cnt) => {
  let result: number[] = [];

  let computeVal = [];

  for (var i = 0; i < input.length; i++) {
    let secArr = input[i];
    let tmpVal = 0;
    for (var j = 0; j < secArr.length; j++) {
      // console.log(input[i][j] + ",");

      tmpVal += input[i][j];
    }
    computeVal.push({ idx: i, val: tmpVal });
    //console.log("==================");
  }
  // console.log(computeVal);
  // console.log("------");
  computeVal.sort((a, b) => {
    if (a.val === b.val) {
      return a.idx - b.idx;
    } else {
      return a.val - b.val;
    }
  });
  // console.log(computeVal);

  for (var k = 0; k < cnt; k++) {
    result.push(computeVal[k].idx);
  }
  return result;
};

export default kWeakestRows;
