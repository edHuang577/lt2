type func = (a: string) => number;
const romanToInt: func = (str) => {
  console.log(str);

  let resultNumber = 0;
  for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    let ca: string = s;
    let val: number = 0;
    switch (ca) {
      case "I":
        val = 1;
        if (
          _i + 1 < str_1.length &&
          (str_1[_i + 1] === "V" || str_1[_i + 1] === "X")
        ) {
          val = val * -1;
        }

        break;
      case "V":
        val = 5;
        break;
      case "X":
        val = 10;
        if (
          _i + 1 < str_1.length &&
          (str_1[_i + 1] === "L" || str_1[_i + 1] === "C")
        ) {
          val = val * -1;
        }
        break;
      case "L":
        val = 50;
        break;
      case "C":
        val = 100;
        if (
          _i + 1 < str_1.length &&
          (str_1[_i + 1] === "D" || str_1[_i + 1] === "M")
        ) {
          val = val * -1;
        }
        break;
      case "D":
        val = 500;
        break;
      case "M":
        val = 1000;
        break;
      default:
        console.log("default");
    }
    console.log(ca + ":" + val);
    resultNumber += val;
  }
  return resultNumber;
};
export default romanToInt;
